import { NepaliDaysData, NepaliMonthsData, NewYearMappingData, DaysInMonthsMappingData } from "./data"

export default class BikramSambat {
  private static readonly nepaliDaysData = NepaliDaysData;
  private static readonly nepaliMonthsData = NepaliMonthsData;
  private static readonly newYearMappingData = NewYearMappingData;
  private static readonly daysInMonthMappingData = DaysInMonthsMappingData;

  private year: number;
  private month: number;
  private day: number;

  constructor(year: number | undefined, month: number | undefined, day: number | undefined) {
    // TODO: this needs to be changed.
    this.year = year || 0;
    this.month = month || 0;
    this.day = day || 0;
  }
}