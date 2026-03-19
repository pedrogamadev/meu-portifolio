import { motion } from 'framer-motion'
import { personalInfo } from '@/data'
import { ArrowRight, Code2, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider"
          >
            <Sparkles size={14} />
            Disponível para novos desafios
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              Eu transformo <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">ideias</span> em produtos digitais.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Sou o <span className="text-foreground font-semibold">{personalInfo.name}</span>, {personalInfo.shortBio}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold flex items-center gap-2 group hover:shadow-[0_0_20px_rgba(170,59,255,0.4)] transition-all"
            >
              Ver Projetos
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full bg-secondary border border-border text-foreground font-bold hover:bg-muted transition-colors"
            >
              Entrar em contato
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-6 pt-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/40 to-muted" />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-bold">+10 projetos</span> entregues com sucesso
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          {/* Visual Representation of Stack/Dashboard */}
          <div className="relative z-10 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="px-3 py-1 rounded-md bg-white/10 text-[10px] text-muted-foreground font-mono">
                pedrogama.dev/system
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Code2 size={24} />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                  <div className="h-2 w-1/3 bg-white/5 rounded-full" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <div className="h-2 w-1/2 bg-primary/30 rounded-full" />
                  <div className="text-2xl font-bold font-mono">98%</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Performance</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <div className="h-2 w-1/2 bg-cyan-400/30 rounded-full" />
                  <div className="text-2xl font-bold font-mono">A+</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Code Quality</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold">Active Deployments</span>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-1.5 w-24 bg-white/10 rounded-full" />
                    <div className="h-1.5 w-8 bg-primary/40 rounded-full" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                    <div className="h-1.5 w-12 bg-primary/40 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements for depth */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 rounded-2xl bg-background border border-border shadow-xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-400/20 flex items-center justify-center text-cyan-400">
                <Sparkles size={16} />
              </div>
              <span className="text-xs font-bold">Premium UX</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
