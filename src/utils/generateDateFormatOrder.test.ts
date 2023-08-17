import { generateDateFormatOrder } from './generateDateFormatOrder'

describe('generate order array', () => {
  it('should generate order array', () => {
    const formatString = 'MM/DD'
    const orderArray = generateDateFormatOrder(formatString)
    expect(orderArray).toEqual(['month', 'day'])
  })
  it('should generate order array', () => {
    const formatString = 'YY-MM/DD'
    const orderArray = generateDateFormatOrder(formatString)
    expect(orderArray).toEqual(['year', 'month', 'day'])
  })
  it('should generate order array', () => {
    const formatString = 'YYY-MM/DD'
    const orderArray = generateDateFormatOrder(formatString)
    expect(orderArray).toEqual(['year', 'month', 'day'])
  })
  it('should generate order array', () => {
    const formatString = 'DD-MMMM-YYYY'
    const orderArray = generateDateFormatOrder(formatString)
    expect(orderArray).toEqual(['day', 'month', 'year'])
  })
})
