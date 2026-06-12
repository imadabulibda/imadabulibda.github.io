const SKILL_ICONS_WITH_LIGHT_VARIANT = new Set([
  'nextdotjs',
  'css3',
  'apollographql',
  'express',
  'django',
  'github',
  'styledcomponents',
  'php',
  'mysql',
])

export function getSkillIconSlug(icon, resolvedTheme) {
  if (!icon) return null
  if (resolvedTheme === 'dark' && SKILL_ICONS_WITH_LIGHT_VARIANT.has(icon)) {
    return `${icon}-light`
  }
  return icon
}
