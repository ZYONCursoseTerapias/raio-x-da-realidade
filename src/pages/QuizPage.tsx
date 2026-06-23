import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CAMADAS, ESCALA } from '../data/raioX'

const TOTAL = CAMADAS.reduce((a, c) => a + c.questoes.length, 0)

export default function QuizPage() {
  const navigate = useNavigate()
  const [respostas, setRespostas] = useState<Record<number, number>>({})
  const [etapa, setEtapa] = useState(0)
  const topoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sessionStorage.getItem('raiox_user')) navigate('/registro')
  }, [navigate])

  const camada   = CAMADAS[etapa]
  const total    = CAMADAS.length
  const respondidas = camada.questoes.filter((q) => respostas[q.id] !== undefined).length
  const completa = respondidas === camada.questoes.length
  const totalResp = Object.keys(respostas).length
  const progresso = Math.round((totalResp / TOTAL) * 100)

  function responder(id: number, valor: number) {
    const atualizado = { ...respostas, [id]: valor }
    setRespostas(atualizado)
    const proxima = camada.questoes.find((q) => q.id !== id && atualizado[q.id] === undefined)
    if (proxima) {
      setTimeout(() => {
        document.getElementById(`q-${proxima.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  }

  function avancar() {
    if (!completa) return
    if (etapa < total - 1) {
      setEtapa((p) => p + 1)
      setTimeout(() => topoRef.current?.scrollIntoView({ behavior: 'smooth' }), 50)
    } else {
      sessionStorage.setItem('raiox_respostas', JSON.stringify(respostas))
      navigate('/resultado')
    }
  }

  function voltar() {
    if (etapa === 0) { navigate('/registro'); return }
    setEtapa((p) => p - 1)
    setTimeout(() => topoRef.current?.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  return (
    <div className="min-h-screen pb-32" style={{ background: '#f7f9f4' }}>

      {/* Barra de progresso fixa */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
        <div className="max-w-xl mx-auto px-5 py-3">
          <div className="flex items-center gap-4">
            <button onClick={voltar} className="shrink-0 text-xs text-brand-soft hover:text-brand-dark transition-colors">
              ← Voltar
            </button>
            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="font-bold text-brand-dark">{camada.icone} {camada.nome}</span>
                <span className="text-brand-soft">{totalResp}/{TOTAL}</span>
              </div>
              <div className="h-1.5 bg-green-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${progresso}%`, background: 'linear-gradient(90deg, #6CC24A, #1E6F30)' }}
                />
              </div>
            </div>
            <span className="shrink-0 text-xs font-extrabold text-brand-dark">{etapa + 1}/{total}</span>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div ref={topoRef} className="max-w-xl mx-auto px-5 pt-24">

        {/* Cabeçalho da camada */}
        <div
          className="rounded-2xl px-7 py-7 mb-6 text-center"
          style={{ background: 'linear-gradient(135deg, #1E6F30, #2d8a40)' }}
        >
          <div className="text-3xl mb-2">{camada.icone}</div>
          <h2 className="text-lg font-extrabold text-white tracking-wide uppercase mb-1">
            {camada.nome}
          </h2>
          <p className="text-xs" style={{ color: 'rgba(155,225,152,0.9)' }}>
            Camada {etapa + 1} de {total} · {respondidas}/{camada.questoes.length} respondidas
          </p>
        </div>

        {/* Questões */}
        <div className="space-y-4">
          {camada.questoes.map((q, idx) => {
            const val = respostas[q.id]
            const respondida = val !== undefined
            return (
              <div
                key={q.id}
                id={`q-${q.id}`}
                className="rounded-2xl border transition-all duration-300"
                style={{
                  background: '#fff',
                  borderColor: respondida ? '#6CC24A' : '#e8f0e8',
                  boxShadow: respondida ? '0 2px 12px rgba(108,194,74,0.12)' : 'none',
                }}
              >
                <div className="px-6 pt-5 pb-4">
                  <p className="text-sm text-gray-800 leading-relaxed mb-5">
                    <span className="text-xs font-extrabold text-brand-soft mr-2">{idx + 1}.</span>
                    {q.texto}
                  </p>
                  <div className="space-y-2">
                    {ESCALA.map(({ valor, label }) => {
                      const sel = val === valor
                      return (
                        <button
                          key={valor}
                          onClick={() => responder(q.id, valor)}
                          className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 flex items-center gap-3 border"
                          style={{
                            background: sel ? '#1E6F30' : '#f7f9f4',
                            color: sel ? '#fff' : '#555',
                            borderColor: sel ? '#1E6F30' : '#e0eedd',
                            transform: sel ? 'scale(1.01)' : 'scale(1)',
                          }}
                        >
                          <span
                            className="w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center"
                            style={{ borderColor: sel ? '#fff' : '#ccc', background: sel ? '#fff' : 'transparent' }}
                          >
                            {sel && <span className="block w-2 h-2 rounded-full" style={{ background: '#1E6F30' }} />}
                          </span>
                          {label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Rodapé fixo */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-green-100 px-5 py-4">
        <div className="max-w-xl mx-auto">
          <button
            onClick={avancar}
            disabled={!completa}
            className="w-full py-3.5 rounded-xl font-extrabold text-sm tracking-wide transition-all duration-200"
            style={{
              background: completa ? '#1E6F30' : '#d8ead8',
              color: completa ? '#fff' : '#8ab88a',
              cursor: completa ? 'pointer' : 'not-allowed',
            }}
          >
            {etapa < total - 1
              ? `Próxima camada: ${CAMADAS[etapa + 1].icone} ${CAMADAS[etapa + 1].nome} →`
              : '✦ Ver meu diagnóstico →'}
          </button>
          {!completa && (
            <p className="text-center text-xs mt-2 text-brand-soft">
              Responda todas as perguntas para continuar
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
