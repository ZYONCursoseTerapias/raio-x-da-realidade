export interface Questao {
  id: number
  texto: string
  invertida: boolean
}

export interface Camada {
  id: string
  nome: string
  icone: string
  questoes: Questao[]
}

export const TEXTOS_RESULTADO: Record<string, string> = {
  identidade: `Identidade é quem você é. Não o que faz, não o papel que ocupa, não o título que carrega. É o que existe de verdade, por dentro, quando tira tudo isso.

E quando essa área está em desequilíbrio, o que aparece com mais frequência é a dificuldade de saber o que quer para si mesma. De colocar limites sem se sentir culpada depois. A sensação de que é preciso se adaptar ao que os outros esperam para ser aceita, valorizada, amada. Muitas vezes nem se percebe que isso está acontecendo. Vai se moldando naturalmente, porque foi aprendendo que era assim que as coisas funcionavam.

Sabe por que isso acontece? Porque nós não aprendemos a construir a própria identidade. Aprendemos a ser o que a família espera, o que a sociedade pede, o que o relacionamento exige. E num determinado momento da vida, vem a pergunta: mas quem sou eu, afinal?

Esse padrão tem origem em muitos lugares. Pode ter vindo da história familiar, de um ambiente onde as suas opiniões não importavam tanto, onde era melhor concordar, onde se destacar demais era perigoso. Pode ter sido uma fase em que foi preciso se encaixar a qualquer custo. Pode ter sido um relacionamento que foi ensinando, aos poucos, que ser autêntica gerava conflito. Pode ter sido uma única experiência que deixou uma marca funda. Às vezes é a combinação de tudo isso.

Minha experiência profissional mostra que compreender a origem desse padrão muda tudo. O problema para de parecer uma falha pessoal. Fica claro que esse jeito de funcionar foi aprendido por alguma razão. E a partir daí, mudar se torna muito mais fácil.

Não é preciso se reinventar. É preciso se reencontrar. E esse caminho se faz olhando para a própria história com atenção e por um ângulo diferente do que se está acostumada.

A Sessão de Desbloqueio e Direcionamento foi criada para isso. Vamos identificar de onde veio esse padrão, de sempre colocar os outros na frente e traçar um caminho para começar a se priorizar.`,

  financas: `A área de Finanças não é só sobre dinheiro. É sobre o que se acredita merecer. É sobre a relação construída, ao longo da vida, com a ideia de abundância, de segurança, de prosperidade.

E quando essa área está em desequilíbrio, o que aparece não é necessariamente a falta de dinheiro. O padrão mais comum é este: o dinheiro entra e some, sem que se entenda muito bem por quê. Ou se ganha bem, mas a sensação é de que nunca é suficiente. Ou aparece um desconforto estranho quando as coisas vão bem financeiramente, como se fosse uma questão de tempo até dar errado. Ou simplesmente não se consegue organizar, guardar, planejar, mesmo querendo muito.

Esse padrão foi construído muito antes do primeiro salário. A relação com o dinheiro começa cedo, dentro de casa, nas conversas que ouviu enquanto crescia, nas situações que viveu, nas frases que ficaram gravadas mesmo sem perceber na época.

Pode ter sido uma fase de muita escassez que deixou a sensação de que dinheiro nunca é suficiente. Pode ter sido uma crença aprendida de que falar de dinheiro é feio, que querer ter mais é ganância. Pode ter sido uma situação de perda que criou um medo inconsciente de acumular. Pode ter sido a forma como as pessoas ao redor se relacionavam com o dinheiro, absorvida como modelo sem questionar. Pode ter sido uma experiência específica que fez sentir que prosperidade não era para você.

Enquanto esse padrão não for trabalhado em profundidade, nenhuma planilha vai resolver. Não porque organização financeira não funciona, mas porque o problema não está na conta. Está no que se acredita sobre si mesma e sobre o que se merece ter.

Na Sessão de Desbloqueio e Direcionamento, vamos mapear de onde veio essa crença, entender o que está por trás desse padrão e trabalhar para que sua relação com a prosperidade seja diferente.`,

  relacionamentos: `Um dos padrões mais comuns que eu mais vejo dentro dos relacionamentos é esse: você dá muito mais do que recebe. Se adapta. Se anula. Espera. E vai ficando cada vez mais esgotada sem entender direito por quê.

Quando essa área está em desequilíbrio, o que aparece com frequência é a sensação de que o esforço não é equilibrado. De estar sempre disponível para o outro, mas quando precisa, o outro não está. De se comunicar, mas não ser ouvida de verdade. De ceder, mas raramente sentir que as suas necessidades também importam. E aí vem a dúvida: será que estou exigindo demais? Será que o problema sou eu?

Na maioria das vezes, não é isso. É que se aprendeu a se relacionar dessa forma. E esse aprendizado tem uma origem.

Pode ter vindo da forma como as relações aconteciam ao redor quando você crescia. Do que foi sendo ensinado, direta ou indiretamente, sobre o que significa amar. Pode ter vindo de relações anteriores que foram moldando o que passou a ser aceito como normal. Pode ter vindo de uma necessidade de ser aceita que fez aprender a ceder antes mesmo de ser pedido. Pode ter sido uma situação específica que ensinou que expressar o que sente gera conflito, e que era mais seguro deixar para lá. Às vezes é um acúmulo de muitas coisas pequenas que, juntas, foram criando esse padrão.

Quero que você saiba que isso não é um defeito seu. Querer ser ouvida é legítimo. Querer reciprocidade é legítimo. Querer equilíbrio é legítimo. Você aprendeu a aceitar menos do que merece, e esse padrão tem origem e tem solução. É possível mudar essa realidade.

Na Sessão de Desbloqueio e Direcionamento, vamos entender o que criou essa forma de se relacionar e trabalhar para que seus vínculos sejam mais equilibrados e mais verdadeiros.`,

  carreira: `Carreira e profissão é muito mais do que o que se faz para gerar dinheiro. É a forma como você se expressa no mundo através do trabalho. É ter um propósito, uma missão. É ter um sentido muito mais profundo naquilo que se faz.

E quando essa área está em desequilíbrio, o que aparece com mais frequência não é a falta de competência. Provavelmente você faz bem o que faz. O que aparece é a desconexão. A sensação de estar no automático. De fazer as coisas direito, mas sem motivação real. De acordar sem vontade de começar o dia. De chegar em casa esgotada de um jeito que vai além do cansaço físico.

Sabe por que isso acontece? Porque em algum momento do caminho, você se afastou do que realmente te move.

Pode ter sido uma escolha feita sob pressão, sem espaço para ouvir o que realmente queria. Pode ter sido uma decisão que fez sentido naquele momento, mas que foi criando um distanciamento de si mesma ao longo do tempo. Pode ter sido um ambiente de trabalho que foi retirando a energia e a motivação. Pode ter sido uma crença aprendida de que trabalho não precisa ter prazer, que o importante é a estabilidade. Pode ter sido uma promoção aceita por pressão, um caminho escolhido para agradar, uma área escolhida por segurança e não por vocação. Pode ter sido um período da vida em que foi preciso sobreviver e o que realmente importava foi ficando para depois. E ficou. Por muito tempo.

O que eu percebo é que, quando se entende por que houve esse afastamento, fica muito mais fácil encontrar um caminho de volta. Não necessariamente largando tudo. Às vezes é dentro do que já se faz. Às vezes é num ajuste de rota. O importante é que esse caminho seja construído a partir de quem você é de verdade.

A Sessão de Desbloqueio e Direcionamento foi criada exatamente para esse momento. Vamos identificar o que causou a sua desconexão e traçar juntas um caminho profissional que faça sentido para você.`,
}

