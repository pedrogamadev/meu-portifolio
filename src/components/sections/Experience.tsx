import { motion } from 'framer-motion'
import { experience, type ExperienceType } from '@/data'
import { Section } from '../layout/Section'
import { Calendar } from 'lucide-react'

const typeDetails: Record<ExperienceType, { badge: string; dot: string; dotBorder: string; title: string; label: string }> = {
  current: {
    badge: "bg-primary/20 text-primary border-primary/30",
    dot: "bg-primary shadow-sm shadow-primary/50",
    dotBorder: "border-primary/40 group-hover:border-primary",
    title: "text-foreground group-hover:text-primary",
    label: "ATUAL"
  },
  parallel: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    dot: "bg-blue-400",
    dotBorder: "border-blue-500/20 group-hover:border-blue-400/50",
    title: "text-foreground group-hover:text-blue-400",
    label: "PARALELO"
  },
  business: {
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    dot: "bg-purple-400",
    dotBorder: "border-purple-500/20 group-hover:border-purple-400/50",
    title: "text-foreground group-hover:text-purple-400",
    label: "NEGÓCIO PRÓPRIO"
  },
  previous: {
    badge: "bg-white/5 text-muted-foreground border-white/10",
    dot: "bg-muted-foreground/50",
    dotBorder: "border-white/10 group-hover:border-white/20",
    title: "text-muted-foreground group-hover:text-foreground",
    label: "ANTERIOR"
  }
}

export function Experience() {
  return (
    <Section id="experience">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div className="space-y-6 md:sticky md:top-24">
          <h2 className="text-primary font-mono text-sm tracking-widest uppercase">Experiência</h2>
          <h3 className="text-4xl font-bold tracking-tight">Jornada profissional</h3>
          <p className="text-muted-foreground">
            Uma trajetória que combina vivência em operação comercial, gestão de negócio próprio, execução de projetos independentes e atuação técnica dedicada ao desenvolvimento de software.
          </p>
        </div>

        <div className="relative space-y-10 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5 pl-4 md:pl-0">
          {experience.map((exp, i) => {
            const styles = typeDetails[exp.type]

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-10 md:pl-12 group cursor-default"
              >
                <div className={`absolute left-0 top-1.5 w-9 h-9 rounded-full bg-background border-2 flex items-center justify-center z-10 transition-colors duration-300 ${styles.dotBorder}`}>
                  <div className={`w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125 ${styles.dot}`} />
                </div>

                <div className="space-y-3 p-5 -ml-4 md:-ml-5 rounded-2xl transition-colors duration-300 hover:bg-white/[0.02] border border-transparent hover:border-white/5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${styles.badge}`}>
                      {styles.label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className={`text-xl font-bold transition-colors duration-300 ${styles.title}`}>
                      {exp.role}
                    </h4>
                    <span className="text-sm font-semibold text-muted-foreground mt-1 block">
                      {exp.company}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
