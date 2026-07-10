import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserInfoPage() {
  const navigate = useNavigate()
  const [nome, setNome]       = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail]     = useState('')
  const [errors, setErrors]   = useState<Record<string, string>>({})

  function validate() {
    const e: Record<string, string> = {}
    if (!nome.trim())     e.nome = 'Por favor, informe seu nome.'
    if (!telefone.trim()) e.telefone = 'Por favor, informe seu celular.'
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = 'Por favor, informe um e-mail válido.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    sessionStorage.setItem('raiox_user', JSON.stringify({ nome: nome.trim(), telefone: telefone.trim(), email: email.trim() }))
    navigate('/teste')
  }

  const field = (
    label: string,
    value: string,
    set: (v: string) => void,
    placeholder: string,
    type = 'text',
    key = ''
  ) => (
    <div>
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => set(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-brand-medium transition-colors"
      />
      {errors[key] && <p className="text-red-400 text-xs mt-1">{errors[key]}</p>}
    </div>
  )

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#f7f9f4' }}>
      <div className="w-full max-w-md space-y-6">

        <button onClick={() => navigate('/')} className="text-brand-dark text-sm hover:opacity-70 transition-opacity">
          ← Voltar
        </button>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-green-100 overflow-hidden">

          {/* Topo */}
          <div
            className="px-8 pt-8 pb-6 text-center"
            style={{ background: 'linear-gradient(135deg, #1E6F30, #2d8a40)' }}
          >
            <p className="label-section mb-2" style={{ color: '#9BE198' }}>RAIO X DA REALIDADE</p>
            <h2 className="text-2xl font-extrabold text-white mb-1">Antes de começar</h2>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Enviarei seu resultado por e-mail após o diagnóstico.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
            {field('Seu nome completo', nome, setNome, 'Como posso te chamar?', 'text', 'nome')}
            {field('Celular (com DDD)', telefone, setTelefone, '(11) 99999-9999', 'tel', 'telefone')}
            {field('Seu melhor e-mail', email, setEmail, 'seuemail@email.com', 'email', 'email')}


            <button type="submit" className="btn-primary w-full text-center">
              Iniciar meu diagnóstico →
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
