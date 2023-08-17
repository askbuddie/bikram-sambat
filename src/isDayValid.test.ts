import { isDayValid } from 'parser'

describe('isDayValid (Bikram Sambat Calendar)', () => {
  it('should return true for valid day', () => {
    expect(isDayValid(2075, 8, 17)).toBe(true)
  })

  it('should return false for month out of range', () => {
    expect(isDayValid(2075, 13, 17)).toBe(false)
  })

  it('should return false for year out of range (before 1975)', () => {
    expect(isDayValid(1970, 8, 17)).toBe(false)
  })

  it('should return false for year out of range (after 2100)', () => {
    expect(isDayValid(2105, 8, 17)).toBe(false)
  })

  it('should return false for day out of range', () => {
    expect(isDayValid(2075, 8, 35)).toBe(false)
  })

  it('should return false for day exceeding days in given month', () => {
    expect(isDayValid(2075, 2, 32)).toBe(false)
  })
})
