import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { CustomCursor } from './components/layout/CustomCursor'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Stack } from './components/sections/Stack'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { ProductMindset } from './components/sections/ProductMindset'
import { Contact } from './components/sections/Contact'
import { ProjectDetail } from './pages/ProjectDetail'
import { LanguageProvider } from './contexts/LanguageContext'

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <ProductMindset />
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
        </div>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
