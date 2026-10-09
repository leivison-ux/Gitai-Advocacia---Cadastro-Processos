# Gita Advocacia — Cadastro de Processos

Aplicação Node.js para enviar PDF e gerar os 19 módulos LegalBox com as regras atuais do plugin. A API usa leitura de PDF da OpenAI Responses API e pesquisa web para consulta do TRT quando necessária. O resultado é editável e pode ser copiado por módulo ou exportado em texto. Não insere dados diretamente no LegalBox.

## Executar
Requer Node.js 22 ou superior. Sem dependências externas.

1. Copiar `.env.example` para `.env`.
2. Configurar `OPENAI_API_KEY` com uma chave da conta de API e `APP_ACCESS_CODE` com um código longo e exclusivo da equipe.
3. Executar `npm start` e abrir `http://localhost:3000`.

Não inserir a chave de IA no código, no navegador ou no GitHub. Ela deve existir somente nas variáveis de ambiente do servidor. O código da equipe é informado no formulário; não utilizar a chave de IA nesse campo. `OPENAI_MODEL` permite selecionar um modelo com suporte a PDF, Structured Outputs e pesquisa web; padrão `gpt-4.1`.

## Publicar
É necessário um serviço com servidor Node.js; GitHub Pages sozinho não executa essa API. O repositório contém `render.yaml` para implantação pelo Render: conectar este repositório, definir `OPENAI_API_KEY`, conferir o código gerado em `APP_ACCESS_CODE` e iniciar o serviço. Pode também hospedar em outro serviço Node.js com `npm start`, porta fornecida em `PORT` e HTTPS. Esta configuração não contrata um plano de hospedagem nem cria cobrança automaticamente.

## Dados e operação
PDF máximo de 25 MB. O documento é recebido em memória e enviado à OpenAI; não é escrito em disco nem salvo em banco pelo aplicativo. Resultados permanecem apenas na página até fechar/limpar, salvo se exportados pelo operador. `store:false` desabilita armazenamento da resposta para recuperação na API, mas não constitui garantia de retenção zero pelo provedor; verificar a política da conta OpenAI. Não colocar PDFs de processos no repositório. Acesso por código compartilhado é adequado para uma primeira versão interna; não inclui contas individuais nem auditoria.

Máximo de duas análises simultâneas por instância, limite de requisições por endereço e tempo de cinco minutos para IA. Documentos com contexto excessivo podem exigir divisão e conferência. A pesquisa de juiz deve utilizar fonte oficial, deixando pendência quando não confirmada.

As regras estão em `regras/`: a instrução principal tem prioridade sobre referências anteriores. Inclui fonte exclusiva no rol final DOS PEDIDOS, exclusões processuais, motivos de danos morais, resumo padronizado nos módulos 13/18 e salários restritos aos campos de admissão/demissão para a relevância de R$ 5.000,00. O manual do plugin é referência humana; as regras operacionais necessárias estão nos três textos enviados à IA.

## Verificar
`npm run check` e `npm test`. Os testes usam IA simulada, sem documentos reais, custo ou chave externa. Antes de uso operacional, testar a leitura real com a chave configurada e comparar com a PI.

## Vercel
Importar o repositório na Vercel com Framework Preset Other, Root Directory na raiz, Build Command npm run check e Output Directory public. O arquivo vercel.json inclui a função da API, as regras e os cabeçalhos. Configurar OPENAI_API_KEY, APP_ACCESS_CODE e OPENAI_MODEL=gpt-4.1 em Settings > Environment Variables; Node.js 22.x. Fazer Redeploy após mudar variáveis.

Na Vercel, esta versão aceita PDF de até 4 MB por causa do limite de payload das funções. Fora dela, o servidor Node aceita 25 MB. Para processos maiores na Vercel, será necessário implementar upload direto para armazenamento privado, com remoção após análise. A duração configurada é de 300 segundos e depende dos limites da conta.

## Versão 1.1.1 — plugin 0.1.10
Sincroniza os três textos da versão atual do plugin. Executa busca obrigatória em uma segunda chamada de IA quando não há juiz nos documentos, com tool_choice required. Exige chamada de busca executada e URL citada do respectivo TRT para aceitar o titular. Se falhar, informa a pendência concreta. A leitura inicial avalia todas as 41 opções de relevância com evidência; o servidor decide o item salarial pelo maior salário de admissão/demissão. Não altera salários trabalhistas. /api/health mostra versões para conferir o deploy. As mudanças do plugin não são transferidas automaticamente para o site: é necessário atualizar estes textos no GitHub e publicar.
