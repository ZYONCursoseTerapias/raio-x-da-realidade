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
  identidade: `Identidade é quem você é. Não o que você faz, não o papel que ocupa, não o título que carrega. É quem você é de verdade, por dentro, quando tira tudo isso.

E quando essa área está em desequilíbrio, o que aparece com mais frequência é a dificuldade de saber o que você quer para si mesma. A dificuldade de colocar limites sem se sentir culpada depois. A sensação de que você precisa se adaptar ao que os outros esperam para ser aceita, valorizada, amada. Muitas vezes você nem percebe que está fazendo isso. Vai se moldando naturalmente, porque aprendeu que era assim que as coisas funcionavam.

Sabe por que isso acontece? Porque nós não aprendemos a construir a própria identidade. Aprendemos a ser o que a família espera, o que a sociedade pede, o que o relacionamento exige. E num determinado momento da vida, você para e se pergunta: mas quem sou eu, afinal?

Esse padrão pode ter origem em muitos lugares diferentes. Pode ter vindo da sua história familiar, de um ambiente onde você aprendeu que suas opiniões não importavam tanto, que era melhor concordar, que se destacar demais era perigoso. Pode ter vindo de uma fase da vida em que você precisou se encaixar a qualquer custo e foi se moldando até perder o fio de quem era. Pode ter vindo de relacionamentos que foram te ensinando, aos poucos, que ser você mesma gerava conflito. Pode ter sido uma única experiência que deixou uma marca funda. Às vezes é a combinação de tudo isso junto.

O que eu noto no meu trabalho é que compreender a origem desse padrão muda tudo. O problema para de parecer uma falha sua. Fica claro que esse jeito de funcionar foi aprendido por alguma razão. E a partir daí, mudar se torna muito mais fácil.

Você não precisa se reinventar. Precisa se reencontrar. E esse é um caminho que se faz olhando para a sua história com atenção e com um olhar diferente do que você está acostumada a ter.

A Sessão de Desbloqueio e Direcionamento foi criada para isso. Vamos juntas identificar de onde veio esse padrão, entender o que te fez aprender a colocar os outros antes de você e traçar um caminho para que você comece a ocupar o seu próprio lugar.`,

  financas: `A área de Finanças não é só sobre dinheiro. É sobre o que você acredita que merece. É sobre a relação que você construiu, ao longo da vida, com a ideia de abundância, de segurança, de prosperidade.

E quando essa área está em desequilíbrio, o que aparece não é necessariamente a falta de dinheiro. O padrão mais comum é esse: o dinheiro entra e some, e você não entende muito bem por quê. Ou você ganha bem, mas vive com a sensação de que nunca é suficiente. Ou sente um desconforto estranho quando as coisas vão bem financeiramente, como se fosse uma questão de tempo até dar errado. Ou simplesmente não consegue organizar, guardar, planejar, mesmo querendo muito.

Esse padrão foi construído muito antes do seu primeiro salário. A relação com o dinheiro começa cedo, dentro de casa, nas conversas que você ouviu crescendo, nas situações que você viveu, nas frases que ficaram gravadas mesmo sem você ter percebido na época.

Pode ter sido uma fase de muita escassez que deixou a sensação de que dinheiro nunca é seguro. Pode ter sido uma crença aprendida de que falar de dinheiro é feio, que querer ter mais é ganância. Pode ter sido uma situação de perda que criou um medo inconsciente de acumular. Pode ter sido a forma como as pessoas ao seu redor se relacionavam com o dinheiro, e você foi absorvendo esse modelo sem questionar. Pode ter sido uma experiência específica que te fez sentir que prosperidade não era para você.

Enquanto esse padrão não for trabalhado em profundidade, nenhuma planilha vai resolver de vez. Não porque organização financeira não funciona, mas porque o problema não está na conta. Está no que você acredita sobre si mesma e sobre o que merece ter.

Na Sessão de Desbloqueio e Direcionamento, vamos mapear de onde veio essa crença, entender o que está por trás desse padrão e trabalhar para que você construa uma relação diferente com a sua prosperidade.`,

  relacionamentos: `Relacionamentos são um dos temas que mais aparecem no meu trabalho terapêutico. E um dos padrões mais comuns que eu vejo é esse: você dá muito mais do que recebe. Se adapta. Se anula. Espera. E vai ficando cada vez mais esgotada sem entender direito por quê.

Quando essa área está em desequilíbrio, o que aparece com frequência é a sensação de que o esforço não é equilibrado. De que você está sempre disponível para o outro, mas quando precisa, o outro não está. De que você se comunica, mas não é ouvida de verdade. De que você cede, mas raramente sente que a sua necessidade também importa. E aí vem a dúvida: será que sou eu que estou exigindo demais? Será que o problema sou eu?

Na maioria das vezes, não é você que está exigindo demais. É que você aprendeu a se relacionar dessa forma. E esse aprendizado tem uma origem.

Pode ter vindo da forma como você viu as relações acontecendo ao seu redor quando crescia. Do que foi sendo ensinado, direta ou indiretamente, sobre o que significa amar. Pode ter vindo de relações anteriores que foram moldando o que você passou a aceitar como normal. Pode ter vindo de uma necessidade de ser aceita que te fez aprender a ceder antes mesmo de ser pedido. Pode ter sido uma situação específica que te ensinou que expressar o que sente gera conflito, e foi mais seguro deixar para lá. Às vezes é um acúmulo de muitas coisas pequenas que, juntas, foram criando um padrão.

O que eu quero que você entenda é que isso não é um defeito seu. Você não é difícil de amar, não é exigente demais, não está errada em querer reciprocidade. Você aprendeu a se relacionar de um jeito que não te serve mais, e esse padrão pode ser compreendido e transformado.

Na Sessão de Desbloqueio e Direcionamento, vamos olhar para a origem desse padrão nos seus relacionamentos, entender o que te fez aprender a funcionar assim e trabalhar para que você comece a se relacionar de um lugar diferente.`,

  carreira: `Carreira e profissão é muito mais do que o que você faz para ganhar dinheiro. É a forma como você se expressa no mundo através do seu trabalho. É o sentido que você encontra no que faz. É a conexão entre quem você é e o que você entrega.

E quando essa área está em desequilíbrio, o que aparece com mais frequência não é a falta de competência. Você provavelmente faz bem o que faz. O que aparece é a desconexão. A sensação de estar no automático. De fazer as coisas direito, mas sem motivação real. De acordar sem vontade de começar o dia. De chegar em casa esgotada de um jeito que vai além do cansaço físico.

Sabe por que isso acontece? Porque em algum momento do caminho, você se afastou do que realmente te move.

Pode ter sido uma escolha feita sob pressão, sem espaço para ouvir o que você mesma queria. Pode ter sido uma decisão que fez sentido naquele momento, mas foi te levando para longe de você com o tempo. Pode ter sido um ambiente de trabalho que foi te esvaziando aos poucos. Pode ter sido uma crença aprendida de que trabalho não precisa ter prazer, que o importante é a estabilidade. Pode ter sido uma promoção aceita por pressão, um caminho escolhido para agradar, uma área escolhida por segurança e não por vocação. Pode ter sido um período da vida em que você precisou sobreviver e foi adiando o que realmente queria. E foi adiando, adiando, até perder o fio.

O que eu percebo é que, quando você entende por que se afastou, fica muito mais fácil encontrar um caminho de volta. Não necessariamente largando tudo. Às vezes é dentro do que você já faz. Às vezes é num ajuste de rota. O importante é que esse caminho seja seu, feito a partir de quem você é de verdade.

A Sessão de Desbloqueio e Direcionamento foi criada exatamente para esse momento. Vamos identificar onde aconteceu esse distanciamento, entender o que está por trás desse esvaziamento e traçar juntas um caminho profissional que faça sentido para você.`,
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
