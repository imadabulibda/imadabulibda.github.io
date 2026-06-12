import { useEffect } from 'react'

export function useOverscrollLock() {
  useEffect(() => {
    const root = document.documentElement

    const update = () => {
      root.classList.toggle('is-scrolled', window.scrollY > 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })

    return () => {
      window.removeEventListener('scroll', update)
      root.classList.remove('is-scrolled')
    }
  }, [])
}
