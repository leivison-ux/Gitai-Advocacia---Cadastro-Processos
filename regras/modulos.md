# Regras dos 19 módulos

## 1. MÓDULO: CADASTRO
Área LBCA: 2011 - VT Trabalhista. Área: ÁREA 2000. Departamento: LBCA. Origem: LBCA. Segredo de Justiça: Não por padrão; marcar Sim se identificado nos autos. Audiência designada, data e horário: extrair dos autos; se não houver, indicar não localizada, sem supor agendamento. CIP: NÃO. Data da Distribuição: conferir nos autos/site oficial do Tribunal; distinguir autuação de assinatura e explicitar se somente autuação estiver disponível. Número do Processo e Número do Processo CNJ: extrair e formatar. Data da Citação: repetir Data de Recebimento do módulo 15, regra operacional; não substituir pela citação processual. Justificativa CNJ: NÃO ALTERAR. Ação: RECLAMAÇÃO TRABALHISTA para esse tipo de processo; se distinto, identificar o tipo real. Rito: extrair. Valor da causa: extrair. Cliente: TELEFÔNICA. Sinalizar a verificação de duplicidade como pendente no LegalBox se não houver acesso.

## 2. MÓDULO: PEDIDO
Tipo de Pedido: selecionar sempre Contrato de trabalho, Rescisão, Verbas Rescisórias.
Data Referência: repetir Data de Recebimento do módulo 15.
Tipos pedidos na PI: consultar todas as opções em opcoes.md e sugerir as compatíveis com os pedidos reais. Não confundir Rescisão de sentença com rescisão do contrato de trabalho.
No final, listar todos os pedidos em tabela Pedido | Valor total do pedido, individualmente, somando reflexos somente quando atribuíveis e evitando duplicação. Reflexos conjuntos sem rateio explícito devem ter linha própria. Informar SEM VALOR INDIVIDUALIZADO quando necessário. Distinguir alternativas/sucessivos e não somá-los aos principais. Exibir total dos pedidos quantificados somáveis e valor da causa, sinalizando divergências. Considerar honorários e pedidos processuais neste detalhamento quando constarem, com sua natureza e sem inventar valor; a restrição a mérito aplica-se ao resumo do módulo 13.
Usar AVISO PRÉVIO INDENIZADO, sem número de dias. Agrupar descontos indevidos distintos do aviso-prévio em DESCONTOS RESCISÓRIOS INDEVIDOS e somar os valores. Manter devolução de aviso-prévio descontado em linha separada. Juros simples conforme manual, sem calcular juros sem parâmetros disponíveis.

## 3. MÓDULO: FÓRUM
Informar TRT, Vara, cidade, UF e endereço do Fórum. Se ausentes, consultar fonte oficial. Não adivinhar Vara pelo número sem verificar a correspondência.

## 4. MÓDULO: ELETRÔNICO
Informar se é eletrônico e o sistema constatado, por exemplo SIM e PJE.

## 5. MÓDULO: PARTE AUTORA
Somente Nome e CPF. Havendo várias pessoas, repetir esses campos para cada uma.

## 6. MÓDULO: ADVOGADO DA PARTE AUTORA
Somente Nome para publicações e OAB. Priorizar a indicação expressa de publicação exclusiva. Se não houver, identificar os procuradores sem escolher arbitrariamente um entre vários.

## 7. MÓDULO: JUIZO 100 DIGITAL
Somente Juízo 100% digital?: Não; Peticionada a renúncia?: Não.

## 8. MÓDULO: PARTE RÉ
Cadastrar primeiro a prestadora (1ª reclamada), depois a empresa do Grupo Telefônica. Informar Nome e CNPJ das rés identificadas. Padronizar em caixa alta sem acentos e sem abreviações, expandindo somente abreviações inequívocas. Sinalizar divergências entre CNPJ de matriz/filial em documentos.

## 9. MÓDULO: JUIZ
Extrair nome do juiz dos autos. Quando não localizar, buscar no site oficial do respectivo TRT o juiz titular da Vara indicada no módulo FÓRUM. Citar fonte e indicar que se trata do titular consultado, não do magistrado identificado no processo. Se não conseguir verificar, deixar pendente; não usar cadastro antigo como confirmação atual.

## 10. MÓDULO: CAUSA RAIZ
Comparar exclusivamente: 3º INTERESSADO, RESPONSABILIDADE SOLIDÁRIA, RESPONSABILIDADE SUBSIDIÁRIA. Priorizar RESPONSABILIDADE SOLIDÁRIA se pedida na PI; senão, selecionar RESPONSABILIDADE SUBSIDIÁRIA se pedida. Responsabilidade direta não significa solidariedade. Usar 3º INTERESSADO se a Telefônica não for parte e precisar cumprir determinação. Se nenhuma se aplicar, informar não identificada. Para responsabilidade subsidiária, indicar sequência: RESPONSABILIDADE SUBSIDIÁRIA, VERBAS SALARIAIS, VERBAS RESCISÓRIAS.

## 11. MÓDULO: REGRA DE PUBLICAÇÃO
Pesquisar publicação: SIM. Visualização pelo supervisor: SIM.

## 12. MÓDULO: SITUAÇÃO FINANCEIRA DO PRESTADOR
Somente Situação Financeira Prestador: Solvente.

