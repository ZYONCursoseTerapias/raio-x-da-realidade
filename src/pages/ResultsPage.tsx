import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import emailjs from '@emailjs/browser'
import { calcularScores, Resultado, NIVEL_LABEL } from '../utils/scoring'

const supabase = createClient(
  'https://ftcfksduwfgccbeapqsf.supabase.co',
  'sb_publishable_MO8rDwNqadddSh7gXfIB8Q_UvqG5moh'
)

const EMAILJS_SERVICE = 'service_a1x68ec'
const EMAILJS_SANDRA  = 'template_x8olkkm'
const EMAILJS_CLIENT  = 'template_azyqc0u'
const EMAILJS_KEY     = 'Zl7xHYzIlna9G5ST3'

async function salvarEEnviar(nome: string, email: string, telefone: string, respostas: Record<number, number>, r: Resultado) {
  const resumo = r.camadas.map((c) => `${c.icone} ${c.nome}: ${c.score}/25 (${NIVEL_LABEL[c.nivel]})`).join('\n')

  try {
    await supabase.from('respostas').insert([{
      name: nome, email, telefone,
      answers: respostas,
      scores: Object.fromEntries(r.camadas.map((c) => [c.id, c.score])),
      quiz_type: 'raio_x',
      perfil: r.camadaDominante.id,
      score_total: r.scoreTotal,
      created_at: new Date().toISOString(),
    }])
  } catch { /* silent */ }

  try {
    await emailjs.send(EMAILJS_SERVICE, EMAILJS_SANDRA, {
      client_name: nome, name: nome, nome,
      client_email: email, email,
      date: new Date().toLocaleDateString('pt-BR'),
      data: new Date().toLocaleDateString('pt-BR'),
      full_detail: `Área dominante: ${r.camadaDominante.nome}\nScore total: ${r.scoreTotal}/100\nTelefone: ${telefone}\n\n${resumo}`,
      resultado: `Área dominante: ${r.camadaDominante.nome}\nScore total: ${r.scoreTotal}/100\n\n${resumo}`,
    }, { publicKey: EMAILJS_KEY })

    await emailjs.send(EMAILJS_SERVICE, EMAILJS_CLIENT, {
      to_name: nome,
      client_email: email,
      dominant_trait: r.camadaDominante.nome,
      dominant_score: String(r.scoreTotal),
      dominant_level: `${r.percentualTotal}%`,
      dominant_what: NIVEL_LABEL[r.camadaDominante.nivel],
      dominant_text: 'Assista ao seu vídeo exclusivo acima.',
      dominant_facets: resumo,
      other_traits: 'Agende sua sessão diagnóstica em terapeutasandracosta.com.br',
    }, { publicKey: EMAILJS_KEY })
  } catch { /* silent */ }
}

const COR: Record<string, string> = { baixo: '#c0392b', medio: '#E8A645', alto: '#1E6F30' }
const BG:  Record<string, string> = { baixo: '#fdf2f0', medio: '#fef9f0', alto: '#f0f9f2' }

