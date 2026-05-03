import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import perfilImg from '@/assets/perfil.png'
import { useLanguage } from '../../contexts/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          
          {/* Coluna de Texto */}
          <div className="max-w-3xl space-y-12 relative z-10">
            <div id="hero-identity" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-xs tracking-widest text-muted-foreground uppercase"
              >
                {t('hero.label')}
              </motion.div>

              <motion.h1
                id="hero-name"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-serif text-foreground tracking-tight"
              >
                Pedro Gama
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-serif italic text-muted-foreground leading-relaxed"
              >
                {t('hero.subtitle')}
              </motion.p>

              {/* Imagem Mobile */}
              <motion.div
                initial={{ height: 0, opacity: 0, filter: 'blur(10px)' }}
                animate={{ height: "auto", opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
                className="md:hidden relative group overflow-hidden"
              >
                <div className="py-6">
                  <img 
                    src={perfilImg} 
                    alt="Pedro Gama" 
                    className="w-full aspect-square max-w-[320px] object-cover rounded-3xl transition-all duration-700 ease-in-out border border-white/5"
                  />
                  <div className="absolute inset-0 top-6 bottom-6 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none max-w-[320px]" />
                </div>
              </motion.div>

              <div className="flex flex-col gap-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-mono text-xs text-muted-foreground tracking-wide flex flex-wrap items-center gap-2 md:gap-3"
                >
                  <span>{t('hero.location')}</span>
                  <span>·</span>
                  <span>{t('hero.available')}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="font-mono text-xs text-muted-foreground tracking-wide flex flex-wrap items-center"
                >
                  {t('hero.languages')}
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-8 items-center pt-8 border-t border-border/50"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-primary text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2 group"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                {t('hero.viewProjects')}
              </a>
              <a
                href="#contact"
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('hero.chat')}
              </a>
            </motion.div>
          </div>

          {/* Coluna da Imagem */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)', x: -400, y: 100 }}
            animate={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="hidden md:flex justify-end relative z-0"
          >
            <div className="relative group">
              <img 
                src={perfilImg} 
                alt="Pedro Gama" 
                className="w-[480px] h-[480px] object-cover rounded-3xl transition-all duration-700 ease-in-out border border-white/5"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