export const ESCALA = [
  { valor: 5, label: 'Concordo totalmente' },
  { valor: 4, label: 'Concordo' },
  { valor: 3, label: 'Neutro' },
  { valor: 2, label: 'Discordo' },
  { valor: 1, label: 'Discordo totalmente' },
]

// 4 camadas · 5 perguntas cada
export const CAMADAS: Camada[] = [
  {
    id: 'identidade',
    nome: 'Identidade',
    icone: '🌀',
    questoes: [
      { id: 1,  texto: 'Sinto-me bem com a imagem que vejo no espelho.',                      invertida: false },
      { id: 2,  texto: 'Tenho energia física para realizar as tarefas do meu dia.',            invertida: false },
      { id: 3,  texto: 'Consigo tomar decisões por conta própria, sem depender dos outros.',   invertida: false },
      { id: 4,  texto: 'Sinto-me segura para ser quem eu sou em qualquer lugar.',              invertida: false },
      { id: 5,  texto: 'Sei colocar limites quando alguém me desrespeita.',                    invertida: false },
    ],
  },
  {
    id: 'financas',
    nome: 'Finanças',
    icone: '💎',
    questoes: [
      { id: 6,  texto: 'Sinto que o dinheiro que ganho hoje atende às minhas necessidades.',   invertida: false },
      { id: 7,  texto: 'Consigo organizar meus ganhos e meus gastos todo mês.',                invertida: false },
      { id: 8,  texto: 'Sinto que mereço viver com conforto e tranquilidade financeira.',      invertida: false },
      { id: 9,  texto: 'Tenho apego às coisas materiais.',                                     invertida: false },
      { id: 10, texto: 'Confio na minha capacidade de gerar renda e me sustentar.',            invertida: false },
    ],
  },
  {
    id: 'relacionamentos',
    nome: 'Relacionamentos',
    icone: '🤝',
    questoes: [
      { id: 11, texto: 'Sinto que sou respeitada pela pessoa com quem convivo.',                            invertida: false },
      { id: 12, texto: 'Consigo conversar com clareza sobre o que sinto e o que espero do outro.',          invertida: false },
      { id: 13, texto: 'Sinto que existe equilíbrio entre o que eu dou e o que eu recebo na minha relação.', invertida: false },
      { id: 14, texto: 'Consigo resolver desentendimentos de forma tranquila e madura.',                    invertida: false },
      { id: 15, texto: 'Sinto que posso ser eu mesma dentro do meu relacionamento.',                        invertida: false },
    ],
  },
  {
    id: 'carreira',
    nome: 'Carreira e Profissão',
    icone: '🌿',
    questoes: [
      { id: 16, texto: 'Sinto orgulho do caminho profissional que construí até aqui.',          invertida: false },
      { id: 17, texto: 'Sinto que sou respeitada e valorizada no que eu faço.',                 invertida: false },
      { id: 18, texto: 'Tenho clareza sobre onde quero chegar na minha vida profissional.',     invertida: false },
      { id: 19, texto: 'Sinto que ocupo o meu lugar com confiança e segurança.',                invertida: false },
      { id: 20, texto: 'Sinto segurança para falar sobre o meu trabalho para outras pessoas.',  invertida: false },
    ],
  },
]
