import {readFile} from 'node:fs/promises';
export const VERSION='1.1.5';
export const OPTIONS=(await readFile(new URL('./regras/opcoes.md',import.meta.url),'utf8')).split('\n').filter(l=>/^\d+\. /.test(l)).map(l=>l.replace(/^\d+\. /,''));
export const auditSchema={type:'object',properties:{judgeInDocuments:{type:'boolean'},court:{type:'string'},trtNumber:{type:['integer','null']},admissionSalary:{type:['number','null']},dismissalSalary:{type:['number','null']},relevances:{type:'object',properties:Object.fromEntries(OPTIONS.map(option=>[option,{type:'object',properties:{identified:{type:'boolean'},evidence:{type:'string'}},required:['identified','evidence'],additionalProperties:false}])),required:OPTIONS,additionalProperties:false}},required:['judgeInDocuments','court','trtNumber','admissionSalary','dismissalSalary','relevances'],additionalProperties:false};
export const auditInstructions='Preencher audit: judgeInDocuments somente true se nome do juiz constar dos documentos. court: Vara e cidade do módulo 3; trtNumber: região do TRT (1 a 24), null se indeterminada. No módulo 13, apresentar Dados Trabalhistas na tabela Campo | Admissão | Demissão, com uma linha Salário contendo apenas um valor monetário por coluna, ou NÃO INFORMADO. Comissões e remunerações distintas devem aparecer somente em pendências. admissionSalary e dismissalSalary são números em reais extraídos EXCLUSIVAMENTE desses campos, null se ausentes. NÃO usar comissões ou remuneração externa a esses campos. relevances: objeto com TODAS as 41 chaves obrigatórias conforme o schema; avaliar cada opção individualmente, preenchendo inclusive as não identificadas; identified boolean e evidence com fato e página da PI quando identificado. Ausência de evidência impede inclusão. Não restringir análise de relevância ao rol final. RESCISÃO INDIRETA deve ser identificada também quando formulada como pedido sucessivo, subsidiário ou alternativo; não exige pedido principal nem deferimento judicial. Não pesquisar dados pessoais na web.';
function salaryCell(s){const match=s?.match(/R\$\s*([\d.]+,\d{2})/);return match?Number(match[1].replace(/\./g,'').replace(',','.')):null;}
export function applyRelevances(result){
 const a=result.audit;
 if(a?.relevances && !Array.isArray(a.relevances) && typeof a.relevances==='object'){
  const entries=a.relevances;
  if(Object.keys(entries).length!==OPTIONS.length||OPTIONS.some(o=>!Object.hasOwn(entries,o)))throw Error('Auditoria incompleta — faltam opções obrigatórias');
  a.relevances=OPTIONS.map(option=>({option,...entries[option]}));
 }
 if(!a||typeof a.judgeInDocuments!=='boolean'||typeof a.court!=='string'||!Array.isArray(a.relevances)||a.relevances.length!==41)throw Error('Auditoria incompleta');
 if(a.trtNumber!==null&&(!Number.isInteger(a.trtNumber)||a.trtNumber<1||a.trtNumber>24))throw Error('TRT inválido');
 for(const key of ['admissionSalary','dismissalSalary'])if(a[key]!==null&&(typeof a[key]!=='number'||!Number.isFinite(a[key])||a[key]<0))throw Error('Salário inválido');
 if(new Set(a.relevances.map(v=>v.option)).size!==41)throw Error('Lista de relevâncias inválida');
 a.relevances=OPTIONS.map(option=>{const v=a.relevances.find(v=>v.option===option);if(!v||typeof v.identified!=='boolean'||typeof v.evidence!=='string')throw Error('Lista de relevâncias inválida');return v;});
 // A opção salarial é decidida pelo servidor, não pela classificação da IA.
 const row=result.modules[12].content.split('\n').find(l=>/^\|\s*Sal[áa]rio\s*\|/i.test(l));
 const cells=row?.split('|').slice(2,4)||[];
 const salaries=cells.map(salaryCell).filter(v=>v!==null);
 const salaryName=OPTIONS[31];
 const matched=a.relevances.filter(v=>v.option!==salaryName&&v.identified&&v.evidence.trim());
 // Pedido sucessivo/alternativo também é pedido efetivo: conferir a tabela
 // final já extraída, sem confundir alegações ou jurisprudência com pedidos.
 const indirectName=OPTIONS[33];
 const indirectRow=result.modules[1].content.split('\n').find(l=>/^\s*\|/.test(l)&&/RESCIS[ÃA]O INDIRETA/i.test(l.split('|')[1]||''));
 if(indirectRow&&!matched.some(v=>v.option===indirectName))matched.push({option:indirectName,evidence:'Pedido expresso na tabela do MÓDULO: PEDIDO, inclusive quando formulado de modo sucessivo ou alternativo.'});
 const identified=matched.map(v=>v.option);
 if(salaries.length&&Math.max(...salaries)>=5000)identified.push(salaryName);
 if(!salaries.length)result.pending.push('AÇÕES RELEVANTES: salários de admissão e demissão não informados; não foi possível avaliar a relevância de R$ 5.000,00.');
 const money=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
 const blocks=OPTIONS.filter(o=>identified.includes(o)).map(o=>{
  const evidence=o===salaryName?'Maior salário dos campos de Admissão e Demissão: '+money(Math.max(...salaries))+'.':matched.find(v=>v.option===o).evidence.trim();
  return 'Relevância identificada: '+o+'\n\nFundamento: '+evidence;
 });
 const salaryNote=salaries.length&&Math.max(...salaries)<5000?' O item de salário igual ou superior a R$ 5.000,00 não foi marcado: o maior salário informado nos campos de Admissão e Demissão é '+money(Math.max(...salaries))+'. As comissões e a remuneração total narrada não entram nesse critério.':'';
 result.modules[16].content=(blocks.length?blocks.join('\n\n'):'Relevância identificada: NENHUMA IDENTIFICADA')+'\n\nForam comparadas as 41 opções.'+salaryNote;
 return result;
}
export function applyDocumentJudge(result){
 if(!result.audit.judgeInDocuments){
  result.modules[8].content='| Campo | Saída |\n| --- | --- |\n| Juiz | NÃO LOCALIZADO — CONFERIR MANUALMENTE |';
  result.pending.push('JUIZ: nome não localizado no PDF; conferir manualmente. Busca na web desativada.');
 }
 return result;
}
