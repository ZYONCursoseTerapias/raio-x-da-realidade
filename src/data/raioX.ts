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

// Substituir pelos links reais dos vídeos após gravar
export const VIDEO_URLS: Record<string, string> = {
  identidade:      'https://www.youtube.com/embed/SEU_VIDEO_IDENTIDADE',
  financas:        'https://www.youtube.com/embed/SEU_VIDEO_FINANCAS',
  relacionamentos: 'https://www.youtube.com/embed/SEU_VIDEO_RELACIONAMENTOS',
  carreira:        'https://www.youtube.com/embed/SEU_VIDEO_CARREIRA',
}

export const ESCALA = [
  { valor: 5, label: 'Concordo totalmente' },
  { valor: 4, label: 'Concordo' },
  { valor: 3, label: 'Neutro' },
  { valor: 2, label: 'Discordo' },
  { valor: 1, label: 'Discordo totalmente' },
]

// 4 camadas · 5 perguntas cada · a última (Q5) de cada camada é sempre invertida
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
      { id: 5,  texto: 'Sei colocar limites quando alguém me desrespeita.',                    invertida: true  },
    ],
  },
  {
    id: 'financas',
    nome: 'Finanças e Valor',
    icone: '💎',
    questoes: [
      { id: 6,  texto: 'Sinto que o dinheiro que ganho hoje atende às minhas necessidades.',   invertida: false },
      { id: 7,  texto: 'Consigo organizar meus ganhos e meus gastos todo mês.',                invertida: false },
      { id: 8,  texto: 'Sinto que mereço viver com conforto e tranquilidade financeira.',      invertida: false },
      { id: 9,  texto: 'Tenho apego às coisas materiais.',                                     invertida: false },
      { id: 10, texto: 'Confio na minha capacidade de gerar renda e me sustentar.',            invertida: true  },
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
      { id: 15, texto: 'Sinto que posso ser eu mesma dentro do meu relacionamento.',                        invertida: true  },
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
      { id: 20, texto: 'Sinto segurança para falar sobre o meu trabalho para outras pessoas.',  invertida: true  },
    ],
  },
]
