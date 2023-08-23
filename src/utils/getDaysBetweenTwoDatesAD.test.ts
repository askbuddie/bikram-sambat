import { getDaysBetweenTwoDatesAD } from './getDaysBetweenTwoDatesAD'

describe('getDaysBetweenTwoDatesAD', () => {
  it('calculates the correct number of days for positive difference', () => {
    const startDate = new Date('2023-08-15')
    const endDate = new Date('2023-09-01')
    expect(getDaysBetweenTwoDatesAD(startDate, endDate)).toBe(17)
  })

  it('calculates the correct number of days for negative difference', () => {
    const startDate = new Date('2023-09-01')
    const endDate = new Date('2023-08-15')
    expect(getDaysBetweenTwoDatesAD(startDate, endDate)).toBe(17)
  })

  it('calculates the correct number of days for same dates', () => {
    const startDate = new Date('2023-08-15')
    const endDate = new Date('2023-08-15')
    expect(getDaysBetweenTwoDatesAD(startDate, endDate)).toBe(0)
  })
})
