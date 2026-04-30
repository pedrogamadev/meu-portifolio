import { portfolioData } from '@/data'
import { useLanguage } from '../../contexts/LanguageContext'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const { personalInfo } = portfolioData[language]

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-xl font-bold tracking-tighter bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name.split(' ').map(n => n[0]).join('')}.dev
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">{language === 'pt' ? 'Voltar ao topo' : 'Back to top'}</a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
