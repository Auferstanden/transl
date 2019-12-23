export default interface Entry {
  id: number
  next?: number
  series: string
  title: {
    en: string
    ja: string
  }
  text: Array<
    Array<{
      en: string
      ja: string
    }>
  >
}
