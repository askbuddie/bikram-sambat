/**
 *
 * @param inputDate Date
 * @param daysToAdd number
 * @returns Date
 */
export function addDaysToGregorianDate(inputDate: Date, daysToAdd: number): Date {
  const newDate = new Date(inputDate)
  newDate.setDate(newDate.getDate() + daysToAdd)
  return newDate
}
