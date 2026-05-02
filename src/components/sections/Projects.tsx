import { motion } from 'framer-motion'
import { portfolioData } from '@/data'
import { Section } from '../layout/Section'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

type Project = {
  id: string
  title: string
  context: string
  description: string
  subtitle?: string
  tags: string[]
  image?: string
  color: string
  url?: string
  github?: string
}

export function Projects() {
  const { language } = useLanguage()
  const projects = portfolioData[language].projects as unknown as Project[]

  const featured = projects.find(p => p.id === 'catalogofacil')
  const secondary = projects.filter(p => p.id !== 'catalogofacil')

  return (
    <Section id="projects">
      <div className="mb-14 space-y-4">
        <p className="text-primary font-mono text-xs tracking-widest uppercase">
          {language === 'pt' ? 'Projetos' : 'Projects'}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          {language === 'pt' ? 'Projetos em destaque' : 'Featured projects'}
        </h2>
        <p className="text-muted-foreground max-w-lg leading-relaxed">
          {language === 'pt'
            ? 'Uma seleção de produtos e sistemas que mostram minha visão de produto, cuidado com interface e execução full-stack.'
            : 'A selection of products and systems that show my product vision, attention to interface, and full-stack execution.'}
        </p>
      </div>

      {featured && (
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-5 border border-border overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[56%] shrink-0 overflow-hidden bg-card">
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full object-cover aspect-[16/10] md:h-full md:aspect-auto"
                />
              ) : (
                <div className="w-full aspect-[16/10] md:h-full md:aspect-auto md:min-h-[300px] bg-card flex items-center justify-center">
                  <span className="font-mono text-4xl font-bold opacity-[0.06] uppercase tracking-tighter select-none">
                    {featured.title}
                  </span>
                </div>
              )}
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between gap-8 border-t md:border-t-0 md:border-l border-border">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-primary font-mono text-[10px] tracking-widest uppercase">
                    {featured.context}
                  </span>
                  <span className="px-2 py-0.5 border border-primary/40 text-primary font-mono text-[9px] tracking-widest uppercase">
                    {language === 'pt' ? 'Destaque' : 'Featured'}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{featured.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{featured.description}</p>
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap gap-1.5">
                  {featured.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 border border-border font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {featured.url && (
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
                  >
                    {language === 'pt' ? 'Ver projeto' : 'View project'}
                    <ArrowUpRight
                      size={15}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.article>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {secondary.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="border border-border p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors"
          >
            <div className="space-y-1">
              <p className="text-primary font-mono text-[10px] tracking-widest uppercase">
                {project.context}
              </p>
              <h4 className="text-xl font-bold tracking-tight">{project.title}</h4>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed flex-1">
              {project.description}
            </p>

            {project.subtitle && (
              <p className="text-muted-foreground/50 text-xs leading-relaxed">
                {project.subtitle}
              </p>
            )}

            <div className="space-y-3 mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 border border-border font-mono text-[9px] font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors group"
                >
                  {language === 'pt' ? 'Ver projeto' : 'View project'}
                  <ArrowUpRight
                    size={13}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
