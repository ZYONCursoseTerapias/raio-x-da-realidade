import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CAMADAS } from '../data/raioX'

const LIKERT_LABELS = ['Discordo totalmente', 'Discordo', 'Neutro', 'Concordo', 'Concordo totalmente']
const TOTAL = CAMADAS.reduce((a, c) => a + c.questoes.length, 0)

export default function QuizPage() {
  const navigate = useNavigate()
  const [respostas, setRespostas] = useState<Record<number, number>>({})
  const [etapa, setEtapa] = useState(0)

  useEffect(() => {
    if (!sessionStorage.getItem('raiox_user')) navigate('/registro')
  }, [navigate])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [etapa])

  const camada = CAMADAS[etapa]
  const total = CAMADAS.length
  const respondidas = camada.questoes.filter((q) => respostas[q.id] !== undefined).length
  const completa = respondidas === camada.questoes.length
  const totalResp = Object.keys(respostas).length
  const progresso = Math.round((totalResp / TOTAL) * 100)

  function responder(id: number, valor: number) {
    const atualizado = { ...respostas, [id]: valor }
    setRespostas(atualizado)
    setTimeout(() => {
      const proxima = camada.questoes.find((q) => q.id !== id && atualizado[q.id] === undefined)
      if (proxima) {
        document.getElementById(`q-${proxima.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else {
        document.getElementById('btn-next')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 200)
  }

  function avancar() {
    if (!completa) {
      const proxima = camada.questoes.find((q) => respostas[q.id] === undefined)
      if (proxima) document.getElementById(`q-${proxima.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    if (etapa < total - 1) {
      setEtapa((p) => p + 1)
    } else {
      sessionStorage.setItem('raiox_respostas', JSON.stringify(respostas))
      sessionStorage.removeItem('raiox_enviado')
      navigate('/resultado')
    }
  }

  function voltar() {
    if (etapa === 0) { navigate('/registro'); return }
    setEtapa((p) => p - 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Barra de progresso fixa */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-brand-dark text-sm font-semibold">{camada.nome}</p>
            <p className="text-gray-400 text-xs mt-0.5">{respondidas} / {camada.questoes.length} respondidas</p>
          </div>
          <p className="text-gray-400 text-xs">{totalResp} / {TOTAL} respondidas</p>
        </div>
        <div className="h-1 bg-gray-100">
          <div className="h-full bg-brand-medium transition-all duration-500" style={{ width: `${progresso}%` }} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Cabeçalho da camada */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-1">{camada.nome}</h2>
          <p className="text-gray-500 text-sm">Camada {etapa + 1} de {total}</p>
        </div>

        {/* Questões */}
        <div className="card">
          <div className="space-y-6">
            {camada.questoes.map((q, idx) => (
              <div key={q.id} id={`q-${q.id}`}>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  <span className="text-gray-300 text-xs mr-2">{idx + 1}.</span>
                  {q.texto}
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      onClick={() => responder(q.id, val)}
                      className={`flex-1 py-3 rounded-lg border transition-all duration-150 flex flex-col items-center gap-1 ${
                        respostas[q.id] === val
                          ? 'bg-brand-dark text-white border-brand-dark'
                          : 'bg-white text-brand-dark border-brand-dark hover:bg-brand-dark hover:text-white'
                      }`}
                    >
                      <span className="text-sm font-bold">{val}</span>
                      <span className="text-xs font-medium leading-tight text-center px-1">{LIKERT_LABELS[val - 1]}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navegação */}
        <div className="flex gap-3 mt-10 mb-4">
          {etapa > 0 && (
            <button
              onClick={voltar}
              className="flex-1 py-3 rounded-full border border-brand-dark text-brand-dark text-sm font-semibold hover:bg-brand-dark hover:text-white transition-all"
            >
              Voltar
            </button>
          )}
          <button
            id="btn-next"
            onClick={avancar}
            className={`flex-1 py-3 rounded-full text-sm font-semibold transition-all ${
              completa ? 'btn-primary' : 'bg-gray-200 text-gray-400 cursor-pointer'
            }`}
          >
            {etapa < total - 1 ? `Próxima camada: ${CAMADAS[etapa + 1].nome} →` : 'Ver meu diagnóstico →'}
          </button>
        </div>

        {!completa && (
          <p className="text-center text-xs text-gray-400">Responda todas as afirmações para continuar.</p>
        )}
      </div>
    </div>
  )
}
