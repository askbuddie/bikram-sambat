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

  it('should return NaN for Invalid Month', () => {
    const bikramSambat = new BikramSambat('2075-13-01')
    expect(bikramSambat.getMonth()).toBe(NaN)
  })

  it('should properly convert to Gregorian Date', () => {
    const sampleData = [
      ['2075-01-01', '2018-04-14'],
      ['2072-10-03', '2016-01-17'],
      ['2069-11-30', '2013-03-13'],
      ['2082-10-30', '2026-02-12'],
      ['2086-12-30', '2030-04-13'],
      ['2089-01-29', '2032-05-13']
    ]
    sampleData.forEach(([bsDate, adDate]) => {
      const bikramSambat = new BikramSambat(bsDate)
      expect(bikramSambat.toGregorian().toISOString().slice(0, 10)).toBe(adDate)
    })
  })
})
