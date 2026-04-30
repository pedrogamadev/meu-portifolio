import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data'
import { useLanguage } from '../../contexts/LanguageContext'

export function About() {
  const { language } = useLanguage()
  const { highlights } = portfolioData[language]

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
      <div className="sticky top-0 h-screen w-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <div className="space-y-4 mb-8">
              <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                {language === 'pt' ? 'Quem sou' : 'About me'}
              </h2>
              <h3 className="text-4xl font-serif tracking-tight leading-tight">
                {language === 'pt' ? (
                  <>Desenvolvedor full stack focado em <span className="italic">sistemas web</span> prontos para uso.</>
                ) : (
                  <>Full stack developer focused on ready-to-use <span className="italic">web systems</span>.</>
                )}
              </h3>
            </div>

            {/* Paragraph area — only one visible at a time */}
            <div className="relative min-h-[120px]">
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
            <div className="flex gap-2 mt-8">
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
          </div>
        </div>
      </div>

      {/* Highlights — positioned at the very end of the tall section */}
      <div
        className="absolute bottom-0 left-0 w-full pb-24"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {highlights.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
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
