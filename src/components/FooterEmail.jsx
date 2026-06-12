import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {}
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

function CopyIcon() {
  return (
    <svg
      className="footer__email-copy-icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  )
}

export function FooterEmail() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return undefined

    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  const handleCopy = async () => {
    try {
      await copyText(t.contact.email)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="footer__email-row">
      <button
        type="button"
        className={`footer__email-copy${copied ? ' is-copied' : ''}`}
        onClick={handleCopy}
        aria-label={copied ? t.contact.emailCopied : t.contact.emailCopy}
      >
        <CopyIcon />
        <span className="footer__email-copy-hint" aria-live="polite">
          {copied ? t.contact.emailCopied : t.contact.emailCopy}
        </span>
      </button>

      <a
        className="footer__email"
        href={`mailto:${t.contact.email}`}
        target="_blank"
        rel="noreferrer"
      >
        {t.contact.email}
      </a>
    </div>
  )
}
