import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [heroVisible, setHeroVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)
      setHeroVisible(scrollY < 150)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showIdentity = isScrolled && !heroVisible

  const navLinks = [
    { name: t('nav.about'), href: '/#about' },
    { name: t('nav.stack'), href: '/#stack' },
    { name: t('nav.projects'), href: '/#projects' },
    { name: t('nav.contact'), href: '/#contact' },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isScrolled ? 1 : 0,
        y: isScrolled ? 0 : -20,
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: isScrolled ? 'auto' : 'none' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50 py-4"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <AnimatePresence mode="wait">
          {showIdentity ? (
            <motion.a
              key="identity"
              href="/"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col leading-tight"
            >
              <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
                {t('hero.label')}
              </span>
              <span className="font-serif text-base text-foreground">
                Pedro Gama
              </span>
            </motion.a>
          ) : (
            <motion.div
              key="spacer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="w-24"
            />
          )}
        </AnimatePresence>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <button
            onClick={toggleLanguage}
            className="text-xs font-mono tracking-widest text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border border-white/5 bg-white/5"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
          <motion.a
            href="/#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-2 border border-primary text-primary text-xs font-mono uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {t('nav.talk')}
          </motion.a>
        </nav>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/90 backdrop-blur-sm border-b border-border/50 p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false) }}
            className="w-full py-3 mt-4 border border-border/50 text-muted-foreground text-center text-xs font-mono uppercase tracking-widest transition-colors"
          >
            {language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          </button>
          <a
            href="/#contact"
            className="w-full py-3 mt-2 border border-primary text-primary text-center text-xs font-mono uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('nav.talk')}
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}
