import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { portfolioData } from '@/data'
import { Section } from '../layout/Section'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import type { Project } from '@/data/pt'

export function Projects() {
  const { language } = useLanguage()
  const projects = portfolioData[language].projects as unknown as Project[]

  const featured = projects.find(p => p.id === 'catalogofacil')
  const secondary = projects.filter(p => p.id !== 'catalogofacil')

  return (
    <Section id="projects">
      {/* Header — 2 colunas no desktop */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="space-y-2 shrink-0">
          <p className="text-primary font-mono text-xs tracking-widest uppercase">
            {language === 'pt' ? 'Projetos' : 'Projects'}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {language === 'pt' ? 'Projetos em destaque' : 'Featured projects'}
          </h2>
        </div>
        <p className="text-muted-foreground max-w-xs text-sm leading-relaxed md:pb-1">
          {language === 'pt'
            ? 'Uma seleção de produtos e sistemas que mostram minha visão de produto, cuidado com interface e execução full-stack.'
            : 'A selection of products and systems that show my product vision, attention to interface, and full-stack execution.'}
        </p>
      </div>

      {/* Card principal */}
      {featured && (
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mb-4 border border-border overflow-hidden md:h-[340px]"
        >
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-[52%] shrink-0 overflow-hidden bg-card">
              {featured.images?.[0] ? (
                <img
                  src={featured.images[0]}
                  alt={featured.title}
                  className="w-full object-cover aspect-[16/10] md:h-full md:aspect-auto"
                />
              ) : (
                <div className="w-full aspect-[16/10] md:h-full bg-card flex items-center justify-center">
                  <span className="font-mono text-4xl font-bold opacity-[0.06] uppercase tracking-tighter select-none">
                    {featured.title}
                  </span>
                </div>
              )}
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between gap-4 border-t md:border-t-0 md:border-l border-border overflow-hidden">
              <div className="space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-primary font-mono text-[9px] tracking-widest uppercase">
                    {featured.context}
                  </span>
                  <span className="px-1.5 py-0.5 border border-primary/35 text-primary font-mono text-[8px] tracking-widest uppercase">
                    {language === 'pt' ? 'Destaque' : 'Featured'}
                  </span>
                </div>
                <h3 className="text-2xl md:text-[1.75rem] font-bold tracking-tight leading-snug">
                  {featured.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {featured.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {featured.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 border border-border font-mono text-[9px] font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-4">
                  {featured.status && (
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/60 shrink-0" />
                      {featured.status}
                    </span>
                  )}
                  <div className="ml-auto flex items-center gap-4">
                    <Link
                      to={`/projeto/${featured.id}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      {language === 'pt' ? 'Ver detalhes' : 'Details'}
                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </Link>
                    {featured.url && (
                      <a
                        href={featured.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
                      >
                        {language === 'pt' ? 'Ver projeto' : 'View project'}
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      )}

      {/* Grid secundária */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {secondary.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.07, duration: 0.35 }}
            className="border border-border p-5 flex flex-col gap-3 hover:border-primary/25 transition-colors"
          >
            <div>
              <p className="text-primary font-mono text-[9px] tracking-widest uppercase mb-1">
                {project.context}
              </p>
              <h4 className="text-lg font-bold tracking-tight">{project.title}</h4>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
              {project.description}
            </p>

            <div className="mt-auto pt-3 border-t border-border/50 space-y-2.5">
              <div className="flex flex-wrap gap-1">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 border border-border/60 font-mono text-[8px] font-semibold uppercase tracking-wider text-muted-foreground/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  to={`/projeto/${project.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {language === 'pt' ? 'Ver detalhes' : 'Details'}
                  <ArrowUpRight
                    size={12}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-primary transition-colors group"
                  >
                    {language === 'pt' ? 'Ver projeto' : 'View project'}
                    <ArrowUpRight
                      size={12}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
