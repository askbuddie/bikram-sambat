import { NewYearMappingData } from 'data'

interface DateInfo {
  bsYear: number
  newYearDate: Date
}

export const getNewYearDateInfo = (date: Date): DateInfo => {
  const newYearDate = Object.values(NewYearMappingData).filter(
    (newYearDate, currentIndex) => {
      const currDate = new Date(newYearDate)
      const nextDate = new Date(
        Object.values(NewYearMappingData)[currentIndex + 1]
      )
      if (currDate <= date && date < nextDate) {
        return true
      }
      return false
    }
  )
  const bsYear = Object.keys(NewYearMappingData).find(
    (key) => NewYearMappingData[key] === newYearDate[0]
  )
  return {
    bsYear: Number(bsYear),
    newYearDate: new Date(newYearDate[0])
  }
}
