import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolioData } from '@/data'
import { getProjectImages } from '@/data/projectImages'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Project } from '@/data/pt'
import logoCatalogo from '@/assets/icons/logo-catalogo.png'

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
    <div className="border border-border overflow-hidden relative bg-card/30 md:h-[500px]">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} ${current + 1}`}
          className="w-full block object-contain md:h-full"
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

  const { scrollY } = useScroll()
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous !== undefined && latest > previous && latest > 100) {
      setIsScrollingDown(true)
    } else {
      setIsScrollingDown(false)
    }
  })

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/#projects')
  }

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

  const images = getProjectImages(project.id)
  const paragraphs = project.longDescription?.split('\n\n') ?? [project.description]

  return (
    <main className="min-h-screen relative">
      {/* Botão voltar fixo (Mobile + Desktop) */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        href="/#projects"
        onClick={handleBack}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed top-24 md:top-28 right-5 md:right-8 z-50 rounded-full shadow-lg flex items-center justify-center border border-[#D95A3A]/20 overflow-hidden transition-transform hover:scale-105 cursor-pointer"
        style={{ backgroundColor: '#D95A3A', color: '#1B1713', height: '36px' }}
      >
        <div className="flex items-center px-4 h-full">
          <ArrowLeft size={14} className="shrink-0" />
          <AnimatePresence initial={false}>
            {(!isScrollingDown || isHovered) && (
              <motion.span
                initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                transition={{ duration: 0.2 }}
                className="text-[11px] font-mono tracking-widest uppercase font-bold whitespace-nowrap overflow-hidden"
              >
                {language === 'pt' ? 'Voltar' : 'Back'}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.a>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">

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
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10"
          >
            <ImageCarousel images={images} title={project.title} />
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
              {project.longDescription ? (
                project.longDescription.split('\n').map((line, i) => {
                  if (line.trim() === '') return null;
                  
                  if (line.startsWith('## ')) {
                    return (
                      <h3 key={i} className="text-foreground font-semibold text-[15px] mt-8 mb-2">
                        {line.replace('## ', '')}
                      </h3>
                    );
                  }
                  
                  if (line.startsWith('- ')) {
                    return (
                      <li key={i} className="text-muted-foreground ml-4 list-disc text-[0.9375rem] leading-relaxed" dangerouslySetInnerHTML={{ __html: line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-medium">$1</strong>') }} />
                    );
                  }

                  return (
                    <p key={i} className="text-muted-foreground leading-relaxed text-[0.9375rem]" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-medium">$1</strong>') }} />
                  );
                })
              ) : (
                <p className="text-muted-foreground leading-relaxed text-[0.9375rem]">
                  {project.description}
                </p>
              )}
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
                <div className="space-y-4">
                  {project.url && (
                    <>
                      {project.id === 'catalogofacil' ? (
                        <div className="flex flex-col gap-2">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-block"
                          >
                            <span className="text-muted-foreground text-[10px] font-mono tracking-widest uppercase mb-2 block">
                              {language === 'pt' ? 'Clique abaixo pra visitar meu 1° saas' : 'Click below to visit my 1st SaaS'}
                            </span>
                            <div className="bg-[#EBE7E0] border border-border/60 hover:border-primary/50 transition-colors rounded-xl py-3 px-6 inline-flex items-center justify-center shadow-sm">
                              <img 
                                src={logoCatalogo} 
                                alt="Logo Catálogo Fácil" 
                                className="h-10 object-contain opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all"
                              />
                            </div>
                          </a>
                        </div>
                      ) : (
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
                    </>
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

        {/* Acknowledgments */}
        {project.acknowledgments && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-16 pt-12 border-t border-border"
          >
            <p className="text-primary font-mono text-[9px] tracking-widest uppercase mb-4">
              {language === 'pt' ? 'Agradecimentos especiais' : 'Special acknowledgments'}
            </p>
            <div className="bg-card/30 border border-border/60 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <p className="text-muted-foreground leading-relaxed text-[0.9375rem] italic">
                  "{project.acknowledgments.text}"
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <a 
                  href={`https://github.com/${project.acknowledgments.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-border overflow-hidden">
                    <img 
                      src={`https://github.com/${project.acknowledgments.github}.png`} 
                      alt={project.acknowledgments.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span>{project.acknowledgments.name}</span>
                    <span className="text-muted-foreground text-xs font-normal">@{project.acknowledgments.github}</span>
                  </div>
                  <div className="ml-3 bg-background/60 border border-border/40 group-hover:border-primary/40 group-hover:text-primary transition-colors p-2 rounded-lg flex items-center justify-center text-muted-foreground">
                    <Github size={16} />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </main>
  )
}
