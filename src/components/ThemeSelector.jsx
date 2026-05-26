import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheck, FaPalette } from 'react-icons/fa'
import { useTheme, themes } from '../context/ThemeContext'

export default function ThemeSelector() {
  const { currentTheme, setCurrentTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 rounded-xl theme-card theme-card-hover transition-all duration-300 group"
        title="Change Theme"
      >
        <FaPalette className="text-lg theme-text-secondary group-hover:theme-accent transition-colors" style={{ color: `rgb(var(--color-accent-1))` }} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-3 w-64 rounded-2xl shadow-2xl overflow-hidden z-[100]"
            style={{ 
              backgroundColor: `rgb(var(--color-bg-card))`,
              border: `1px solid rgb(var(--color-border) / 0.4)`,
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="p-3 border-b" style={{ borderColor: `rgb(var(--color-border) / 0.3)` }}>
              <p className="font-semibold text-sm" style={{ color: `rgb(var(--color-text))` }}>Choose Theme</p>
            </div>
            <div className="p-2 space-y-1">
              {Object.values(themes).map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => { setCurrentTheme(theme.id); setIsOpen(false) }}
                  className="w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    backgroundColor: currentTheme === theme.id ? `rgb(var(--color-accent-1) / 0.1)` : 'transparent',
                    border: currentTheme === theme.id ? `1px solid rgb(var(--color-accent-1) / 0.3)` : '1px solid transparent',
                  }}
                >
                  <span className="text-lg w-8 text-center">{theme.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate" style={{ color: currentTheme === theme.id ? `rgb(var(--color-accent-1))` : `rgb(var(--color-text))` }}>
                      {theme.name}
                    </p>
                    <p className="text-[10px] truncate" style={{ color: `rgb(var(--color-text-muted))` }}>{theme.description}</p>
                  </div>
                  {currentTheme === theme.id && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                      className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: `var(--gradient-accent)` }}>
                      <FaCheck className="text-[9px] text-white" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
