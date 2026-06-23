import { useNavigate } from 'react-router-dom'
import { CAMADAS } from '../data/raioX'

export default function IntroPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen" style={{ background: '#f7f9f4' }}>

      {/* ── Hero ── */}
      <section
        className="relative pt-20 pb-16 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #1E6F30 0%, #2d8a40 55%, #1a5c28 100%)' }}
      >
        <div className="max-w-xl mx-auto text-center relative z-10">
          <p className="label-section mb-5" style={{ color: '#9BE198' }}>
            SANDRÄ COSTA · TERAPEUTA HOLÍSTICA
          </p>

          <h1
            className="font-extrabold mb-3 leading-tight"
            style={{ color: '#fff', fontSize: '40px' }}
          >
            Raio X da Realidade
          </h1>

          <p
            className="text-lg mb-4 font-semibold"
            style={{ color: '#EFBE7D' }}
          >
            Por que sua vida não anda, mesmo você já tendo tentado de tudo?
          </p>

          <p className="text-sm leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Um diagnóstico profundo que revela os padrões invisíveis que estão te sabotando
            e mostra exatamente onde você precisa agir para finalmente sair do lugar.
          </p>

          <button
            onClick={() => navigate('/registro')}
            className="btn-primary text-base px-10 py-4"
            style={{ background: '#EFBE7D', color: '#1E6F30' }}
          >
            Quero meu diagnóstico gratuito →
          </button>

          <p className="text-xs mt-4" style={{ color: 'rgba(155,225,152,0.7)' }}>
            20 perguntas · resultado imediato · 100% gratuito
          </p>
        </div>
      </section>

      {/* ── Para quem é ── */}
      <section className="py-14 px-6">
        <div className="max-w-xl mx-auto">
          <p className="label-section text-center mb-6">ESSE DIAGNÓSTICO É PARA VOCÊ SE…</p>
          <div className="space-y-3">
            {[
              'Sente que algo está travado, mas não consegue identificar o quê',
              'Repete padrões emocionais, profissionais ou relacionais sem entender a origem',
              'Já tentou terapia, cursos ou autoajuda, mas ainda sente que não virou',
              'Quer clareza real — não opiniões genéricas',
              'Está pronta para olhar para si mesma com profundidade e sem vitimismo',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-green-100">
                <span className="text-brand-medium mt-0.5 shrink-0">✦</span>
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── As 4 camadas ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <p className="label-section text-center mb-2">O QUE SERÁ ANALISADO</p>
          <h2 className="text-2xl font-extrabold text-brand-dark text-center mb-8">
            As 4 camadas da sua realidade
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {CAMADAS.map((c, i) => (
              <div
                key={c.id}
                className="rounded-2xl p-6 flex flex-col items-center text-center border border-green-100"
                style={{ background: i % 2 === 0 ? '#f7f9f4' : '#eef5ec' }}
              >
                <span className="text-3xl mb-3">{c.icone}</span>
                <p className="text-xs font-extrabold text-brand-dark tracking-wide uppercase">{c.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section className="py-14 px-6">
        <div className="max-w-xl mx-auto">
          <p className="label-section text-center mb-2">COMO FUNCIONA</p>
          <h2 className="text-2xl font-extrabold text-brand-dark text-center mb-8">
            Simples, rápido e profundo
          </h2>
          <div className="space-y-4">
            {[
              { n: '01', t: 'Preencha o diagnóstico', d: '20 perguntas objetivas em 4 camadas da vida. Cerca de 5 minutos.' },
              { n: '02', t: 'Receba seu vídeo', d: 'Você recebe um vídeo exclusivo com minha análise sobre a área mais relevante da sua vida.' },
              { n: '03', t: 'Sessão diagnóstica ao vivo', d: 'Se quiser ir mais fundo, agendamos uma sessão para trabalharmos juntas o seu resultado.' },
            ].map((s) => (
              <div key={s.n} className="flex gap-5 bg-white rounded-2xl px-6 py-5 border border-green-100">
                <span className="text-2xl font-extrabold text-brand-light shrink-0 leading-snug">{s.n}</span>
                <div>
                  <p className="font-bold text-sm text-brand-dark mb-1">{s.t}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/registro')}
              className="btn-primary"
            >
              Começar meu Raio X →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-gray-400 border-t border-green-100">
        © {new Date().getFullYear()} Sandrä Costa · Terapeuta Holística
      </footer>
    </div>
  )
}
