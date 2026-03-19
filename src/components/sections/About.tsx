import { motion } from 'framer-motion'
import { personalInfo, highlights } from '@/data'
import { Section } from '../layout/Section'

export function About() {
  return (
    <Section id="about" className="relative">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-primary font-mono text-sm tracking-widest uppercase">Quem sou</h2>
            <h3 className="text-4xl font-bold tracking-tight">Desenvolvedor com <span className="text-primary italic">DNA</span> de produto.</h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {personalInfo.about}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Minha abordagem vai além de apenas escrever código. Eu busco entender o valor do negócio, a dor do usuário e como transformar requisitos técnicos em uma experiência excepcional que performa e escala.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm group hover:border-primary/20 hover:bg-white/[0.08] transition-all"
            >
              <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="font-bold text-sm md:text-base">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
