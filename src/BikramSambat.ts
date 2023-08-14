import { parse } from './parser'
import {
  NepaliDaysData,
  NepaliMonthsData,
  NewYearMappingData,
  DaysInMonthsMappingData
} from './data'

export default class BikramSambat {
  private static readonly nepaliDaysData = NepaliDaysData
  private static readonly nepaliMonthsData = NepaliMonthsData
  private static readonly newYearMappingData = NewYearMappingData
  private static readonly daysInMonthMappingData = DaysInMonthsMappingData

  private year: number
  private month: number
  private day: number

  constructor(dateStr?: string | BikramSambat) {
    /* TODO: this needs to be changed to default to current date in 
        case of no data provided, first day of year if only year provided 
        and first day of given month if month and year provided.
        Prerequisite: AD to BS conversion method
     */
    if (typeof dateStr === 'string') {
      const { year, month, day } = parse(dateStr)
      this.year = year || 0
      this.month = month || 0
      this.day = day || 0
    } else if (dateStr instanceof BikramSambat) {
      this.year = dateStr.getYear()
      this.month = dateStr.getMonth()
      this.day = dateStr.getDay()
    } else {
      this.year = 0
      this.month = 0
      this.day = 0
    }
  }

  public getYear(): number {
    return this.year
  }

  public getMonth(): number {
    return this.month
  }

  public getDay(): number {
    return this.day
  }
}