export default function ResultsPage() {
  const navigate = useNavigate()
  const [resultado, setResultado] = useState<Resultado | null>(null)
  const [nome, setNome] = useState('')
  const [enviado, setEnviado] = useState(false)

  useEffect(() => {
    const userRaw = sessionStorage.getItem('raiox_user')
    const respRaw = sessionStorage.getItem('raiox_respostas')
    if (!userRaw || !respRaw) { navigate('/'); return }

    const { nome: n, email, telefone } = JSON.parse(userRaw)
    const respostas: Record<number, number> = JSON.parse(respRaw)
    setNome(n)

    const r = calcularScores(respostas)
    setResultado(r)

    if (!enviado) {
      setEnviado(true)
      salvarEEnviar(n, email, telefone ?? '', respostas, r)
    }
  }, [navigate, enviado])

  if (!resultado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: '#f7f9f4' }}>
        <div className="w-10 h-10 rounded-full border-4 border-green-200 border-t-brand-dark animate-spin" />
        <p className="text-sm text-brand-dark">Calculando seu diagnóstico…</p>
      </div>
    )
  }

  const temVideo = resultado.videoUrl && !resultado.videoUrl.includes('SEU_VIDEO')

  return (
    <div className="min-h-screen pb-20" style={{ background: '#f7f9f4' }}>
      <div className="max-w-xl mx-auto px-5 pt-8 space-y-6">

        {/* Cabeçalho */}
        <div
          className="rounded-3xl px-8 py-10 text-center"
          style={{ background: 'linear-gradient(135deg, #1E6F30, #2d8a40)' }}
        >
          <p className="label-section mb-4" style={{ color: '#9BE198' }}>SEU RAIO X DA REALIDADE</p>
          <h1 className="text-3xl font-extrabold text-white mb-1">
            {nome ? `${nome},` : 'Seu diagnóstico'}
          </h1>
          <p className="text-lg font-semibold mb-5" style={{ color: '#EFBE7D' }}>
            aqui está o que encontrei
          </p>
          <div
            className="inline-block px-5 py-2 rounded-full text-sm font-bold"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
          >
            Score geral: {resultado.scoreTotal}/100 · {resultado.percentualTotal}%
          </div>
        </div>

        {/* Vídeo */}
        <div className="bg-white rounded-3xl border border-green-100 overflow-hidden">
          <div className="px-7 pt-7 pb-4">
            <p className="label-section mb-2">SUA ÁREA DOMINANTE</p>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{resultado.camadaDominante.icone}</span>
              <h2 className="text-xl font-extrabold text-brand-dark">{resultado.camadaDominante.nome}</h2>
            </div>
          </div>

          {temVideo ? (
            <div className="aspect-video w-full">
              <iframe
                src={resultado.videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Seu diagnóstico em vídeo"
              />
            </div>
          ) : (
            <div className="mx-6 mb-6 rounded-2xl flex flex-col items-center justify-center gap-2 py-10 border-2 border-dashed border-green-100" style={{ background: '#f7f9f4' }}>
              <span className="text-3xl">🎬</span>
              <p className="text-sm font-bold text-brand-dark">Vídeo em breve</p>
              <p className="text-xs text-center text-gray-400 max-w-xs">
                Em breve você receberá aqui um vídeo exclusivo com a análise desta área.
              </p>
            </div>
          )}
        </div>

        {/* Diagnóstico por camada */}
        <div className="bg-white rounded-3xl border border-green-100 px-7 py-7">
          <p className="label-section mb-5">DIAGNÓSTICO COMPLETO</p>
          <div className="space-y-5">
            {resultado.camadas.map((c) => (
              <div key={c.id}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{c.icone}</span>
                    <span className="text-sm font-bold text-gray-800">{c.nome}</span>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full border"
                    style={{ background: BG[c.nivel], color: COR[c.nivel], borderColor: COR[c.nivel] + '30' }}
                  >
                    {NIVEL_LABEL[c.nivel]}
                  </span>
                </div>
                <div className="h-2.5 rounded-full overflow-hidden mb-1" style={{ background: '#f0f0f0' }}>
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${c.percentual}%`, background: COR[c.nivel] }}
                  />
                </div>
                <p className="text-xs text-gray-400">{c.score}/25 pontos · {c.percentual}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-3xl px-8 py-10 text-center"
          style={{ background: 'linear-gradient(135deg, #1E6F30, #2d8a40)' }}
        >
          <p className="text-lg font-bold mb-3" style={{ color: '#EFBE7D' }}>Quer ir mais fundo?</p>
          <p className="text-sm leading-relaxed mb-6 max-w-sm mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Na sessão diagnóstica ao vivo, você sai com clareza sobre sua identidade e um plano real de mudança.
          </p>
          <a
            href="https://wa.me/5511957947776?text=Ol%C3%A1%20Sandr%C3%A4!%20Fiz%20o%20Raio%20X%20da%20Realidade%20e%20gostaria%20de%20agendar%20minha%20sess%C3%A3o%20diagn%C3%B3stica."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
            style={{ background: '#EFBE7D', color: '#1E6F30' }}
          >
            Quero minha sessão diagnóstica
          </a>
          <p className="text-xs mt-4" style={{ color: '#9BE198' }}>
            💌 Seu resultado também foi enviado para o seu e-mail
          </p>
        </div>

        <div className="text-center">
          <button onClick={() => navigate('/')} className="text-xs text-brand-soft underline underline-offset-2 hover:opacity-70 transition-opacity">
            Fazer o teste novamente
          </button>
        </div>

        <footer className="text-center py-4 text-xs text-gray-400">
          © {new Date().getFullYear()} Sandrä Costa · Terapeuta Holística
        </footer>
      </div>
    </div>
  )
}
