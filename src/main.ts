import NepaliDays from "data/nepali-days";
import NepaliMonths from "data/nepali-months";
import NewYearMapping from "data/new-year-mapping";
import DaysInMonthMapping from "data/days-in-month-mapping";

export class BikramSambat {
  private static readonly nepaliDays = NepaliDays;
  private static readonly nepaliMonths = NepaliMonths;
  private static readonly newYearMapping = NewYearMapping;
  private static readonly daysInMonthMapping = DaysInMonthMapping;

  private year: number;
  private month: number;
  private day: number;

  constructor(year: number | undefined, month: number | undefined, day: number | undefined) {
    this.year = year || 0;
    this.month = month || 0;
    this.day = day || 0;
  }
}