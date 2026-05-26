import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaBrain } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import ThemeSelector from './ThemeSelector'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/jobs', label: 'AI Jobs' },
  { path: '/success-stories', label: 'Stories' },
  { path: '/resume-upload', label: 'AI Resume' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'shadow-2xl' : ''
    }`} style={{
      backgroundColor: scrolled ? `rgb(var(--color-bg) / 0.92)` : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
      borderBottom: scrolled ? `1px solid rgb(var(--color-border) / 0.3)` : '1px solid transparent',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 theme-glow-sm" style={{ background: 'var(--gradient-accent)' }}>
              <FaBrain className="text-white text-lg" />
            </div>
            <span className="font-display font-bold text-xl">
              <span style={{ color: `rgb(var(--color-text))` }}>Talent</span>
              <span className="theme-gradient-text">Bridge</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                style={{
                  backgroundColor: location.pathname === link.path ? `rgb(var(--color-accent-1) / 0.1)` : 'transparent',
                  color: location.pathname === link.path ? `rgb(var(--color-accent-1))` : `rgb(var(--color-text-secondary))`,
                  border: location.pathname === link.path ? `1px solid rgb(var(--color-accent-1) / 0.2)` : '1px solid transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-3">
              <ThemeSelector />
            </div>
            <Link to="/resume-upload" className="ml-3 btn-3d inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300" style={{ background: 'var(--gradient-accent)' }}>
              <HiSparkles className="text-sm" />
              Try AI Free
            </Link>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeSelector />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-xl transition-colors" style={{ color: `rgb(var(--color-text-secondary))` }}>
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
            style={{
              backgroundColor: `rgb(var(--color-bg) / 0.98)`,
              backdropFilter: 'blur(20px)',
              borderTop: `1px solid rgb(var(--color-border) / 0.3)`,
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    backgroundColor: location.pathname === link.path ? `rgb(var(--color-accent-1) / 0.1)` : 'transparent',
                    color: location.pathname === link.path ? `rgb(var(--color-accent-1))` : `rgb(var(--color-text-secondary))`,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
