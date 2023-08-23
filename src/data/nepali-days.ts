export type LanguageCode = 'en' | 'np'

export const NepaliDaysData = [
  { en: 'Sunday', np: 'आइतबार' },
  { en: 'Monday', np: 'सोमबार' },
  { en: 'Tuesday', np: 'मंगलबार' },
  { en: 'Wednesday', np: 'बुधबार' },
  { en: 'Thursday', np: 'बिहिबार' },
  { en: 'Friday', np: 'शुक्रबार' },
  { en: 'Saturday', np: 'शनिबार' }
] as ReadonlyArray<Record<LanguageCode, string>>
