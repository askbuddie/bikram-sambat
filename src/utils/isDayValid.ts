import { DaysInMonthsMappingData } from 'data'

/**
 * Checks if a given day is valid for a given year and month.
 *
 * @param {number} year - The year.
 * @param {number} month - The month (1-12).
 * @param {number} day - The day.
 * @returns {boolean} `true` if the day is valid, otherwise `false`.
 */
export const isDayValid = (year?: number, month?: number, day?: number) => {
  if (month && (month < 0 || month > 12)) {
    return false
  }
  if (year && month && day && year < 2100 && year > 1975) {
    const daysInGivenMonth = DaysInMonthsMappingData[year][month - 1]
    if (day > daysInGivenMonth) {
      return false
    }
  }
  return true
}
