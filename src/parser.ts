import {
  DateFormats,
  DaysInMonthsMappingData,
  InvalidDate,
  NepaliMonthsNameEn,
  type ErrorInvalidDate
} from './data'
import { generateDateFormatOrder } from './utils/generateDateFormatOrder'

type ParseResult = {
  year?: number
  month?: number
  day?: number
}

/**
 * Parses a date string using predefined date formats.
 *
 * @param {string} dateString - The date string to be parsed.
 * @returns {(ParseResult | ErrorInvalidDate)} - The parsed date components or "Invalid Date" if parsing fails.
 * @example parse('2077-01-01') // { year: 2077, month: 1, day: 1 }
 */
export const parse = (dateString: string): ParseResult | ErrorInvalidDate => {
  for (const dateFormat of DateFormats) {
    const match = dateString.match(dateFormat.regex)
    if (match) {
      const parsedDate: ParseResult = {}
      const order = generateDateFormatOrder(dateFormat.format)
      order.forEach((component, index) => {
        if (
          component === 'month' &&
          NepaliMonthsNameEn.indexOf(match[index + 1]) >= 0
        ) {
          parsedDate[component] =
            NepaliMonthsNameEn.indexOf(match[index + 1]) + 1
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

      // If month or day is not provided, default to 1
      if (!parsedDate.month) {
        parsedDate.month = 1
      }

      if (!parsedDate.day) {
        parsedDate.day = 1
      }

      if (!isDayValid(parsedDate.year, parsedDate.month, parsedDate.day)) {
        return InvalidDate
      }
      return parsedDate
    }
  }
  return InvalidDate
}

/**
 * Checks if a given day is valid for a given year and month.
 *
 * @param {number} year - The year.
 * @param {number} month - The month (1-12).
 * @param {number} day - The day.
 * @returns {boolean} `true` if the day is valid, otherwise `false`.
 */
export const isDayValid = (year?: number, month?: number, day?: number) => {
  if (year === undefined || month === undefined || day === undefined) {
    return false
  }
  if (
    year > 2100 ||
    year < 1975 ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 32
  ) {
    return false
  }
  const daysInGivenMonth = DaysInMonthsMappingData[year][month - 1]
  if (day > daysInGivenMonth) {
    return false
  }
  return true
}
