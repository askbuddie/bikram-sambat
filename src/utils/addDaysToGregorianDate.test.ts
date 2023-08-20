import { addDaysToGregorianDate } from './addDaysToGregorianDate'

describe('addDaysToGregorianDate', () => {
  it('should correctly add positive days', () => {
    const inputDate = new Date('2023-08-20')
    const daysToAdd = 5
    const result = addDaysToGregorianDate(inputDate, daysToAdd)

    const expectedDate = new Date('2023-08-25')
    expect(result).toEqual(expectedDate)
  })

  it('should correctly add negative days', () => {
    const inputDate = new Date('2023-08-20')
    const daysToAdd = -5
    const result = addDaysToGregorianDate(inputDate, daysToAdd)

    const expectedDate = new Date('2023-08-15')
    expect(result).toEqual(expectedDate)
  })

  it('should handle adding 0 days', () => {
    const inputDate = new Date('2023-08-20')
    const daysToAdd = 0
    const result = addDaysToGregorianDate(inputDate, daysToAdd)

    expect(result).toEqual(inputDate)
  })

  it('should handle invalid input date', () => {
    const invalidInputDate = new Date('invalid date')
    const daysToAdd = 5
    const result = addDaysToGregorianDate(invalidInputDate, daysToAdd)

    expect(result.toString()).toEqual('Invalid Date')
  })

  it('should handle NaN days to add', () => {
    const inputDate = new Date('2023-08-20')
    const daysToAdd = NaN
    const result = addDaysToGregorianDate(inputDate, daysToAdd)

    expect(result.toString()).toEqual('Invalid Date')
  })

  it('should handle month overflow', () => {
    const inputDate = new Date('2023-08-20')
    const daysToAdd = 12
    const result = addDaysToGregorianDate(inputDate, daysToAdd)

    const expectedDate = new Date('2023-09-01')
    expect(result).toEqual(expectedDate)
  })

  it('should handle month underflow', () => {
    const inputDate = new Date('2023-08-20')
    const daysToAdd = -20
    const result = addDaysToGregorianDate(inputDate, daysToAdd)

    const expectedDate = new Date('2023-07-31')
    expect(result).toEqual(expectedDate)
  })
})
