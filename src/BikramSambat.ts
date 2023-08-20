import { format } from 'format'
import { isDayValid, parse } from 'parser'
import { DateFormat, InvalidDate } from 'data'
import {
  // NepaliDaysData,
  // NepaliMonthsData,
  // NewYearMappingData,
  DaysInMonthsMappingData
} from './data'

export default class BikramSambat {
  // private readonly nepaliDays = NepaliDaysData
  // private readonly nepaliMonths = NepaliMonthsData
  // private readonly newYearMap = NewYearMappingData
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

  public addYears(years: number): BikramSambat {
    if (this.year === undefined) {
      return this
    }
    this.year += years
    return this
  }

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
        return this
      }
    }
    return adjustYear(totalMonths, 0)
  }

  public getDaysInMonth(): number {
    if (this.month === undefined || this.year === undefined) {
      return NaN
    }
    return BikramSambat.daysInMonthMap[this.year][this.month - 1]
  }

  public isLeapYear(): boolean {
    if (this.year === undefined) {
      return false
    }
    const daysInYear = BikramSambat.daysInMonthMap[this.year].reduce(
      (acc, days) => acc + days,
      0
    )
    return daysInYear === BikramSambat.DAYS_IN_A_LEAP_YEAR
  }

  public getDayOfWeek(): string {
    if (this.year === undefined || this.month === undefined) {
      return InvalidDate
    }
    // has dep on .toGregorian()
    return ''
  }

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
}
