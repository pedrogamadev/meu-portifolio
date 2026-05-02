import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { portfolioData } from '@/data'
import { getProjectImages } from '@/data/projectImages'
import { Section } from '../layout/Section'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import type { Project } from '@/data/pt'

function SecondaryCard({ project, index }: { project: Project; index: number }) {
  const cover = getProjectImages(project.id)[0]
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.07, duration: 0.35 }}
      className="overflow-hidden border border-border group hover:border-primary/25 transition-colors"
    >
      <Link to={`/projeto/${project.id}`} className="block">
        {/* DESKTOP: imagem como fundo com gradiente */}
        <div className="relative h-[280px]">
          {cover ? (
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                src={cover}
                alt={project.title}
                className="absolute left-0 w-full object-cover object-top"
                style={{ height: '130%', top: '-15%', y: imageY }}
              />
            </div>
          ) : (
            <div className="absolute inset-0 bg-card" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/5" />

          <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-primary font-mono text-[9px] tracking-widest uppercase">
              {project.context}
            </p>
            <h4 className="text-base font-bold tracking-tight text-white leading-snug">
              {project.title}
            </h4>
            <p className="text-white/60 text-xs leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

function MobileProjectCard({ project, isActive, setActiveId, language }: { project: Project; isActive: boolean; setActiveId: (id: string) => void; language: string }) {
  const cover = getProjectImages(project.id)[0]
  const navigate = useNavigate()

  return (
    <motion.div
      onViewportEnter={() => setActiveId(project.id)}
      viewport={{ margin: '-40% 0px -40% 0px' }}
      className="mb-12 last:mb-0 relative cursor-pointer group/card"
      onClick={() => navigate(`/projeto/${project.id}`)}
    >
      {/* Imagem do Projeto (O interior da torradeira) */}
      <AnimatePresence initial={false}>
        {isActive && cover && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 22, stiffness: 150 }}
            className="relative w-full overflow-hidden rounded-t-xl bg-card border border-border border-b-0 z-0"
          >
            <motion.div
              initial={{ y: '50%' }}
              animate={{ y: 0 }}
              exit={{ y: '50%' }}
              transition={{ type: 'spring', damping: 22, stiffness: 150 }}
              className="relative w-full aspect-[16/10]"
            >
              <img
                src={cover}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conteúdo de Texto (O corpo da torradeira) */}
      <div className="relative z-10 bg-[#121212] border border-border rounded-xl p-6 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
        <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-primary font-mono text-[9px] tracking-widest uppercase">
              {project.context}
            </span>
            {project.id === 'catalogofacil' && (
              <span className="px-1.5 py-0.5 border border-primary/35 text-primary font-mono text-[8px] tracking-widest uppercase">
                {language === 'pt' ? 'Destaque' : 'Featured'}
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.slice(0, 4).map(tag => (
              <span
                key={tag}
                className="px-2 py-0.5 border border-border font-mono text-[9px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 pt-4 mt-4 border-t border-border/50">
            <span
              className="inline-flex items-center gap-1 text-sm font-semibold text-foreground group-hover/card:text-primary transition-colors group"
            >
              {language === 'pt' ? 'Ver detalhes' : 'Details'}
              <ArrowUpRight
                size={14}
                className="group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform"
              />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const { language } = useLanguage()
  const projects = portfolioData[language].projects as unknown as Project[]

  const featured = projects.find(p => p.id === 'catalogofacil')
  const secondary = projects.filter(p => p.id !== 'catalogofacil')
  const featuredCover = featured ? getProjectImages(featured.id)[0] : undefined
  
  const [activeMobileId, setActiveMobileId] = useState(projects[0]?.id)
  const navigate = useNavigate()

  return (
    <Section id="projects">
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 relative z-20">
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

      {/* MOBILE LAYOUT */}
      <div className="md:hidden relative pb-10">
        {projects.map((project) => (
          <MobileProjectCard 
            key={project.id} 
            project={project} 
            isActive={activeMobileId === project.id}
            setActiveId={setActiveMobileId}
            language={language}
          />
        ))}
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:block">
        {/* Featured card */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="mb-4 border border-border overflow-hidden h-[340px] cursor-pointer group/card hover:border-primary/25 transition-colors"
            onClick={() => navigate(`/projeto/${featured.id}`)}
          >
            <div className="flex flex-row h-full">
              <div className="w-[52%] shrink-0 overflow-hidden bg-card">
                {featuredCover ? (
                  <img
                    src={featuredCover}
                    alt={featured.title}
                    className="w-full object-cover h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-card flex items-center justify-center">
                    <span className="font-mono text-4xl font-bold opacity-[0.06] uppercase tracking-tighter select-none">
                      {featured.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col justify-between gap-4 border-l border-border overflow-hidden">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-primary font-mono text-[9px] tracking-widest uppercase">
                      {featured.context}
                    </span>
                    <span className="px-1.5 py-0.5 border border-primary/35 text-primary font-mono text-[8px] tracking-widest uppercase">
                      {language === 'pt' ? 'Destaque' : 'Featured'}
                    </span>
                  </div>
                  <h3 className="text-[1.75rem] font-bold tracking-tight leading-snug">
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
                      <span
                        className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground group-hover/card:text-foreground transition-colors group"
                      >
                        {language === 'pt' ? 'Ver detalhes' : 'Details'}
                        <ArrowUpRight
                          size={14}
                          className="group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform"
                        />
                      </span>
                      {featured.url && (
                        <a
                          href={featured.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
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

        {/* Secondary grid */}
        <div className="grid grid-cols-3 gap-3">
          {secondary.map((project, i) => (
            <SecondaryCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </Section>
  )
}
