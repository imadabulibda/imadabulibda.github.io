import { createContext, useContext, useEffect, useState } from 'react'
import {
  applyTheme,
  getStoredThemePreference,
  resolveTheme,
  saveThemePreference,
} from './theme.js'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [preference, setPreference] = useState(getStoredThemePreference)
  const [resolvedTheme, setResolvedTheme] = useState(() => resolveTheme(getStoredThemePreference()))

  useEffect(() => {
    setResolvedTheme(applyTheme(preference))
    saveThemePreference(preference)
  }, [preference])

  useEffect(() => {
    if (preference !== null) {
      return undefined
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      setResolvedTheme(applyTheme(null))
    }

    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [preference])

  const value = {
    resolvedTheme,
    setTheme: setPreference,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
