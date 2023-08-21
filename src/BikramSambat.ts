import { format } from 'format'
import { isDayValid, parse } from 'parser'
import { DateFormat, InvalidDate } from 'data'
import { Month } from 'data/nepali-months'
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
        this.year = year
        this.month = month
        this.day = day
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

  public format(formatStr: DateFormat): string {
    return format(this, formatStr)
  }

  public toString(): string {
    if (
      this.year === undefined ||
      this.month === undefined ||
      this.day === undefined
    ) {
      return InvalidDate
    }
    if (!isDayValid(this.year, this.month, this.day)) {
      return InvalidDate
    }
    const month = `${this.month}`.padStart(2, '0')
    const day = `${this.day}`.padStart(2, '0')
    return `${this.year}-${month}-${day}`
  }

  public getPreviousYear(): number {
    return this.year ? this.year - 1 : NaN
  }

  public getNextYear(): number {
    return this.year ? this.year + 1 : NaN
  }
  
  public getPreviousMonth(): Month | null {
    if (!this.month) {
      return null
    }
    const month = this.month === 1 ? 12 : this.month - 1
    return NepaliMonthsData[month - 1]
  }
  
  public getNextMonth(): Month | null{
    if (!this.month) {
      return null
    }
    const month = (this.month + 1 ) % 12
    return NepaliMonthsData[month - 1]
  }
 
}
