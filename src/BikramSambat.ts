
import { Month } from 'data/nepali-months'
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
