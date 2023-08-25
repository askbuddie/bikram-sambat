import { DaysInMonthsMappingData } from 'data'

/**
 *
 * @param year - number
 * @param month - number
 * @param day - number
 * @returns days - number
 */

export const getDaysFromBsNewYear = (
  year: number,
  month: number,
  day: number
): number => {
  let days = 0
  const daysInMonthsData = DaysInMonthsMappingData[year]
  for (let i = 0; i < month - 1; i++) {
    days += daysInMonthsData[i]
  }
  days += day
  return days
}
