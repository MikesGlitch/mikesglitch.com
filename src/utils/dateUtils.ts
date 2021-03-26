export const toHumanReadableDate = (date: Date) => {
  if (date) {
    return new Date(date).toLocaleDateString()
  }

  return 'No date found'
}
