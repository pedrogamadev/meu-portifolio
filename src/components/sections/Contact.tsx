import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '../layout/Section'
import { Mail, Github, Linkedin, MessageCircle, Send, Instagram } from 'lucide-react'
import { portfolioData } from '@/data'
import { useLanguage } from '../../contexts/LanguageContext'

type ContactFormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

export function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialFormState)
  const { language } = useLanguage()
  const { personalInfo } = portfolioData[language]

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = form.subject.trim() || (language === 'pt' ? `Contato pelo portfólio - ${form.name.trim() || 'sem assunto'}` : `Portfolio Contact - ${form.name.trim() || 'no subject'}`)
    const message = [
      language === 'pt' ? `Olá, Pedro!` : `Hello, Pedro!`,
      '',
      `${language === 'pt' ? 'Nome' : 'Name'}: ${form.name || '-'}`,
      `Email: ${form.email || '-'}`,
      `${language === 'pt' ? 'Assunto' : 'Subject'}: ${subject}`,
      '',
      form.message || (language === 'pt' ? 'Quero conversar com você.' : 'I want to talk to you.')
    ].join('\n')

    const whatsappUrl = `${personalInfo.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Section id="contact">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-primary font-mono text-sm tracking-widest uppercase">
              {language === 'pt' ? 'Contato' : 'Contact'}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              {language === 'pt' ? 'Vamos nos conectar.' : "Let's connect."}
            </h3>
            <p className="text-muted-foreground text-lg">
              {language === 'pt' ? 
                'Se você quiser conversar sobre oportunidades, tecnologia ou conhecer melhor meu trabalho, fico à disposição.' : 
                'If you want to chat about opportunities, technology, or get to know my work better, I am available.'}
            </p>
          </div>

          <div className="space-y-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-6 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
                  {language === 'pt' ? 'Enviar email' : 'Send email'}
                </p>
                <p className="font-bold break-all">{personalInfo.email}</p>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all"
              >
                <Github size={20} />
                <span className="font-bold">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all"
              >
                <Linkedin size={20} />
                <span className="font-bold">LinkedIn</span>
              </a>
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all text-green-400"
              >
                <MessageCircle size={20} />
                <span className="font-bold">WhatsApp</span>
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all"
              >
                <Instagram size={20} />
                <span className="font-bold">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  {language === 'pt' ? 'Nome' : 'Name'}
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={language === 'pt' ? 'Seu nome' : 'Your name'}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                {language === 'pt' ? 'Assunto' : 'Subject'}
              </label>
              <input
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder={language === 'pt' ? 'Sobre o que você quer conversar?' : 'What do you want to talk about?'}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                {language === 'pt' ? 'Mensagem' : 'Message'}
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder={language === 'pt' ? 'Pode me contar um pouco mais por aqui.' : 'Tell me a bit more about it.'}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(170,59,255,0.4)] transition-all group"
            >
              {language === 'pt' ? 'Enviar no WhatsApp' : 'Send via WhatsApp'}
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  )
}
