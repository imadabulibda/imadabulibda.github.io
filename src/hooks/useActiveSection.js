import { useEffect, useState } from 'react'
import { getScrollOffsetPx, SECTION_IDS } from '../shared/lib/scroll.js'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    let frame = 0

    const update = () => {
      const offset = getScrollOffsetPx()

      if (window.scrollY < offset * 0.75) {
        setActiveSection('')
        return
      }

      const contact = document.getElementById('contact')
      if (contact && contact.getBoundingClientRect().top < window.innerHeight) {
        setActiveSection('contact')
        return
      }

      let current = ''
      for (const id of SECTION_IDS) {
        if (id === 'contact') continue

        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= offset + 24) {
          current = id
        }
      }

      setActiveSection(current)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return [activeSection, setActiveSection]
}
