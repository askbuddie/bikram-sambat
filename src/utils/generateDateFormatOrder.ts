import { DateFormat } from 'data'

type Order = 'year' | 'month' | 'day'

/**
 * Generates an array of the order of date components in the given format string.
 *
 * @param {DateFormat} formatString The format string to parse.
 * @returns {Order[]} An array of the order of date components.
 * @example generateDateFormatOrder('YYYY-MM-DD') // ['year', 'month', 'day']
 */
export const generateDateFormatOrder = (formatString: DateFormat): Order[] => {
  const orderArray: Order[] = []
  const regex = /YYYY|YYY|YY|MMMM|MM|DD/g
  let match
  while ((match = regex.exec(formatString)) !== null) {
    switch (match[0]) {
      case 'YYYY':
      case 'YYY':
      case 'YY':
        orderArray.push('year')
        break
      case 'MMMM':
      case 'MM':
        orderArray.push('month')
        break
      case 'DD':
        orderArray.push('day')
        break
      default:
        break
    }
  }
  return orderArray
}
