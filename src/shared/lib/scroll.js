export const SECTION_IDS = ['about', 'experience', 'education', 'skills', 'languages', 'contact']

function lengthToPx(value, rootFontSize) {
  const size = value.trim()
  if (!size) return 0
  if (size.endsWith('rem')) return parseFloat(size) * rootFontSize
  if (size.endsWith('px')) return parseFloat(size)
  return 0
}

export function getScrollOffsetPx() {
  const root = document.documentElement
  const style = getComputedStyle(root)
  const fontSize = parseFloat(style.fontSize)

  return (
    lengthToPx(style.getPropertyValue('--header-height'), fontSize) +
    lengthToPx(style.getPropertyValue('--scroll-gap'), fontSize)
  )
}

function isCompactNav() {
  return window.matchMedia('(max-width: 64rem)').matches
}

export function scrollToPageY(top) {
  window.scrollTo({ top, behavior: 'smooth' })
}

export function scrollToSectionStart(section) {
  const top = section.getBoundingClientRect().top + window.scrollY - getScrollOffsetPx()
  window.scrollTo({ top, behavior: isCompactNav() ? 'auto' : 'smooth' })
}

export function navigateToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) scrollToSectionStart(section)
}

export function stripHashFromUrl() {
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
}

