export const toHumanReadableDate = (date: string) => {
  if (date) {
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(new Date(date))
  }

  return 'No date found'
}
