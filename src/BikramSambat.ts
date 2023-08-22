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
import {
  // NepaliDaysData,
  // NewYearMappingData,
  NepaliMonthsData,
  DaysInMonthsMappingData
} from './data'
import { Month } from 'data/nepali-months'

export default class BikramSambat {
  // private readonly nepaliDays = NepaliDaysData
  // private readonly newYearMap = NewYearMappingData
  private static readonly nepaliMonths = NepaliMonthsData
  private static readonly daysInMonthMap = DaysInMonthsMappingData
  private static readonly MONTHS_IN_A_YEAR = 12
  private static readonly DAYS_IN_A_LEAP_YEAR = 366
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

  /**
   * Returns the year of the Bikram Sambat date.
   * @returns {number} year
   */
  public getYear(): number {
    return this.year ?? NaN
  }

  /**
   * Returns the month of the Bikram Sambat date.
   * @returns {number} month
   */
  public getMonth(): number {
    return this.month ?? NaN
  }

  /**
   * Returns the day of the Bikram Sambat date.
   * @returns {number} day
   */
  public getDay(): number {
    return this.day ?? NaN
  }

  /**
   * Formats a BikramSambat date into the specified format.
   *
   * @param {DateFormat} dateFormat - The desired format for formatting the date.
   * @returns {string} - The formatted date string.
   * @example <caption>DateFormat a BikramSambat date into `YYYY-MM-DD` format.</caption>
   * const date = new BikramSambat('2077-01-01')
   * const formattedDate = format(date, 'YYYY-MM-DD')
   * console.log(formattedDate) // 2077-01-01
   */
  public format(formatStr: DateFormat): string {
    return format(this, formatStr)
  }

  /**
   *
   * @returns {string} - The formatted date string.
   */
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

  /**
   *
   * @returns {number} - The previous year.
   */
  public getPreviousYear(): number {
    return this.year ? this.year - 1 : NaN
  }

  /**
   *
   * @returns {number} - The next year.
   */
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
  /**
   * Adds the given number of years to the BikramSambat instance.
   * @param years - The number of years to add.
   * @returns - The BikramSambat instance.
   */
  public addYears(years: number): BikramSambat {
    if (this.year === undefined) {
      return this
    }
    this.year += years
    return this
  }

  /**
   * Adds the given number of months to the BikramSambat instance.
   * @param months - The number of months to add.
   * @returns `BikramSambat`
   */
  public addMonths(months: number): BikramSambat {
    if (this.month === undefined || this.year === undefined) {
      return this
    }
    const totalMonths = this.month + months
    const adjustYear = (
      remainingMonths: number,
      yearsToAdd: number
    ): BikramSambat => {
      const monthsInYear = BikramSambat.MONTHS_IN_A_YEAR
      if (remainingMonths > monthsInYear) {
        return adjustYear(remainingMonths - monthsInYear, yearsToAdd + 1)
      } else if (remainingMonths <= 0) {
        return adjustYear(remainingMonths + monthsInYear, yearsToAdd - 1)
      } else {
        this.month = remainingMonths
        this.addYears(yearsToAdd)
        /* If the day is greater than the number of days in the month added 
         to then the day is adjusted to the last day of the month for
         the given year and month.
         2075 Ashar has 32 days , and Shrawan has 31 days
         for example: 2075-03-32 + 1 month = 2075-04-31
        */
        const daysInCurrentMonth = this.getDaysInMonth()
        if (this.day && this.day > daysInCurrentMonth) {
          this.day = daysInCurrentMonth
        }
        return this
      }
    }
    return adjustYear(totalMonths, 0)
  }

  /**
   * Adds the given number of days to the BikramSambat instance.
   * @param days - The number of days to add.
   * @returns `BikramSambat`
   */
  public addDays(days: number): BikramSambat {
    if (this.day === undefined || this.month === undefined) {
      return this
    }
    const totalDays = this.day + days
    const adjustMonth = (
      remainingDays: number,
      monthsToAdd: number
    ): BikramSambat => {
      const daysInMonth = this.getDaysInMonth()
      if (remainingDays > daysInMonth) {
        return adjustMonth(remainingDays - daysInMonth, monthsToAdd + 1)
      } else if (remainingDays <= 0) {
        return adjustMonth(daysInMonth + remainingDays, monthsToAdd - 1)
      } else {
        this.day = remainingDays
        this.addMonths(monthsToAdd)
        return this
      }
    }
    return adjustMonth(totalDays, 0)
  }

  /**
   *
   * @returns {number} - The number of days in the month.
   */
  public getDaysInMonth(): number {
    if (this.month === undefined || this.year === undefined) {
      return NaN
    }
    return BikramSambat.daysInMonthMap[this.year][this.month - 1]
  }

  /**
   *
   * @returns {boolean} Whether the year is a leap year or not.
   */
  public isLeapYear(): boolean {
    if (this.year === undefined) {
      return false
    }
    const daysInCurrentYear = BikramSambat.daysInMonthMap[this.year].reduce(
      (acc, days) => acc + days,
      0
    )
    return daysInCurrentYear === BikramSambat.DAYS_IN_A_LEAP_YEAR
  }

  public getDayOfWeek(): string {
    if (this.year === undefined || this.month === undefined) {
      return InvalidDate
    }
    // has dep on .toGregorian()
    return ''
  }

  public getPreviousMonth(): Month | null {
    if (!this.month) {
      return null
    }
    const month = this.month === 1 ? 12 : this.month - 1
    return BikramSambat.nepaliMonths[month - 1]
  }

  public getNextMonth(): Month | null {
    if (!this.month) {
      return null
    }
    const month = (this.month + 1) % 12
    return BikramSambat.nepaliMonths[month - 1]
  }
}
