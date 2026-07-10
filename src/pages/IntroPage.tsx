import { useNavigate } from 'react-router-dom'

export default function IntroPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen" style={{ background: '#f7f9f4' }}>

      {/* ── Hero ── */}
      <section
        className="relative pt-20 pb-8 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #1E6F30 0%, #2d8a40 55%, #1a5c28 100%)' }}
      >
        <div className="max-w-xl mx-auto text-center relative z-10">
          <p className="label-section mb-5" style={{ color: '#9BE198' }}>
            SANDRÄ COSTA · TERAPEUTA HOLÍSTICA / COMPORTAMENTAL
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
            Descubra por que sua vida não anda, mesmo você já tendo tentado de tudo, e identifique exatamente o que está te travando hoje.
          </p>

        </div>
      </section>

      {/* ── Texto introdutório ── */}
      <section className="py-10 px-6">
        <div className="max-w-xl mx-auto space-y-6">

          {/* Bloco explicativo */}
          <div className="bg-white rounded-2xl p-7 border border-green-100 space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              O <strong>Raio X da Realidade</strong> é um diagnóstico desenvolvido para revelar os padrões invisíveis que estão travando sua vida nas 4 áreas que mais impactam quem você é e como você vive: Identidade, Finanças, Relacionamentos e Carreira / Profissão.
            </p>
          </div>

          {/* Instruções */}
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed px-1">
            <p>Você vai responder 20 afirmações. Para cada uma, escolha entre Concordo totalmente, Concordo, Neutro, Discordo ou Discordo totalmente.</p>
            <p>Responda com honestidade. Não existe certo ou errado.</p>
            <p>Ao final, você receberá a pontuação de cada área e um vídeo com informações a respeito da área que está causando um grande desequilíbrio na sua vida.</p>
          </div>

          {/* Atenção */}
          <div className="rounded-2xl p-5 text-sm leading-relaxed" style={{ background: '#fef3e2', border: '1px solid #f5c842' }}>
            <p><strong>Atenção:</strong> Responda pensando em como você é na maior parte do tempo, não em situações excepcionais.</p>
          </div>

          {/* Botão */}
          <div className="text-center pt-2 pb-4">
            <button
              onClick={() => navigate('/registro')}
              className="btn-primary text-base px-10 py-4"
            >
              Iniciar meu diagnóstico →
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-gray-400 border-t border-green-100">
        © {new Date().getFullYear()} Sandrä Costa · Terapeuta Holística / Comportamental
      </footer>
    </div>
  )
}
