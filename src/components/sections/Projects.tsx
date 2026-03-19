import { motion } from 'framer-motion'
import { projects } from '@/data'
import { Section } from '../layout/Section'
import { ExternalLink, Github, ChevronRight } from 'lucide-react'

export function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <h2 className="text-primary font-mono text-sm tracking-widest uppercase">Case Studies</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Projetos em destaque</h3>
        </div>
        <p className="text-muted-foreground max-w-md">
          Uma seleção de aplicações reais onde apliquei meus conhecimentos para resolver problemas complexos.
        </p>
      </div>

      <div className="space-y-32">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
          >
            {/* Project Image/Mock */}
            <div className="flex-1 w-full relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity`} />
              <div className="relative aspect-[16/10] bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Simulated Content */}
                <div className="absolute inset-4 rounded-xl bg-[#0a0a0a] border border-white/5 p-6 flex flex-col gap-4">
                   <div className="flex gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-white/20" />
                     <div className="w-16 h-2 rounded-full bg-white/10" />
                   </div>
                   <div className="flex-1 flex items-center justify-center">
                      <span className="text-2xl font-bold font-mono opacity-20 select-none tracking-tighter uppercase transform -rotate-12">{project.title}</span>
                   </div>
                   <div className="grid grid-cols-3 gap-2">
                     <div className="h-24 rounded-lg bg-white/[0.03]" />
                     <div className="h-24 rounded-lg bg-white/[0.03]" />
                     <div className="h-24 rounded-lg bg-white/[0.05]" />
                   </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href="#" className="p-4 rounded-full bg-background border border-border shadow-xl transform scale-75 group-hover:scale-100 transition-transform font-bold flex items-center gap-2">
                    Explorar Case <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex-1 space-y-6">
               <div className="space-y-2">
                 <p className="text-primary font-mono text-xs uppercase tracking-widest">{project.context}</p>
                 <h4 className="text-3xl font-bold tracking-tight">{project.title}</h4>
               </div>
               
               <p className="text-muted-foreground text-lg leading-relaxed">
                 {project.description}
               </p>

               <div className="flex flex-wrap gap-2">
                 {project.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono font-bold uppercase tracking-wider">
                     {tag}
                   </span>
                 ))}
               </div>

               <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                 <a href="#" className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors">
                   <ExternalLink size={18} />
                   Live Demo
                 </a>
                 <a href="#" className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors">
                   <Github size={18} />
                   Código-fonte
                 </a>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
