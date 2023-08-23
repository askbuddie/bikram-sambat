export const NepaliDaysData = [
  { index: 1, en: 'Sunday', np: 'आइतबार' },
  { index: 2, en: 'Monday', np: 'सोमबार' },
  { index: 3, en: 'Tuesday', np: 'मंगलबार' },
  { index: 4, en: 'Wednesday', np: 'बुधबार' },
  { index: 5, en: 'Thursday', np: 'बिहिबार' },
  { index: 6, en: 'Friday', np: 'शुक्रबार' },
  { index: 7, en: 'Saturday', np: 'शनिबार' }
] as ReadonlyArray<Day>

export type Day = { index: number; en: string; np: string }
