import { motion } from 'framer-motion'
import { stacks } from '@/data'
import { Section } from '../layout/Section'

export function Stack() {
  return (
    <Section id="stack">
      <div className="text-center space-y-4 mb-20">
        <h2 className="text-primary font-mono text-sm tracking-widest uppercase">Stack</h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Tecnologias com as quais eu trabalho</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ferramentas que fazem parte do meu dia a dia no desenvolvimento de interfaces, APIs e aplicações web completas.
        </p>
      </div>

      <div className="space-y-16">
        {stacks.map((category) => (
          <div key={category.category} className="space-y-8">
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <span className="w-8 h-px bg-primary/40" />
              {category.category}
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {category.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="relative group p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-primary/50 transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-full scale-150" />

                  <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-primary group-hover:text-primary-foreground group-hover:bg-primary transition-all duration-300">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-foreground">{item.name}</h5>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
