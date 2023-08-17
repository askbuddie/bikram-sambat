import BikramSambat from 'BikramSambat'
import { NepaliMonthsNameEn, type DateFormat, InvalidDate } from 'data'
import { generateDateFormatOrder } from 'utils/generateDateFormatOrder'

/**
 * Formats a BikramSambat date into the specified format.
 *
 * @param {BikramSambat} date - The BikramSambat date to be formatted.
 * @param {DateFormat} dateFormat - The desired format for formatting the date.
 * @returns {string} - The formatted date string.
 * @example <caption>DateFormat a BikramSambat date into `YYYY-MM-DD` format.</caption>
 * const date = new BikramSambat('2077-01-01')
 * const formattedDate = format(date, 'YYYY-MM-DD')
 * console.log(formattedDate) // 2077-01-01
 */
export const format = (date: BikramSambat, dateFormat: DateFormat): string => {
  if (date.toString() === InvalidDate) {
    return InvalidDate
  }
  let formattedDate = dateFormat as string
  const year = date.getYear()
  const month = date.getMonth()
  const day = date.getDay()
  const order = generateDateFormatOrder(dateFormat)
  order.forEach((component) => {
    if (component === 'year' && year) {
      formattedDate = formattedDate.replace('YYYY', year.toString())
      formattedDate = formattedDate.replace('YYY', year.toString().slice(-3))
      formattedDate = formattedDate.replace('YY', year.toString().slice(-2))
    } else if (component === 'month' && month) {
      if (NepaliMonthsNameEn[month - 1]) {
        formattedDate = formattedDate.replace(
          'MMMM',
          NepaliMonthsNameEn[month - 1]
        )
        formattedDate = formattedDate.replace(
          'MM',
          month.toString().padStart(2, '0')
        )
      }
    } else if (component === 'day' && day) {
      formattedDate = formattedDate.replace(
        'DD',
        day.toString().padStart(2, '0')
      )
    }
  })
  return formattedDate
}
