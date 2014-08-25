# Orientação à procedures

Sabe quando seu chefe usa a frase: "Usa procedure, é mais rápido" ou "Deixa no banco, assim a gente não precisa compilar para dar manutenção"?

O pior problema de um sistema em que a regra de negócios, código, estrutura e lógica estão em um banco de dados é por um simples motivo: é um banco de dados. Você até pode usar uma lâmina de barbear para descascar maçãs, mas qual o impacto desta prática quando for barbear o rosto?

Obviamente, o TSQL oferece algumas estruturas que permitem a utilização de seu motor para algumas manobras que exijam um certo desempenho, porém, nenhuma tecnologia é "bala de prata". Não podemos simplesmente migrar o sistema para dentro do banco, senão ele vai ter que mudar de nome.

## Baixa testabilidade

O código no banco de dados em TSQL permite testes unitários através de frameworks ou ferramentas, porém, a API não é tão desenvolvida e os recursos da linguagem procedural, normalmente influem em um alto acoplamento e difícil análise posterior.

Um código procedural implica em um emaranhado de conteúdo e, para um teste ser confiável, o princípio de responsabiliade deve ser respeitado. Imagine agora testar uma procedure que faz 10 consultas de pontos difrentes? Ou uma função que retorna uma tabela baseada em 5 outras. Este tipo de teste acaba sendo inviável de ser universalizado, reduzindo a confiabilidade.

## Difícil Debug

Bom, se o acoplamento dificulta testes, para debug é um caos. Pense que o código no banco fica armazenado.. no banco. Para o debug, são necessárias permissões e recursos que, muitas vezes, não estão disponíveis para o desenvolvedor.

A lógica deve ficar na aplicação, os dados no banco de dados. Excetuando-se algumas situações de estrita necessidade de performance (que não possam ser resolvidas através do código na aplicação).

## Acoplamento

Como falado antes, a dificuldade de testes em uma procedure ou function ou view é o alto acoplamento. Isto significa que você vai fazer 10 mil coisas em um único lugar e vai reutilizá-lo em 10 mil outros lugares.

De repente, alguém vai e faz uma alteração na procedure X e todo o seu sistema foi alterado. Você nem imagina que o seu código na página A, do outro lado do planeta, está associado à procedure X. Horas de manutenção, busca e tentativas de corrigir um erro que, na verdade, foi gerado pelo alto acoplamento.

Não, não podemos dizer que isto seja errado, apenas uma ameaça. Às vezes, por questões de desempenho (mais uma vez), é necessário fazer algumas coisas mais "comprimidas", porém, isto é uma prática que torna os programadores carecas e os gerentes possessos.

## Não versiona

Estamos sendo um pouco dramáticos. Dá para versionar a procedure, claro. Se você colocar o código feito em uma pasta e passar a versionar os .SQL, até fica possível. Mas não é como código fonte. O controle é muito mais trabalhoso, depende da interação humana. Organizar as pastas das consultas, saber qual usar e quando usar. Voltar a versão significa ter que consultar o histórico e rodar novamente no banco de dados. Todo esse esforço é desnecessário em um mundo em que a velocidade é tão importante para a competitividade.

Portanto, para que complicar? É claro, se você tiver que usar procedimentos armazenados, por favor, organize-os em pastinhas, com versionamento, com nomes intuitivos. Preencha um controle de versão à cada atualização, no cabeçalho do documento e não esqueça de sempre colocar comentários pertinentes, utilizando sua ferramenta predileta de versionamento.

