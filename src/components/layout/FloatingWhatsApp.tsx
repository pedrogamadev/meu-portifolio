import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data'
import { useLanguage } from '../../contexts/LanguageContext'
import { X } from 'lucide-react'

export function FloatingWhatsApp() {
  const { language } = useLanguage()
  const [showNotification, setShowNotification] = useState(false)
  const { personalInfo } = portfolioData[language]

  const defaultMessage = language === 'pt'
    ? 'Olá Pedro! Vi seu portfólio e gostaria de conversar.'
    : 'Hi Pedro! I saw your portfolio and would like to chat.'

  const url = `${personalInfo.whatsapp}?text=${encodeURIComponent(defaultMessage)}`

  useEffect(() => {
    // Show notification 3 seconds after page loads
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, 3000)

    // Hide it automatically after 8 seconds if not interacted with
    const hideTimer = setTimeout(() => {
      setShowNotification(false)
    }, 11000)

    // Show it again every 45 seconds to re-engage
    const interval = setInterval(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 8000)
    }, 45000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 10, scale: 0.9, filter: 'blur(2px)' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="pointer-events-auto bg-card border border-border shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] rounded-2xl p-4 mb-2 relative flex items-start gap-3 w-64 origin-bottom-right"
          >
            {/* Pulse Indicator */}
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 absolute -top-1 -left-1 ring-2 ring-background animate-pulse" />
            
            <div className="flex-1">
              <p className="text-sm font-bold text-foreground mb-1 tracking-tight">
                {language === 'pt' ? 'Pedro Gama' : 'Pedro Gama'}
              </p>
              <p className="text-[13px] text-muted-foreground leading-snug">
                {language === 'pt' ? 'Ei, vamos conversar! 👋' : 'Hey, let\'s chat! 👋'}
              </p>
            </div>
            <button 
              onClick={(e) => {
                e.preventDefault()
                setShowNotification(false)
              }}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <X size={14} />
            </button>
            
            {/* Tooltip Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card border-b border-r border-border transform rotate-45 rounded-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        aria-label={language === 'pt' ? 'Conversar no WhatsApp' : 'Chat on WhatsApp'}
        className="pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25 transition-transform hover:scale-110 group relative"
        style={{ backgroundColor: '#25D366' }}
      >
        <span className="absolute inset-0 rounded-full animate-ping opacity-[0.15]" style={{ backgroundColor: '#25D366' }} />
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="relative z-10 drop-shadow-sm">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>
  )
}
