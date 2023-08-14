import BikramSambat from 'BikramSambat'
import { NepaliMonthsData, DateFormats } from 'data'

const MonthNames = NepaliMonthsData.map((month) => month.en)

const formatDate = (date: BikramSambat, format: string): string => {
  let formattedDate = format
  const year = date.getYear()
  const month = date.getMonth()
  const day = date.getDay()
  DateFormats.forEach((dateFormat) => {
    if (dateFormat.format.includes(format)) {
      dateFormat.order.forEach((component) => {
        if (component === 'year' && year) {
          formattedDate = formattedDate.replace('YYYY', year.toString())
          formattedDate = formattedDate.replace(
            'YYY',
            year.toString().slice(-3)
          )
          formattedDate = formattedDate.replace('YY', year.toString().slice(-2))
        } else if (component === 'month' && month) {
          if (MonthNames[month - 1]) {
            formattedDate = formattedDate.replace('MMMM', MonthNames[month - 1])
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
    }
  })

  return formattedDate
}
