

import { Day } from 'data/nepali-days';
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

  public getPreviousDay() : Day | null {
    if(!this.day){
      return null
    }
    const day = this.day === 1 ? 7 : (this.day - 1)
    return NepaliDaysData[day - 1]
  }

  public getNextDay(): Day | null {
    if(!this.day){
      return null
    }
    const day = (this.day + 1) % 7
    return NepaliDaysData[day - 1]
  }
 
}
