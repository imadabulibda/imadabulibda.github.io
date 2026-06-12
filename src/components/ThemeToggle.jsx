import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useTheme } from '../theme/ThemeContext.jsx'

function SunIcon() {
  return (
    <svg className="theme-switch__icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 3v2M12 19v2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M3 12h2M19 12h2M5.64 18.36l1.41-1.41M16.95 7.05l1.41-1.41"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="theme-switch__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3a6.5 6.5 0 0 0 9.4 9.4A8.5 8.5 0 1 1 12 3Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ThemeToggle() {
  const { t } = useLanguage()
  const { resolvedTheme, setTheme } = useTheme()
  const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className="theme-switch"
      role="switch"
      aria-checked={resolvedTheme === 'dark'}
      aria-label={nextTheme === 'dark' ? t.theme.dark : t.theme.light}
      title={nextTheme === 'dark' ? t.theme.dark : t.theme.light}
      onClick={() => setTheme(nextTheme)}
    >
      <span
        className={
          resolvedTheme === 'light' ? 'theme-switch__segment is-active' : 'theme-switch__segment'
        }
        aria-hidden="true"
      >
        <SunIcon />
      </span>
      <span
        className={
          resolvedTheme === 'dark' ? 'theme-switch__segment is-active' : 'theme-switch__segment'
        }
        aria-hidden="true"
      >
        <MoonIcon />
      </span>
    </button>
  )
}
