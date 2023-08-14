import BikramSambat from 'BikramSambat'
import { NepaliMonthsData, DateFormats } from '../../data'

const MonthNames = NepaliMonthsData.map((month) => month.en)

const parse=(dateString: string): BikramSambat => {
  // Loop through each date format regex pattern
  for (const dateFormat of DateFormats) {
    // Attempt to match the input dateString with the current format
    const match = dateString.match(dateFormat.regex)
    if (match) {
      // If a match is found, initialize an object to store parsed date components
      const parsedDate: { year?: number; month?: number; day?: number } = {}
      // Iterate through the order array to assign parsed components to corresponding keys
      dateFormat.order.forEach((component, index) => {
        if (
          component === 'month' &&
          MonthNames.indexOf(match[index + 1]) >= 0
        ) {
          parsedDate[component] = MonthNames.indexOf(match[index + 1]) + 1
        } else {
          //for year YY or YYY we need to convert it to YYYY
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
      return  new BikramSambat(year, month, day)
    }
  }
  return new BikramSambat()
}
