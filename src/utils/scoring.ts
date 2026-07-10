import { CAMADAS, TEXTOS_RESULTADO } from '../data/raioX'

export interface ScoreCamada {
  id: string
  nome: string
  icone: string
  score: number       // 5–25
  percentual: number  // 0–100
  nivel: 'baixo' | 'medio' | 'alto'
}

export interface Resultado {
  scoreTotal: number
  percentualTotal: number
  camadas: ScoreCamada[]
  camadaDominante: ScoreCamada
  textoDiagnostico: string
}

const NIVEL_LABEL = { baixo: 'Precisa de atenção', medio: 'Em desenvolvimento', alto: 'Equilibrado' }

export function calcularScores(respostas: Record<number, number>): Resultado {
  const camadas: ScoreCamada[] = CAMADAS.map((camada) => {
    let score = 0
    for (const q of camada.questoes) {
      const v = respostas[q.id] ?? 3
      score += q.invertida ? 6 - v : v
    }
    const percentual = Math.round(((score - 5) / 20) * 100)
    const nivel: 'baixo' | 'medio' | 'alto' =
      score <= 12 ? 'baixo' : score <= 18 ? 'medio' : 'alto'
    return { id: camada.id, nome: camada.nome, icone: camada.icone, score, percentual, nivel }
  })

  const scoreTotal = camadas.reduce((a, c) => a + c.score, 0)
  const percentualTotal = Math.round(((scoreTotal - 20) / 80) * 100)

  const camadaDominante = [...camadas].sort((a, b) => a.score - b.score)[0]
  const textoDiagnostico = TEXTOS_RESULTADO[camadaDominante.id] ?? ''

  return { scoreTotal, percentualTotal, camadas, camadaDominante, textoDiagnostico }
}

export { NIVEL_LABEL }
