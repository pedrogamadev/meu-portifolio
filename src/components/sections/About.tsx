import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data'
import { useLanguage } from '../../contexts/LanguageContext'
import arabellaLogo from '@/assets/logo-arabella-dev.png'

export function About() {
  const { language } = useLanguage()
  const { personalInfo, highlights } = portfolioData[language]

  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const paragraphs = language === 'pt'
    ? [
        'Sou Pedro Gama, desenvolvedor full stack em Natal/RN, com foco em aplicações web modernas usando React, TypeScript, Node.js, Prisma e PostgreSQL.',
        'Gosto de atuar além da tela: entender a regra de negócio, estruturar o banco de dados, construir APIs, cuidar da experiência do usuário e entregar soluções simples de manter, performáticas e prontas para produção.',
        'Tenho experiência com sistemas SaaS, dashboards administrativos, catálogos digitais, landing pages e plataformas com múltiplos perfis de usuário. Meu foco é construir produtos funcionais, bem organizados e com boa experiência para quem usa e para quem mantém.'
      ]
    : [
        "I'm Pedro Gama, a full stack developer in Natal/RN (Brazil), focusing on modern web applications using React, TypeScript, Node.js, Prisma, and PostgreSQL.",
        'I like to work beyond the screen: understanding business rules, structuring the database, building APIs, caring for the user experience, and delivering solutions that are easy to maintain, performant, and ready for production.',
        'I have experience with SaaS systems, administrative dashboards, digital catalogs, landing pages, and platforms with multiple user profiles. My focus is on building functional, well-organized products that provide a good experience for those who use them and those who maintain them.'
      ]

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const scrollableDistance = rect.height - window.innerHeight
    if (scrollableDistance <= 0) return

    const scrolled = -rect.top
    const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance))

    if (progress < 0.33) setActiveIndex(0)
    else if (progress < 0.66) setActiveIndex(1)
    else setActiveIndex(2)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative border-t border-border/30 bg-background"
      style={{ height: '300vh' }}
    >
      {/* Sticky content block */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Left column — text content */}
            <div className="max-w-xl">
              <div className="space-y-4 mb-8">
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  {language === 'pt' ? 'Quem sou' : 'About me'}
                </h2>
                <h3 className="text-3xl md:text-4xl font-serif tracking-tight leading-tight">
                  {language === 'pt' ? (
                    <>Desenvolvedor full stack focado em <span className="italic">sistemas web</span> prontos para uso.</>
                  ) : (
                    <>Full stack developer focused on ready-to-use <span className="italic">web systems</span>.</>
                  )}
                </h3>
              </div>

              {/* Paragraph area — only one visible at a time */}
              <div className="relative min-h-[140px] md:min-h-[100px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="text-lg font-serif text-muted-foreground leading-relaxed"
                  >
                    {paragraphs[activeIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Scroll progress dots */}
              <div className="flex gap-2 mt-6">
                {paragraphs.map((_, i) => (
                  <div
                    key={i}
                    className="h-1 rounded-full transition-all duration-500"
                    style={{
                      width: i === activeIndex ? '2rem' : '0.5rem',
                      backgroundColor: i === activeIndex
                        ? 'hsl(var(--primary))'
                        : 'hsl(var(--muted-foreground) / 0.3)',
                    }}
                  />
                ))}
              </div>

              {/* Social links row */}
              <div className="flex items-center gap-5 mt-8">
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 rounded-lg border border-border/40 flex items-center gap-2 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-sm font-mono tracking-wide">WhatsApp</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 rounded-lg border border-border/40 flex items-center gap-2 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span className="text-sm font-mono tracking-wide">GitHub</span>
                </a>
                <a
                  href="https://arabella.dev.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 flex items-center"
                  aria-label="Arabella Dev"
                >
                  <img
                    src={arabellaLogo}
                    alt="Arabella Dev"
                    className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </a>
              </div>
            </div>

            {/* Right column — highlights (desktop only, 2x2) */}
            <div className="hidden md:grid grid-cols-2 gap-x-10 gap-y-14">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <item.icon className="text-primary" size={24} strokeWidth={1.5} />
                  <h4 className="font-serif italic text-lg text-foreground">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Highlights — mobile only, at the very bottom of the tall section */}
      <div className="absolute bottom-0 left-0 w-full pb-16 md:hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {highlights.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-3"
              >
                <item.icon className="text-primary" size={24} strokeWidth={1.5} />
                <h4 className="font-serif italic text-lg text-foreground">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
