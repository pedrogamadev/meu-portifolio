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
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
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
