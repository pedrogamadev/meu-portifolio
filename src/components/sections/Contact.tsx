import { motion } from 'framer-motion'
import { Section } from '../layout/Section'
import { Mail, Github, Linkedin, MessageCircle, Send } from 'lucide-react'
import { personalInfo } from '@/data'

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-primary font-mono text-sm tracking-widest uppercase">Contato</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Vamos construir algo incrível.</h3>
            <p className="text-muted-foreground text-lg">
              Estou sempre aberto a novos projetos, parcerias ou apenas uma boa conversa sobre tecnologia.
            </p>
          </div>

          <div className="space-y-6">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-6 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Mande um email</p>
                <p className="font-bold">{personalInfo.email}</p>
              </div>
            </a>
            
            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all">
                <Github size={20} />
                <span className="font-bold">GitHub</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" className="flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all">
                <Linkedin size={20} />
                <span className="font-bold">LinkedIn</span>
              </a>
              <a href="#" className="flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all text-green-400">
                <MessageCircle size={20} />
                <span className="font-bold">WhatsApp</span>
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
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Nome</label>
                <input 
                  type="text" 
                  placeholder="Seu nome"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Assunto</label>
              <input 
                type="text" 
                placeholder="Como posso ajudar?"
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Mensagem</label>
              <textarea 
                rows={4}
                placeholder="Fale um pouco sobre seu projeto..."
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(170,59,255,0.4)] transition-all group">
              Enviar Mensagem
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  )
}
