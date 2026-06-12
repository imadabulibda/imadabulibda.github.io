import { useEffect, useState } from 'react'
import { getSkillIconSlug } from '../theme/skillIcons.js'
import { useTheme } from '../theme/ThemeContext.jsx'
import { getFallbackLabel } from '../shared/lib/getFallbackLabel.js'

export function SkillIcon({ name, icon }) {
  const { resolvedTheme } = useTheme()
  const [iconFailed, setIconFailed] = useState(false)
  const iconSlug = getSkillIconSlug(icon, resolvedTheme)

  useEffect(() => {
    setIconFailed(false)
  }, [iconSlug])

  const showImage = iconSlug && !iconFailed
  const iconSrc = iconSlug ? `${import.meta.env.BASE_URL}icons/${iconSlug}.svg` : null

  return (
    <li className="skills-chip">
      {showImage ? (
        <img
          className="skills-chip__icon"
          src={iconSrc}
          alt=""
          width={16}
          height={16}
          loading="lazy"
          decoding="async"
          onError={() => setIconFailed(true)}
        />
      ) : (
        <span className="skills-chip__fallback" aria-hidden="true">
          {getFallbackLabel(name, { singleWordLength: 3 })}
        </span>
      )}
      <span className="skills-chip__name">{name}</span>
    </li>
  )
}
