import { DaysInMonthsMappingData } from 'data'
import { getDaysFromBsNewYear } from './getDaysFromBsNewYear'

describe('getDaysFromBsNewYear', () => {
  it('should calculate days correctly for each year', () => {
    for (const year in DaysInMonthsMappingData) {
      const daysInYear = DaysInMonthsMappingData[year] as number[]
      for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= daysInYear[month - 1]; day++) {
          const calculatedDays = getDaysFromBsNewYear(Number(year), month, day)
          const expectedDays =
            daysInYear
              .slice(0, month - 1)
              .reduce((acc, curr) => acc + curr, 0) + day
          expect(calculatedDays).toEqual(expectedDays)
        }
      }
    }
  })
})
