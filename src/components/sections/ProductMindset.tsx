import { motion } from 'framer-motion'
import { productMindset } from '@/data'
import { Section } from '../layout/Section'

export function ProductMindset() {
  return (
    <Section className="relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px] opacity-20 -z-10" />

      <div className="text-center mb-16 space-y-4">
        <h2 className="text-primary font-mono text-sm tracking-widest uppercase">Como eu trabalho</h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">O que eu valorizo no desenvolvimento</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Mais do que entregar código, gosto de construir soluções bem cuidadas, que sejam agradáveis de usar e tranquilas de evoluir.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {productMindset.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-3xl hover:bg-white/[0.06] hover:border-white/10 transition-all flex flex-col gap-6 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-white duration-300">
              <item.icon size={28} />
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