## 13. MÓDULO: INFORMAÇÕES TRABALHISTAS
Nº do Controle: pegar o código do cliente; se ausente, NÃO INFORMADO. Caso na Planilha física da Telefônica: NÃO PREENCHER.
Dividir Dados Trabalhistas em dois blocos, extraindo da PI:

| Campo | Admissão | Demissão |
| --- | --- | --- |
| Tipo | Admissão | Demissão |
| Motivo | NÃO PREENCHER | NÃO PREENCHER; se ainda empregado, explicar CONTRATO ATIVO — SEM DEMISSÃO |
| Data | Data do início efetivo da prestação, mesmo se registro posterior | Data efetiva da demissão; se ausente, data atual em America/Sao_Paulo, identificada como padrão operacional; se ativo, explicar ausência de demissão |
| Salário | Salário quando admitido | Salário quando demitido; se ausente, repetir salário de admissão informado |
| Por | Mês ou hora conforme PI | Mês ou hora conforme PI |
| Cargo | Cargo da admissão | Cargo da demissão; se não mudou, repetir o anterior |
| Função Elegível | NÃO APLICÁVEL | NÃO APLICÁVEL |
| Status Empregador | NÃO PREENCHER | NÃO PREENCHER |

Não atribuir último salário à admissão sem respaldo. Distinguir salário fixo de remuneração total/comissões. Registrar na pendência salário de admissão ausente ou diferenças relevantes; não inventar. Não usar projeção do aviso-prévio como último dia efetivamente trabalhado.

Resumo do Pedido: listar todos e somente os pedidos de mérito da PI, em caixa alta, separados por vírgula. Começar por RESPONSABILIDADE SOLIDÁRIA ou RESPONSABILIDADE SUBSIDIÁRIA quando pedida. Ler toda a PI, incluindo pedidos fora de MÉRITO/DOS PEDIDOS/PEDIDOS. Excluir exibição de documentos, honorários, gratuidade e demais pedidos processuais. Se houver pedido denominado OUTROS PEDIDOS, usar somente OUTROS PEDIDOS uma vez ao final, sem criar esse rótulo para suprir dúvida.
Normalizar ASSÉDIO MORAL para DANOS MORAIS. Manter RESCISÃO ANTECIPADA DO CONTRATO e RESCISÃO INDIRETA separadamente quando efetivamente pedidos; nunca converter um no outro. Usar as seguintes formas: MULTA DE 40%, RETIFICAÇÃO DOS DOCUMENTOS, ENTREGA DAS GUIAS DO SEGURO-DESEMPREGO OU INDENIZAÇÃO SUBSTITUTIVA, MULTA DO ARTIGO 467 CLT, AVISO PRÉVIO INDENIZADO, DESCONTOS RESCISÓRIOS INDEVIDOS. Não incluir horas extras somente porque mencionadas como já pagas.

## 14. MÓDULO: CLASSIFICAÇÃO DE TAREFAS PARA A SI
Deseja classificar uma tarefa para a SI?: SIM. Obs Tarefa: prazo constante na notificação e informações de audiência para agendamento. Se não localizada notificação/prazo, informar ausência; não calcular prazo sem fundamento.

## 15. MÓDULO: RECEBIMENTO
Data de Recebimento: data em que LBCA recebeu o caso. Se não informada, NÃO INFORMADA; não usar data de upload, distribuição ou data atual. Replicar nos módulos 1 e 2.

## 16. MÓDULO: LIMINAR/TUTELA ANTECIPADA
Preencher quando houver deferimento identificado, com objeto e decisão. Diferenciar pedido de deferimento. Se ausente, NÃO LOCALIZADO DEFERIMENTO.

## 17. MÓDULO: AÇÕES RELEVANTES
Consultar sempre a lista completa em opcoes.md e comparar com fatos/pedidos da PI, indicando todas as relevâncias aplicáveis com o texto exato da opção. Não marcar por mera citação de jurisprudência ou referência genérica. Não inferir assédio sexual de assédio moral, justa causa de ameaça ou revelia de notificação não encontrada.
Exibir uma linha por relevância: Relevância identificada: ASSÉDIO SEXUAL. Sem correspondências: Relevância identificada: NENHUMA IDENTIFICADA.
Exclusivamente para RECLAMANTE COM SALÁRIO IGUAL OU SUPERIOR A R$ 5.000,00 (CINCO MIL REAIS) INDEPENDENTE DO CARGO, considerar somente os valores preenchidos em Salário dos tipos Admissão e Demissão do módulo 13. Utilizar o maior disponível; se atingir R$ 5.000,00, incluir a relevância. Não contabilizar outros valores de comissões, remuneração ou TRCT que não estejam nesses campos. Se ambos ausentes, sinalizar impossibilidade de avaliar esse item. Esta comparação não altera a extração/preenchimento dos salários no módulo 13 nem vale para outros módulos.

## 18. MÓDULO: OBSERVAÇÃO PERFIL 1
Reproduzir exatamente o Resumo do Pedido do módulo 13, sem incluir narrativa adicional.

## 19. MÓDULO: INSERÇÃO DE ARQUIVOS
Listar os arquivos fornecidos e sua natureza. Informar inserção no LegalBox e Processum como pendente se não executada. Não afirmar download do PJE ou upload sem realizá-lo.

