import { personalInfo } from '@/data'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-xl font-bold tracking-tighter bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name.split(' ').map(n => n[0]).join('')}.dev
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Voltar ao topo</a>
          <a href={personalInfo.github} className="hover:text-primary transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} className="hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
