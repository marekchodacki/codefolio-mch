export function preventOrphans(text, customOrphans = [], customClitics = []) {
  const orphanWords = [
    'a', 'i', 'o', 'u', 'w', 'z',
    'co', 'do', 'od', 'na', 'po', 'za', 'ze', 'we',
    'aby', 'bez', 'czy', 'dla', 'ich', 'nie', 'pod',
    ...customOrphans
  ]

  const cliticWords = [
    'się',
    ...customClitics
  ]

  text = text.replace(
    new RegExp(`\\s(${orphanWords.join('|')})\\s`, 'gi'),
    (_, word) => ` ${word}\u00A0`
  )

  const regex = new RegExp(`\\s(${cliticWords.join('|')})([\\s,.!?:;]|$)`, 'gi')
  text = text.replace(regex, '\u00A0$1$2')

  return text
}
