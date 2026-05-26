import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Jobs from './pages/Jobs'
import SuccessStories from './pages/SuccessStories'
import ResumeUpload from './pages/ResumeUpload'
import Contact from './pages/Contact'

function App() {
  const [particlesReady, setParticlesReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setParticlesReady(true))
  }, [])

  return (
    <div className="min-h-screen flex flex-col theme-bg transition-colors duration-500">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/resume-upload" element={<ResumeUpload />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <AIChatbot />
      <Toaster position="top-right" toastOptions={{
        style: { background: 'rgb(var(--color-bg-card))', color: 'rgb(var(--color-text))', border: '1px solid rgb(var(--color-border) / 0.3)' }
      }} />
    </div>
  )
}

export default App
