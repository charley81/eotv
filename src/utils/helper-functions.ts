export function truncate(str: string, num: number) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

export function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}
