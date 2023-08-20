import BikramSambat from 'BikramSambat'
import { InvalidDate } from 'data'
describe('BikramSambat Class', () => {
  it('should create an instance of BikramSambat with empty constructor', () => {
    const bikramSambat = new BikramSambat()
    expect(bikramSambat).toBeInstanceOf(BikramSambat)
  })

  it('should return correct formatted date .format()', () => {
    const bikramSambat = new BikramSambat('2075-01-01')
    expect(bikramSambat.format('YYYY-MM-DD')).toBe('2075-01-01')
  })

  it('should return correct string .toString()', () => {
    const bikramSambat = new BikramSambat('2075-01-01')
    expect(bikramSambat.toString()).toBe('2075-01-01')
  })

  it('should return correct year .getYear()', () => {
    const bikramSambat = new BikramSambat('2075-01-01')
    expect(bikramSambat.getYear()).toBe(2075)
  })

  it('should return correct month .getMonth()', () => {
    const bikramSambat = new BikramSambat('2075-01-01')
    expect(bikramSambat.getMonth()).toBe(1)
  })

  it('should return correct day .getDay()', () => {
    const bikramSambat = new BikramSambat('2075-01-01')
    expect(bikramSambat.getDay()).toBe(1)
  })

  it('should return Invalid Date .toString()', () => {
    const bikramSambat = new BikramSambat('207501-01')
    expect(bikramSambat.toString()).toBe(InvalidDate)
  })

  it('should return Invalid Date DateFormat .getDay()', () => {
    const bikramSambat = new BikramSambat('207501-01')
    expect(bikramSambat.getDay()).toBe(NaN)
  })

  it('should return Invalid Date DateFormat .getMonth()', () => {
    const bikramSambat = new BikramSambat('207501-01')
    expect(bikramSambat.getMonth()).toBe(NaN)
  })
  it('should return Invalid Date DateFormat .getYear()', () => {
    const bikramSambat = new BikramSambat('207501-01')
    expect(bikramSambat.getYear()).toBe(NaN)
  })

  it('should return NaN for Invalid Day', () => {
    const bikramSambat = new BikramSambat('2075-01-32')
    expect(bikramSambat.getDay()).toBe(NaN)
  })

  it('should return previous year', () => {
    const bikramSambat = new BikramSambat('2075-01-01')
    expect(bikramSambat.getPreviousYear()).toBe(2074)
  })

  it('should return next year', () => {
    const bikramSambat = new BikramSambat('2075-01-01')
    expect(bikramSambat.getNextYear()).toBe(2076)
  })

  it('should return NaN for Invalid Date', () => {
    const bikramSambat = new BikramSambat('2075-01-32')
    expect(bikramSambat.getPreviousYear()).toBe(NaN)
    expect(bikramSambat.getNextYear()).toBe(NaN)
  })

  it('should properly add years', () => {
    const bikramSambat = new BikramSambat('2075-01-01')
    const bikramSambat2 = new BikramSambat('2075-01-01')
    expect(bikramSambat.addYears(5).toString()).toBe('2080-01-01')
    expect(bikramSambat2.addYears(-10).toString()).toBe('2065-01-01')
  })

  it('should return Invalid Date for Invalid Date', () => {
    const bikramSambat = new BikramSambat('2075-01-32')
    expect(bikramSambat.addYears(5).toString()).toBe(InvalidDate)
  })

  it('should properly add months', () => {
    const bikramSambat = new BikramSambat('2075-01-01')
    const bikramSambat2 = new BikramSambat('2075-01-01')
    const bikramSambat3 = new BikramSambat('2075-01-01')
    expect(bikramSambat.addMonths(5).toString()).toBe('2075-06-01')
    expect(bikramSambat2.addMonths(-10).toString()).toBe('2074-03-01')
    expect(bikramSambat3.addMonths(-1).toString()).toBe('2074-12-01')
  })

  it('should return Invalid Date for Invalid Date', () => {
    const bikramSambat = new BikramSambat('2075-01-32')
    expect(bikramSambat.addMonths(5).toString()).toBe(InvalidDate)
  })

  it('should properly add days', () => {
    const bikramSambat = new BikramSambat('2075-01-01')
    const bikramSambat2 = new BikramSambat('2075-01-01')
    expect(bikramSambat.addDays(5).toString()).toBe('2075-01-06')
    expect(bikramSambat2.addDays(-10).toString()).toBe('2074-12-22')
  })
})
