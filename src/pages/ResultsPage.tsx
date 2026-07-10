import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import emailjs from '@emailjs/browser'
import { calcularScores, Resultado, NIVEL_LABEL } from '../utils/scoring'

const supabase = createClient(
  'https://ftcfksduwfgccbeapqsf.supabase.co',
  'sb_publishable_MO8rDwNqadddSh7gXfIB8Q_UvqG5moh'
)

const EMAILJS_SERVICE = 'service_a1x68ec'
const EMAILJS_SANDRA  = 'template_1b3dnzd'
const EMAILJS_CLIENT  = 'template_nurdshy'
const EMAILJS_KEY     = 'Zl7xHYzIlna9G5ST3'

async function salvarEEnviar(nome: string, email: string, telefone: string, respostas: Record<number, number>, r: Resultado): Promise<{ ok: boolean; erro?: string }> {
  const resumo = r.camadas.map((c) =>
    `${c.nome}: ${c.score}/25 (${c.id === r.camadaDominante.id ? 'Em desequilíbrio' : NIVEL_LABEL[c.nivel]})`
  ).join('\n\n')

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

  let erroSandra = ''
  let erroCliente = ''

  try {
    await emailjs.send(EMAILJS_SERVICE, EMAILJS_SANDRA, {
      to_email: 'terapeutasandracosta@gmail.com',
      to_name: 'Sandrä Costa',
      client_name: nome, name: nome, nome,
      client_email: email, email,
      telefone,
      date: new Date().toLocaleDateString('pt-BR'),
      data: new Date().toLocaleDateString('pt-BR'),
      dominant_trait: r.camadaDominante.nome,
      score_total: `${r.scoreTotal}/100`,
      full_detail: resumo,
      resultado: resumo,
    }, { publicKey: EMAILJS_KEY })
  } catch (err: any) {
    erroSandra = err?.text || err?.message || String(err)
  }

  try {
    await emailjs.send(EMAILJS_SERVICE, EMAILJS_CLIENT, {
      to_email: email,
      to_name: nome,
      client_email: email,
      dominant_trait: r.camadaDominante.nome,
      dominant_score: String(r.scoreTotal),
      dominant_level: `${r.percentualTotal}%`,
      dominant_what: 'Em desequilíbrio',
      dominant_text: 'Assista ao seu vídeo exclusivo acima.',
      dominant_facets: resumo,
      other_traits: 'Agende sua sessão diagnóstica em terapeutasandracosta.com.br',
    }, { publicKey: EMAILJS_KEY })
  } catch (err: any) {
    erroCliente = err?.text || err?.message || String(err)
  }

  if (erroSandra || erroCliente) {
    return { ok: false, erro: [erroSandra && `Sandra: ${erroSandra}`, erroCliente && `Cliente: ${erroCliente}`].filter(Boolean).join(' | ') }
  }
  return { ok: true }
}

const COR: Record<string, string> = { baixo: '#c0392b', medio: '#E8A645', alto: '#1E6F30' }
const BG:  Record<string, string> = { baixo: '#fdf2f0', medio: '#fef9f0', alto: '#f0f9f2' }

