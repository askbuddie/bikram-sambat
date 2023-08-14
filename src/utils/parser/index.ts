import BikramSambat from 'BikramSambat'
import { NepaliMonthsData, DateFormats } from '../../data'

const MonthNames = NepaliMonthsData.map((month) => month.en)

export const parse = (dateString: string): BikramSambat => {
  for (const dateFormat of DateFormats) {
    const match = dateString.match(dateFormat.regex)
    if (match) {
      const parsedDate: { year?: number; month?: number; day?: number } = {}
      dateFormat.order.forEach((component, index) => {
        if (
          component === 'month' &&
          MonthNames.indexOf(match[index + 1]) >= 0
        ) {
          parsedDate[component] = MonthNames.indexOf(match[index + 1]) + 1
        } else {
          if (component === 'year' && match[index + 1].length < 4) {
            if (match[index + 1].length === 2)
              parsedDate[component] = parseInt('20' + match[index + 1])
            else parsedDate[component] = parseInt('2' + match[index + 1])
          } else {
            parsedDate[component] = parseInt(match[index + 1])
          }
        }
      })
      const { year, month, day } = parsedDate
      return new BikramSambat(year, month, day)
    }
  }
  return new BikramSambat()
}
