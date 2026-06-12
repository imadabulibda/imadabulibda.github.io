import { useEffect, useRef, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { navigateToSection, scrollToPageY, stripHashFromUrl } from '../shared/lib/scroll.js'
import { ThemeToggle } from './ThemeToggle.jsx'

const DESKTOP_NAV_QUERY = '(min-width: 64rem)'

export function Header() {
  const { t } = useLanguage()
  const menuOpenRef = useRef(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useActiveSection()

  menuOpenRef.current = menuOpen

  const closeMenu = () => setMenuOpen(false)

  const runScroll = (scroll) => {
    if (menuOpen) {
      closeMenu()
    }

    scroll()
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && menuOpenRef.current) {
        closeMenu()
      }
    }

    const handleResize = () => {
      if (window.matchMedia(DESKTOP_NAV_QUERY).matches) {
        closeMenu()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollToSection = (event, sectionId) => {
    event.preventDefault()
    setActiveSection(sectionId)

    runScroll(() => {
      navigateToSection(sectionId)
      stripHashFromUrl()
    })
  }

  const scrollToTop = (event) => {
    event.preventDefault()
    setActiveSection('')

    runScroll(() => {
      scrollToPageY(0)
      stripHashFromUrl()
    })
  }

  const navLinkProps = (sectionId) => ({
    className: activeSection === sectionId ? 'is-active' : undefined,
    'aria-current': activeSection === sectionId ? 'page' : undefined,
  })

  return (
    <header className={`header${menuOpen ? ' is-menu-open' : ''}`}>
      <div className="container header__inner">
        <a
          href="#"
          className="logo"
          aria-label={t.nav.homeLabel}
          title={t.nav.homeLabel}
          onClick={scrollToTop}
        >
          {t.meta.name}
        </a>

        <nav id="site-nav" className="nav" aria-label={t.nav.ariaLabel}>
          <a
            href="#"
            {...navLinkProps('about')}
            onClick={(event) => scrollToSection(event, 'about')}
          >
            {t.nav.about}
          </a>
          <a
            href="#"
            {...navLinkProps('experience')}
            onClick={(event) => scrollToSection(event, 'experience')}
          >
            {t.nav.experience}
          </a>
          <a
            href="#"
            {...navLinkProps('education')}
            onClick={(event) => scrollToSection(event, 'education')}
          >
            {t.nav.education}
          </a>
          <a
            href="#"
            {...navLinkProps('skills')}
            onClick={(event) => scrollToSection(event, 'skills')}
          >
            {t.nav.skills}
          </a>
          <a
            href="#"
            {...navLinkProps('languages')}
            onClick={(event) => scrollToSection(event, 'languages')}
          >
            {t.nav.languages}
          </a>
          <a
            href="#"
            {...navLinkProps('contact')}
            onClick={(event) => scrollToSection(event, 'contact')}
          >
            {t.nav.contact}
          </a>
        </nav>

        <div className="header__end">
          <ThemeToggle />

          <button
            type="button"
            className="header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="header__menu-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
