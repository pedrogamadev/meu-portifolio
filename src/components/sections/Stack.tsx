import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import antigravityIcon from '@/assets/icons/antigravity.svg'
import nanoBananaIcon  from '@/assets/icons/nano-banana.svg'
import claudeIcon      from '@/assets/icons/claude.svg'
import postmanIcon     from '@/assets/icons/postman.svg'
import dbeaverIcon     from '@/assets/icons/dbeaver.svg'
import heidiSqlIcon    from '@/assets/icons/heidisql.png'
import renderIcon      from '@/assets/icons/render.svg'

type Tech = { name: string; icon?: string; fallback?: string; title?: string }

const frontendTools: Tech[] = [
  { name: 'JavaScript',    icon: 'https://skillicons.dev/icons?i=js' },
  { name: 'TypeScript',    icon: 'https://skillicons.dev/icons?i=ts' },
  { name: 'React',         icon: 'https://skillicons.dev/icons?i=react' },
  { name: 'Vite',          icon: 'https://skillicons.dev/icons?i=vite' },
  { name: 'Tailwind CSS',  icon: 'https://skillicons.dev/icons?i=tailwind' },
  { name: 'GitHub',        icon: 'https://skillicons.dev/icons?i=github' },
  { name: 'Antigravity',   icon: antigravityIcon,  fallback: 'AG' },
  { name: 'Nano Banana',   icon: nanoBananaIcon,   fallback: 'NB', title: 'Nano Banana 2' },
  { name: 'Claude Design', icon: claudeIcon,       fallback: 'CD' },
]

const backendTools: Tech[] = [
  { name: 'Node.js',    icon: 'https://skillicons.dev/icons?i=nodejs' },
  { name: 'Express',    icon: 'https://skillicons.dev/icons?i=express' },
  { name: 'Prisma',     icon: 'https://skillicons.dev/icons?i=prisma' },
  { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgres' },
  { name: 'Supabase',   icon: 'https://skillicons.dev/icons?i=supabase' },
  { name: 'Postman',    icon: postmanIcon,   fallback: 'PM' },
  { name: 'DBeaver',    icon: dbeaverIcon, fallback: 'DB' },
  { name: 'HeidiSQL',   icon: heidiSqlIcon,  fallback: 'HS' },
  { name: 'Docker',     icon: 'https://skillicons.dev/icons?i=docker' },
  { name: 'Vercel',     icon: 'https://skillicons.dev/icons?i=vercel' },
  { name: 'Render',     icon: renderIcon,    fallback: 'RD' },
  { name: 'Python',     icon: 'https://skillicons.dev/icons?i=python' },
  { name: 'Git',        icon: 'https://skillicons.dev/icons?i=git' },
]

function IconSlot({ name, icon, fallback }: Pick<Tech, 'name' | 'icon' | 'fallback'> & { size?: number }) {
  return (
    <>
      {icon ? (
        <img
          src={icon}
          alt={name}
          width={36}
          height={36}
          className="object-contain shrink-0"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            const badge = e.currentTarget.nextElementSibling as HTMLElement | null
            if (badge) badge.style.display = 'flex'
          }}
        />
      ) : null}
      <div
        className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 items-center justify-center shrink-0"
        style={{ display: icon ? 'none' : 'flex' }}
      >
        <span className="text-[11px] font-mono font-bold text-primary leading-none">
          {fallback ?? name.slice(0, 2).toUpperCase()}
        </span>
      </div>
    </>
  )
}

function SmallIconSlot({ name, icon, fallback }: Pick<Tech, 'name' | 'icon' | 'fallback'>) {
  return (
    <>
      {icon ? (
        <img
          src={icon}
          alt={name}
          width={28}
          height={28}
          className="object-contain shrink-0"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            const badge = e.currentTarget.nextElementSibling as HTMLElement | null
            if (badge) badge.style.display = 'flex'
          }}
        />
      ) : null}
      <div
        className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 items-center justify-center shrink-0"
        style={{ display: icon ? 'none' : 'flex' }}
      >
        <span className="text-[10px] font-mono font-bold text-primary leading-none">
          {fallback ?? name.slice(0, 2).toUpperCase()}
        </span>
      </div>
    </>
  )
}

function TechIcon({ name, icon, fallback, title }: Tech) {
  return (
    <div
      className="flex flex-col items-center gap-2 p-3 rounded-xl border border-border/40 bg-card/60 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
      title={title ?? name}
    >
      <IconSlot name={name} icon={icon} fallback={fallback} />
      <span className="text-[10px] font-mono text-muted-foreground text-center leading-tight line-clamp-2 w-full">
        {name}
      </span>
    </div>
  )
}

function TechCard({ name, icon, fallback, title }: Tech) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default mx-2 shrink-0"
      title={title ?? name}
    >
      <SmallIconSlot name={name} icon={icon} fallback={fallback} />
      <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">{name}</span>
    </div>
  )
}

interface MarqueeRowProps {
  tools: Tech[]
  direction: 'left' | 'right'
  duration: number
  paused: boolean
}

function MarqueeRow({ tools, direction, duration, paused }: MarqueeRowProps) {
  const items = [...tools, ...tools]
  const animation =
    direction === 'left'
      ? `marquee-left ${duration}s linear infinite`
      : `marquee-right ${duration}s linear infinite`

  return (
    <div
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
      }}
    >
      <div
        className="flex w-max"
        style={{ animation, animationPlayState: paused ? 'paused' : 'running' }}
      >
        {items.map((tech, i) => (
          <TechCard key={i} {...tech} />
        ))}
      </div>
    </div>
  )
}

function StackModal({ open, onClose, language }: { open: boolean; onClose: () => void; language: string }) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, handleKey])

  if (!open) return null

  const allTools = [...frontendTools, ...backendTools]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border/50 bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b border-border/30 bg-card">
          <div>
            <h3 className="text-xl font-serif tracking-tight">
              {language === 'pt' ? 'Stack completa' : 'Full stack'}
            </h3>
            <p className="text-xs font-mono text-muted-foreground mt-0.5">
              {allTools.length} {language === 'pt' ? 'tecnologias' : 'technologies'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            aria-label="Fechar"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
            {allTools.map((tech) => (
              <TechIcon key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Stack() {
  const { language } = useLanguage()
  const [paused, setPaused] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section id="stack" className="py-16 border-t border-border/30 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Stack</h2>
          <h3 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">
            {language === 'pt' ? 'Tecnologias que uso no dia a dia' : 'Technologies I use daily'}
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {language === 'pt'
              ? 'Ferramentas que utilizo para construir interfaces, APIs e sistemas web completos.'
              : 'Tools I use to build interfaces, APIs, and complete web systems.'}
          </p>
        </div>

        <div
          className="space-y-6 px-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <MarqueeRow tools={frontendTools} direction="left"  duration={38} paused={paused} />
          <MarqueeRow tools={backendTools}  direction="right" duration={44} paused={paused} />
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setModalOpen(true)}
            className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-border/50 text-sm font-mono text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0 text-primary/60 group-hover:text-primary transition-colors">
              <path d="M7.5 1v13M1 7.5h13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            {language === 'pt' ? 'Ver stack completa' : 'View full stack'}
          </button>
        </div>
      </section>

      <StackModal open={modalOpen} onClose={() => setModalOpen(false)} language={language} />
    </>
  )
}
