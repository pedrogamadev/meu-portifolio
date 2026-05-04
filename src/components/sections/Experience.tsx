import { motion } from 'framer-motion'
import { portfolioData } from '@/data'
import type { Experience, ExperienceType } from '@/data/pt'
import { Section } from '../layout/Section'
import { ArrowUpRight, Briefcase, Calendar, Code2, Store, Users } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

const typeDetails: Record<ExperienceType, {
  icon: typeof Code2
  label: { pt: string; en: string }
  focus: { pt: string; en: string }
  current?: boolean
}> = {
  current: {
    icon: Code2,
    label: { pt: 'Atual', en: 'Current' },
    focus: { pt: 'Sistemas internos, APIs e dashboards', en: 'Internal systems, APIs, and dashboards' },
    current: true,
  },
  parallel: {
    icon: Briefcase,
    label: { pt: 'Independente', en: 'Independent' },
    focus: { pt: 'Projetos do zero ao deploy', en: 'Projects from scratch to deploy' },
  },
  business: {
    icon: Store,
    label: { pt: 'Negócio próprio', en: 'Own business' },
    focus: { pt: 'Operação, vendas e decisão prática', en: 'Operations, sales, and practical decisions' },
  },
  previous: {
    icon: Users,
    label: { pt: 'Base comercial', en: 'Commercial base' },
    focus: { pt: 'Atendimento e problemas reais', en: 'Customer care and real problems' },
  },
}

const stats = {
  pt: [
    { value: '4', label: 'frentes de experiência' },
    { value: '2025', label: 'atuação técnica atual' },
    { value: 'full stack', label: 'da regra ao deploy' },
  ],
  en: [
    { value: '4', label: 'experience fronts' },
    { value: '2025', label: 'current technical work' },
    { value: 'full stack', label: 'from rules to deploy' },
  ],
}

function ExperienceCard({ exp, index, language }: { exp: Experience; index: number; language: 'pt' | 'en' }) {
  const details = typeDetails[exp.type]
  const Icon = details.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.07, duration: 0.35 }}
      className="group border border-border bg-card/40 p-5 md:p-6 transition-colors duration-300 hover:border-primary/25 hover:bg-white/[0.02]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-primary/35 group-hover:text-primary">
            <Icon size={18} />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`border px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-widest ${
                  details.current
                    ? 'border-primary/35 bg-primary/10 text-primary'
                    : 'border-border text-muted-foreground'
                }`}
              >
                {details.label[language]}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                <Calendar size={11} />
                {exp.period}
              </span>
            </div>
          </div>
        </div>

        <ArrowUpRight
          size={16}
          className="mt-1 shrink-0 text-muted-foreground/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
        />
      </div>

      <div className="mt-5 space-y-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary/80">
            {details.focus[language]}
          </p>
          <h4 className="mt-2 text-2xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-primary">
            {exp.role}
          </h4>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            {exp.company}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {exp.description}
        </p>
      </div>
    </motion.article>
  )
}

export function Experience() {
  const { language } = useLanguage()
  const { experience } = portfolioData[language]
  const currentStats = stats[language]

  return (
    <Section id="experience">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.6fr] md:items-start">
        <div className="space-y-8 md:sticky md:top-24">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {language === 'pt' ? 'Experiência' : 'Experience'}
            </p>
            <div className="space-y-3">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                {language === 'pt' ? 'Jornada profissional' : 'Professional journey'}
              </h2>
              <p className="max-w-md text-lg leading-snug text-foreground/90">
                {language === 'pt'
                  ? 'Da operação real ao desenvolvimento de produtos digitais'
                  : 'From real operations to digital product development'}
              </p>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              {language === 'pt'
                ? 'Minha trajetória combina atendimento, negócio próprio, projetos independentes e desenvolvimento full stack. Essa mistura me ajuda a construir soluções que não são só técnicas, mas também úteis, claras e conectadas com problemas reais.'
                : 'My journey combines customer service, running a business, independent projects, and full-stack development. This mix helps me build solutions that are not only technical, but also useful, clear, and connected to real problems.'}
            </p>
          </div>

          <div className="grid grid-cols-3 border border-border bg-card/30">
            {currentStats.map((stat) => (
              <div key={stat.label} className="border-r border-border p-3 last:border-r-0 md:p-4">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] leading-snug text-muted-foreground md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              language={language}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
