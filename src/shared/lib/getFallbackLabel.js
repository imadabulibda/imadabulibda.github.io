export function getFallbackLabel(name, { singleWordLength = 2 } = {}) {
  const words = name.replace(/[()]/g, '').split(/[\s/]+/).filter(Boolean)

  if (words.length === 1) {
    return words[0].slice(0, singleWordLength).toUpperCase()
  }

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}
