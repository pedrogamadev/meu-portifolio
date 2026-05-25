import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { CustomCursor } from './components/layout/CustomCursor'
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Stack } from './components/sections/Stack'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'
import { ProjectDetail } from './pages/ProjectDetail'
import { LanguageProvider } from './contexts/LanguageContext'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      // Pequeno atraso para garantir que a página carregou
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <main>
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CustomCursor />
        <div className="min-h-screen bg-background text-foreground font-serif selection:bg-primary/30 selection:text-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projeto/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
