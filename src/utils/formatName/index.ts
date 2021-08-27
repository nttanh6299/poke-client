export default function formatName(value: string): string {
  const trimedValue = value.trim()
  const replacedValue = trimedValue.replace(/[_-]/g, ' ')
  const lowercaseValue = replacedValue.toLowerCase()
  return lowercaseValue
    .split(' ')
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ')
}
