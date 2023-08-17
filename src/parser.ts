import { NepaliMonthsData, DateFormats, DaysInMonthsMappingData } from './data'
import { generateDateFormatOrder } from 'utils'

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
 * @returns {(ParseResult | string)} - The parsed date components or "Invalid Date" if parsing fails.
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
        return 'Invalid Date'
      }

      return {
        ...(year ? { year } : {}),
        ...(month ? { month } : {}),
        ...(day ? { day } : {})
      }
    }
  }
  return 'Invalid Date'
}

/**
 * Checks if a given day is valid for a given year and month.
 *
 * @param {number} year - The year.
 * @param {number} month - The month (1-12).
 * @param {number} day - The day.
 * @returns {boolean} `true` if the day is valid, otherwise `false`.
 */
export const isDayValid = (
  year: number | undefined,
  month: number | undefined,
  day: number | undefined
) => {
  if (month != undefined && (month < 1 || month > 12)) {
    return false
  }
  if (year != undefined && (year > 2100 || year < 1975)) {
    return false
  }

  if (day != undefined && (day < 1 || day > 32)) {
    return false
  }

  if (year != undefined && month != undefined && day != undefined) {
    const daysInGivenMonth = DaysInMonthsMappingData[year][month - 1]
    if (day > daysInGivenMonth) {
      return false
    }
  }
  return true
}
