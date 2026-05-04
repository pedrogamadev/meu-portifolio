import { motion } from 'framer-motion'
import { portfolioData } from '@/data'
import type { Experience, ExperienceType } from '@/data/pt'
import { Section } from '../layout/Section'
import { Briefcase, Calendar, Code2, Store, Users } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import arabellaLogo from '@/assets/logo-arabella-dev.png'

const typeDetails: Record<ExperienceType, {
  icon: typeof Code2
  label: { pt: string; en: string }
  focus: { pt: string; en: string }
  topics?: { pt: string[]; en: string[] }
  current?: boolean
}> = {
  current: {
    icon: Code2,
    label: { pt: 'Atual', en: 'Current' },
    focus: { pt: 'Sistemas internos, APIs e dashboards', en: 'Internal systems, APIs, and dashboards' },
    topics: {
      pt: [
        'Manutenção no sistema SVS do Fundo Estadual de Educação.',
        'Experiência com API de consulta de extratos do Banco do Brasil.',
        'Desenvolvimento do sistema de gerenciamento de chamados para suporte técnico.',
        'Desenvolvimento do FAQ do SigEduc da secretaria.',
      ],
      en: [
        'Maintenance on the SVS system for the State Education Fund.',
        'Experience with Banco do Brasil statement query API.',
        'Development of the ticket management system for technical support.',
        'Development of the department SigEduc FAQ.',
      ],
    },
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
  const chapter = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.07, duration: 0.35 }}
      className={`group relative overflow-hidden border border-border bg-card/35 transition-colors duration-300 hover:border-primary/25 hover:bg-white/[0.02] ${
        details.current ? 'border-l-primary/70' : ''
      }`}
    >
      <span className="pointer-events-none absolute -right-3 -top-7 font-mono text-[6rem] font-bold leading-none text-white/[0.025] transition-colors duration-300 group-hover:text-primary/[0.055] md:text-[7rem]">
        {chapter}
      </span>

      <div className="relative grid gap-5 p-5 md:grid-cols-[minmax(0,1fr)_220px] md:p-6">
        <div className="min-w-0 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="mr-1 flex h-9 w-9 shrink-0 items-center justify-center border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-primary/35 group-hover:text-primary">
              <Icon size={16} />
            </div>
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
            {exp.type === 'parallel' && (
              <img
                src={arabellaLogo}
                alt="Arabella Dev"
                className="ml-auto h-8 w-auto max-w-[150px] object-contain opacity-65 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                loading="lazy"
              />
            )}
          </div>

          <div className="space-y-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary/80">
                {language === 'pt' ? 'Capítulo' : 'Chapter'} {chapter}
              </p>
              <h4 className="mt-2 text-2xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-primary">
                {exp.role}
              </h4>
              <p className="mt-1 max-w-xl text-sm font-semibold leading-snug text-muted-foreground">
                {exp.company}
              </p>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              {exp.description}
            </p>
          </div>
        </div>

        <div className="flex border-t border-border pt-4 md:flex-col md:border-l md:border-t-0 md:pl-5 md:pt-0">
          <div className="space-y-3">
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              {language === 'pt' ? 'Foco' : 'Focus'}
            </p>
            <p className="max-w-[14rem] text-sm font-semibold leading-snug text-foreground/90">
              {details.focus[language]}
            </p>
            {details.topics && (
              <ul className="space-y-2 pt-2">
                {details.topics[language].map((topic) => (
                  <li key={topic} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-primary/70" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
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
