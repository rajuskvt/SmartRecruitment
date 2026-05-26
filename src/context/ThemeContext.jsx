import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const themes = {
  midnight: {
    id: 'midnight',
    name: 'Midnight',
    icon: '🌙',
    description: 'Deep dark with blue accents',
  },
  ocean: {
    id: 'ocean',
    name: 'Deep Ocean',
    icon: '🌊',
    description: 'Cool blues and teals',
  },
  aurora: {
    id: 'aurora',
    name: 'Aurora',
    icon: '🌌',
    description: 'Purple and pink hues',
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald',
    icon: '💎',
    description: 'Green and teal tones',
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset',
    icon: '🌅',
    description: 'Warm orange and rose',
  },
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    icon: '⚡',
    description: 'Neon yellow and magenta',
  },
  light: {
    id: 'light',
    name: 'Light',
    icon: '☀️',
    description: 'Clean white with blue accents',
  },
  lavender: {
    id: 'lavender',
    name: 'Lavender',
    icon: '🌸',
    description: 'Soft purple light theme',
  },
  frost: {
    id: 'frost',
    name: 'Frost',
    icon: '❄️',
    description: 'Light bg with dark cards',
  },
  rosegold: {
    id: 'rosegold',
    name: 'Rose Gold',
    icon: '🌹',
    description: 'Warm light with rose accents',
  },
  nordic: {
    id: 'nordic',
    name: 'Nordic',
    icon: '🏔️',
    description: 'Clean light with deep navy',
  },
  twilight: {
    id: 'twilight',
    name: 'Twilight',
    icon: '🌆',
    description: 'Dark purple with warm gold',
  },
}

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('tb-theme')
      return saved && themes[saved] ? saved : 'midnight'
    } catch {
      return 'midnight'
    }
  })

  useEffect(() => {
    localStorage.setItem('tb-theme', currentTheme)
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  const theme = themes[currentTheme]

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, setCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
