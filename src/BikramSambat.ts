import { format } from 'format'
import { isDayValid, parse } from './parser'
import { Format } from 'data'
// import {
//   NepaliDaysData,
//   NepaliMonthsData,
//   NewYearMappingData,
//   DaysInMonthsMappingData
// } from './data'

export default class BikramSambat {
  // TODO: uncomment these once the data in use
  // private readonly nepaliDays = NepaliDaysData
  // private readonly nepaliMonths = NepaliMonthsData
  // private readonly newYearMap = NewYearMappingData
  // private readonly daysInMonthMap = DaysInMonthsMappingData

  private year: number | undefined
  private month: number | undefined
  private day: number | undefined

  constructor(dateStr?: string | BikramSambat) {
    /* TODO: this needs to be changed to default to current date in 
        case of no data provided, first day of year if only year provided 
        and first day of given month if month and year provided.
        Prerequisite: AD to BS conversion method
     */
    if (typeof dateStr === 'string') {
      const parsedDate = parse(dateStr)
      if (typeof parsedDate === 'string') {
        this.year = undefined
        this.month = undefined
        this.day = undefined
      } else {
        const { year, month, day } = parsedDate
        this.year = year ?? undefined
        this.month = month ?? undefined
        this.day = day ?? undefined
      }
    } else if (dateStr instanceof BikramSambat) {
      this.year = dateStr.getYear()
      this.month = dateStr.getMonth()
      this.day = dateStr.getDay()
    } else {
      this.year = undefined
      this.month = undefined
      this.day = undefined
    }
  }

  public getYear(): number {
    return this.year ?? NaN
  }

  public getMonth(): number {
    return this.month ?? NaN
  }

  public getDay(): number {
    return this.day ?? NaN
  }

  public format(formatStr: Format): string {
    return format(this, formatStr)
  }

  toString(): string {
    if (
      this.year === undefined ||
      this.month === undefined ||
      this.day === undefined
    ) {
      return 'Invalid Date'
    }
    if (!isDayValid(this.year, this.month, this.day)) {
      return 'Invalid Date'
    }
    // the month and day are padded with 0 if they are less than 10
    const month = this.month <= 9 ? '0' + this.month : this.month
    const day = this.day <= 9 ? '0' + this.day : this.day
    return `${this.year}-${month}-${day}`
  }
}
