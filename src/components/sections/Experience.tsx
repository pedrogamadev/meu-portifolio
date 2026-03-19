import { motion } from 'framer-motion'
import { experience } from '@/data'
import { Section } from '../layout/Section'
import { Calendar } from 'lucide-react'

export function Experience() {
  return (
    <Section id="experience">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-primary font-mono text-sm tracking-widest uppercase">Trajetória</h2>
          <h3 className="text-4xl font-bold tracking-tight">Evolução profissional</h3>
          <p className="text-muted-foreground">
            Uma jornada focada em aprendizado contínuo e na construção de soluções que resolvem problemas reais.
          </p>
        </div>

        <div className="relative space-y-12 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 group"
            >
              <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center z-10 group-hover:border-primary transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Calendar size={12} />
                  {exp.year}
                </span>
                <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
