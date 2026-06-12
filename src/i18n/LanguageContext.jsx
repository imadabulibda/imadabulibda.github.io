import { createContext, useContext } from 'react'
import { en } from './en.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const value = {
    t: en,
  }

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
