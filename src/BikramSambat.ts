import { format } from 'format'
import { isDayValid, parse } from 'parser'
import { DateFormat, InvalidDate, NewYearMappingData } from 'data'
import { getDaysFromBsNewYear } from 'utils/getDaysFromBsNewYear'
import { addDaysToGregorianDate } from 'utils/addDaysToGregorianDate'
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

  toString(): string {
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

  public toGregorian(): Date {
    if (!this.year || !this.month || !this.day) {
      return new Date()
    }
    const daysFromNewYear = getDaysFromBsNewYear(
      this.year,
      this.month,
      this.day
    )
    const newYearDayAD = NewYearMappingData[this.year]
    const gregorianDate = addDaysToGregorianDate(
      new Date(newYearDayAD),
      daysFromNewYear - 1
    )
    return gregorianDate
  }

  public static toGregorian(date: BikramSambat | string | undefined): Date {
    const bsDate = new BikramSambat(date)
    return bsDate.toGregorian()
  }

  public static toBikramSambat(date: Date | string | undefined): BikramSambat {
    if (!date) {
      return new BikramSambat()
    }
    const gregorianDate = new Date(date)
    const gregorianDateObj = {
      year: gregorianDate.getFullYear(),
      month: gregorianDate.getMonth() + 1,
      day: gregorianDate.getDate()
    }
    const newYearDayAD1 = gregorianDateObj.year + 57

    const newYearDayAD2 = NewYearMappingData[gregorianDateObj.year + 58]

    // check which new year is closer to the given date
    const daysFromNewYear1 = Math.abs(
      (new Date(newYearDayAD1).getTime() - gregorianDate.getTime()) / 86400000
    )
    const daysFromNewYear2 = Math.abs(
      (new Date(newYearDayAD2).getTime() - gregorianDate.getTime()) / 86400000
    )
    const newYearDayAD =
      daysFromNewYear1 < daysFromNewYear2 ? newYearDayAD1 : newYearDayAD2
    const daysFromNewYear =
      daysFromNewYear1 < daysFromNewYear2 ? daysFromNewYear1 : daysFromNewYear2
    console.log('daysFromNewYear', daysFromNewYear, newYearDayAD)
    return new BikramSambat()
  }
}
