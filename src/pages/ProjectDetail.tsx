import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolioData } from '@/data'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Project } from '@/data/pt'

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  if (!images || images.length === 0) return null

  const prev = () => {
    setDirection(-1)
    setCurrent(i => (i - 1 + images.length) % images.length)
  }
  const next = () => {
    setDirection(1)
    setCurrent(i => (i + 1) % images.length)
  }

  return (
    <div className="border border-border overflow-hidden relative">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} ${current + 1}`}
          className="w-full object-cover block"
          custom={direction}
          variants={{
            enter: (dir: number) => ({ x: dir > 0 ? '3%' : '-3%', opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (dir: number) => ({ x: dir > 0 ? '-3%' : '3%', opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.22, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-background/70 border border-border/60 text-foreground hover:text-primary hover:border-primary/40 transition-colors backdrop-blur-sm"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            onClick={next}
            aria-label="Próxima"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-background/70 border border-border/60 text-foreground hover:text-primary hover:border-primary/40 transition-colors backdrop-blur-sm"
          >
            <ChevronRight size={15} />
          </button>
          <div className="absolute bottom-3 right-3 font-mono text-[10px] text-foreground/60 bg-background/60 backdrop-blur-sm px-2 py-0.5 border border-border/40">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const { language } = useLanguage()
  const projects = portfolioData[language].projects as Project[]
  const project = projects.find(p => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const isLive =
    project?.status === 'Em produção' || project?.status === 'Live'

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <a
          href="/#projects"
          className="text-primary font-mono text-xs uppercase tracking-widest hover:underline"
        >
          ← {language === 'pt' ? 'Voltar aos projetos' : 'Back to projects'}
        </a>
      </main>
    )
  }

  const paragraphs = project.longDescription?.split('\n\n') ?? [project.description]

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* Back nav */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-[11px] uppercase tracking-widest group"
          >
            <ArrowLeft size={11} className="group-hover:-translate-x-0.5 transition-transform" />
            {language === 'pt' ? 'Projetos' : 'Projects'}
          </a>
        </motion.div>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-10 space-y-4"
        >
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-primary font-mono text-[10px] tracking-widest uppercase">
              {project.context}
            </span>
            {project.status && (
              <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-muted-foreground">
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    isLive ? 'bg-green-500/70' : 'bg-amber-500/70'
                  }`}
                />
                {project.status}
              </span>
            )}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-muted-foreground text-sm font-mono">
              {project.subtitle}
            </p>
          )}
        </motion.div>

        {/* Image carousel */}
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10"
          >
            <ImageCarousel images={project.images} title={project.title} />
          </motion.div>
        )}

        {/* Description + sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col md:flex-row gap-12"
        >
          {/* Long description */}
          <div className="flex-1">
            <p className="text-primary font-mono text-[9px] tracking-widest uppercase mb-5">
              {language === 'pt' ? 'Sobre o projeto' : 'About the project'}
            </p>
            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-[0.9375rem]">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Sidebar: stack + links */}
          <div className="md:w-56 shrink-0 space-y-7">
            <div>
              <p className="text-primary font-mono text-[9px] tracking-widest uppercase mb-3">
                Stack
              </p>
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
            </div>

            {(project.url || project.github) && (
              <div>
                <p className="text-primary font-mono text-[9px] tracking-widest uppercase mb-3">
                  Links
                </p>
                <div className="space-y-2.5">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
                    >
                      <ArrowUpRight
                        size={13}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                      {language === 'pt' ? 'Ver em produção' : 'View live'}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Audience + Viable */}
        {(project.audience || project.viableFor) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-16 pt-12 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {project.audience && (
              <div>
                <p className="text-primary font-mono text-[9px] tracking-widest uppercase mb-4">
                  {language === 'pt' ? 'Para quem foi pensado' : 'Who it was designed for'}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.audience}
                </p>
              </div>
            )}
            {project.viableFor && (
              <div>
                <p className="text-primary font-mono text-[9px] tracking-widest uppercase mb-4">
                  {language === 'pt' ? 'Para quem é viável' : 'Who it works for'}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.viableFor}
                </p>
              </div>
            )}
          </motion.div>
        )}

      </div>
    </main>
  )
}
