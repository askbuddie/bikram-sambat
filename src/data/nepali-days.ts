export const NepaliDaysData = [
  { en: 'Sunday', np: 'आइतबार' },
  { en: 'Monday', np: 'सोमबार' },
  { en: 'Tuesday', np: 'मंगलबार' },
  { en: 'Wednesday', np: 'बुधबार' },
  { en: 'Thursday', np: 'बिहिबार' },
  { en: 'Friday', np: 'शुक्रबार' },
  { en: 'Saturday', np: 'शनिबार' }
] as ReadonlyArray<Day>

type Day = { en: string; np: string }
