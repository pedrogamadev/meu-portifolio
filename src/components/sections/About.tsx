import { motion } from 'framer-motion'
import { personalInfo, highlights } from '@/data'
import { Section } from '../layout/Section'

export function About() {
  return (
    <Section id="about" className="relative border-t border-border/30">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground">Quem sou</h2>
            <h3 className="text-4xl font-serif tracking-tight leading-tight">
              Desenvolvedor movido por <span className="italic">curiosidade</span>, prática e evolução.
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg font-serif text-muted-foreground leading-relaxed"
          >
            {personalInfo.about}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-serif text-muted-foreground leading-relaxed"
          >
            No dia a dia, gosto de trabalhar com clareza, colaboração e atenção aos detalhes. Para mim, desenvolver bem passa por entender o contexto, organizar a solução e construir algo que faça sentido tanto tecnicamente quanto para quem vai usar.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {highlights.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <item.icon className="text-primary" size={24} strokeWidth={1.5} />
              <h4 className="font-serif italic text-lg text-foreground">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
