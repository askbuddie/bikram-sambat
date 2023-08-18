// @ts-nocheck : TODO: Remove this line
import {
  NepaliDaysData,
  NepaliMonthsData,
  NewYearMappingData,
  DaysInMonthsMappingData
} from './data'

export default class BikramSambat {
  private readonly nepaliDays = NepaliDaysData
  private readonly nepaliMonths = NepaliMonthsData
  private readonly newYearMap = NewYearMappingData
  private readonly daysInMonthMap = DaysInMonthsMappingData

  private year: number
  private month: number
  private day: number

  constructor(year: number = 0, month: number = 0, day: number = 0) {
    // TODO: this needs to be changed.
    this.year = year
    this.month = month
    this.day = day
  }

  public getPreviousYear(): number {
    return this.year? - 1 :NaN
  }
   
  public getNextYear(): number {
    return this.year? + 1:NaN
  }
  
}
