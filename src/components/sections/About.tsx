import { motion } from 'framer-motion'
import { portfolioData } from '@/data'
import { Section } from '../layout/Section'
import { useLanguage } from '../../contexts/LanguageContext'

export function About() {
  const { language } = useLanguage()
  const { personalInfo, highlights } = portfolioData[language]
  return (
    <Section id="about" className="relative border-t border-border/30">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              {language === 'pt' ? 'Quem sou' : 'About me'}
            </h2>
            <h3 className="text-4xl font-serif tracking-tight leading-tight">
              {language === 'pt' ? (
                <>Desenvolvedor movido por <span className="italic">curiosidade</span>, prática e evolução.</>
              ) : (
                <>Developer driven by <span className="italic">curiosity</span>, practice, and evolution.</>
              )}
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg font-serif text-muted-foreground leading-relaxed whitespace-pre-wrap"
          >
            {personalInfo.about}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-serif text-muted-foreground leading-relaxed"
          >
            {language === 'pt' ? 
              'Tenho experiência com sistemas SaaS, dashboards administrativos, catálogos digitais, landing pages e plataformas com múltiplos perfis de usuário. Meu foco é construir produtos funcionais, bem organizados e com boa experiência para quem usa e para quem mantém.' : 
              'I have experience with SaaS systems, administrative dashboards, digital catalogs, landing pages, and platforms with multiple user profiles. My focus is on building functional, well-organized products that provide a good experience for those who use them and those who maintain them.'
            }
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
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
    </Section>
  )
}