export default function ResultsPage() {
  const navigate = useNavigate()
  const [resultado, setResultado] = useState<Resultado | null>(null)
  const [nome, setNome] = useState('')
  const [emailStatus, setEmailStatus] = useState<'enviando' | 'ok' | 'erro' | null>('enviando')
  const [emailErro, setEmailErro] = useState('')
  const jaEnviou = useRef(false)

  useEffect(() => {
    const userRaw = sessionStorage.getItem('raiox_user')
    const respRaw = sessionStorage.getItem('raiox_respostas')
    if (!userRaw || !respRaw) { navigate('/'); return }

    const { nome: n, email, telefone } = JSON.parse(userRaw)
    const respostas: Record<number, number> = JSON.parse(respRaw)
    setNome(n)

    const r = calcularScores(respostas)
    setResultado(r)

    if (!jaEnviou.current && !sessionStorage.getItem('raiox_enviado')) {
      jaEnviou.current = true
      sessionStorage.setItem('raiox_enviado', '1')
      salvarEEnviar(n, email, telefone ?? '', respostas, r)
    }
  }, [navigate])

  if (!resultado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
        <div className="w-10 h-10 rounded-full border-4 border-green-200 border-t-brand-dark animate-spin" />
        <p className="text-sm text-brand-dark">Calculando seu diagnóstico…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-8 px-6 text-center">
        <p className="text-brand-dark text-xs font-medium tracking-widest uppercase mb-1">
          Sandrä Costa · Terapeuta Holística / Comportamental
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">Raio X da Realidade</h1>
        <div className="w-12 h-1 bg-brand-cream mx-auto rounded-full my-4" />
        <p className="text-gray-600 text-sm">
          Olá, <strong>{nome}</strong>! Aqui está o seu diagnóstico.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">

        {/* Área dominante + texto diagnóstico */}
        <div className="card">
          <p className="text-xs text-brand-medium font-semibold uppercase tracking-widest mb-1">Área com maior desequilíbrio</p>
          <h2 className="text-2xl font-bold text-brand-dark mb-6">{resultado.camadaDominante.nome}</h2>

          <div className="space-y-4">
            {resultado.textoDiagnostico.split('\n\n').map((paragrafo, i) => (
              <p key={i} className="text-sm text-gray-700 leading-relaxed">{paragrafo}</p>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://wa.me/5511957947776?text=Ol%C3%A1%20Sandr%C3%A4!%20Fiz%20o%20Raio%20X%20da%20Realidade%20e%20quero%20agendar%20minha%20Sess%C3%A3o%20de%20Desbloqueio%20e%20Direcionamento."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-brand-dark text-white font-bold py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Agende aqui sua Sessão de Desbloqueio e Direcionamento
            </a>
          </div>
        </div>

        {/* Diagnóstico por área */}
        <div className="card">
          <h2 className="text-lg font-bold text-brand-dark mb-4">Suas 4 Áreas</h2>
          <div className="space-y-4">
            {resultado.camadas.map((c) => {
              const pct = c.percentual
              return (
                <div key={c.id}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-700">{c.nome}</span>
                      {c.id === resultado.camadaDominante.id && (
                        <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">Em desequilíbrio</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: BG[c.nivel], color: COR[c.nivel] }}
                      >
                        {NIVEL_LABEL[c.nivel]}
                      </span>
                      <span className="text-xs text-gray-400">{c.score}/25</span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${pct}%`, background: COR[c.nivel] }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-6 text-center" style={{ background: '#1E6F30' }}>
          <h3 className="text-xl font-bold text-white mb-3">Quer um direcionamento personalizado?</h3>
          <p className="text-brand-light text-sm leading-relaxed mb-5 max-w-sm mx-auto">
            Na sessão diagnóstica ao vivo, você sai com nitidez sobre qual caminho seguir e um plano prático para realizar essa transformação.
          </p>
          <a
            href="https://wa.me/5511957947776?text=Ol%C3%A1%20Sandr%C3%A4!%20Fiz%20o%20Raio%20X%20da%20Realidade%20e%20gostaria%20de%20agendar%20minha%20sess%C3%A3o%20diagn%C3%B3stica."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-dark font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Quero agendar minha Sessão Diagnóstica
          </a>
          <p className="text-xs mt-4" style={{ color: 'rgba(155,225,152,0.8)' }}>
            Seu resultado também foi enviado para o seu e-mail
          </p>
        </div>

        <div className="text-center pb-8">
          <p className="text-xs text-brand-dark font-medium tracking-widest uppercase">Sandrä Costa</p>
          <p className="text-xs text-gray-400 mt-1">Terapeuta Holística / Comportamental</p>
          <p className="text-xs text-gray-400 mt-1">© {new Date().getFullYear()}</p>
        </div>

      </div>
    </div>
  )
}
