import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Stack } from './components/sections/Stack'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { ProductMindset } from './components/sections/ProductMindset'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <ProductMindset />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
