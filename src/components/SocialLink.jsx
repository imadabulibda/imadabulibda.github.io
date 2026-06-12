import { useState } from 'react'
import { getFallbackLabel } from '../shared/lib/getFallbackLabel.js'

export function SocialLink({ label, href, icon }) {
  const [iconFailed, setIconFailed] = useState(false)
  const showImage = icon && !iconFailed
  const iconSrc = icon ? `${import.meta.env.BASE_URL}icons/${icon}.svg` : null

  return (
    <li>
      <a
        className="footer__social-link"
        href={href}
        aria-label={label}
        target="_blank"
        rel="noreferrer"
      >
        {showImage ? (
          <img
            className="footer__social-icon"
            src={iconSrc}
            alt=""
            width={28}
            height={28}
            loading="lazy"
            decoding="async"
            onError={() => setIconFailed(true)}
          />
        ) : (
          <span className="footer__social-fallback" aria-hidden="true">
            {getFallbackLabel(label)}
          </span>
        )}
      </a>
    </li>
  )
}
