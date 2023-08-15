import { NepaliMonthsData, DateFormats } from './data'
import { generateDateFormatOrder, isDayValid } from 'utils'

const MonthNames = NepaliMonthsData.map((month) => month.en)

type ParseResult = {
  year?: number
  month?: number
  day?: number
}

/**
 * Parses a date string using predefined date formats.
 *
 * @param {string} dateString - The date string to be parsed.
 * @returns {(ParseResult | string)} - The parsed date components or "invalid date" if parsing fails.
 * @example parse('2077-01-01') // { year: 2077, month: 1, day: 1 }
 */
export const parse = (dateString: string): ParseResult | string => {
  for (const dateFormat of DateFormats) {
    const match = dateString.match(dateFormat.regex)
    if (match) {
      const parsedDate: { year?: number; month?: number; day?: number } = {}
      const order = generateDateFormatOrder(dateFormat.format)
      order.forEach((component, index) => {
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
      // checking if the date is valid
      if (!isDayValid(year, month, day)) {
        return 'invalid date'
      }

      return {
        ...(year ? { year } : {}),
        ...(month ? { month } : {}),
        ...(day ? { day } : {})
      }
    }
  }
  return 'invalid date'
}
