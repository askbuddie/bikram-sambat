import { generateDateFormatOrder } from 'utils'
import { format } from './format'
import BikramSambat from './BikramSambat'
describe('Date Formatting', () => {
  it('should format date to YYYY', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYYY')
    expect(result).toEqual('2079')
  })

  it('should format date to YYYY-MM', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYYY-MM')
    expect(result).toEqual('2079-08')
  })

  it('should format date to YYYY/MM', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYYY/MM')
    expect(result).toEqual('2079/08')
  })

  it('should format date to YYYY MM', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYYY MM')
    expect(result).toEqual('2079 08')
  })

  it('should format date to YYYY-MM-DD', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYYY-MM-DD')
    expect(result).toEqual('2079-08-15')
  })

  it('should format date to YYYY/MM/DD', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYYY/MM/DD')
    expect(result).toEqual('2079/08/15')
  })

  it('should format date to YYYY MM DD', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYYY MM DD')
    expect(result).toEqual('2079 08 15')
  })

  it('should format date to DD MMMM YYYY', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'DD MMMM YYYY')
    expect(result).toEqual('15 Mangsir 2079')
  })

  it('should format date to DD-MMMM-YYYY', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'DD-MMMM-YYYY')
    expect(result).toEqual('15-Mangsir-2079')
  })

  it('should format date to DD/MMMM/YYYY', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'DD/MMMM/YYYY')
    expect(result).toEqual('15/Mangsir/2079')
  })

  it('should format date to DD-MM-YYYY', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'DD-MM-YYYY')
    expect(result).toEqual('15-08-2079')
  })

  it('should format date to DD/MM/YYYY', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'DD/MM/YYYY')
    expect(result).toEqual('15/08/2079')
  })

  it('should format date to DD MM YYYY', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'DD MM YYYY')
    expect(result).toEqual('15 08 2079')
  })

  it('should format date to MM-DD', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'MM-DD')
    expect(result).toEqual('08-15')
  })

  it('should format date to MM/DD', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'MM/DD')
    expect(result).toEqual('08/15')
  })

  it('should format date to MM DD', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'MM DD')
    expect(result).toEqual('08 15')
  })

  it('should format date to YY-MM-DD', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YY-MM-DD')
    expect(result).toEqual('79-08-15')
  })

  it('should format date to YY/MM/DD', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YY/MM/DD')
    expect(result).toEqual('79/08/15')
  })

  it('should format date to YY MM DD', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YY MM DD')
    expect(result).toEqual('79 08 15')
  })

  it('should format date to YYY-MM-DD', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYY-MM-DD')
    expect(result).toEqual('079-08-15')
  })

  it('should format date to YYY/MM/DD', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYY/MM/DD')
    expect(result).toEqual('079/08/15')
  })

  it('should format date to YYY MM DD', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYY MM DD')
    expect(result).toEqual('079 08 15')
  })
  it('should format date with mismatched separators (YYYY-MM/DD)', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYYY-MM/DD')
    expect(result).toEqual('2079-08/15')
  })

  it('should format date with mismatched separators (YYYY/MM-DD)', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYYY/MM-DD')
    expect(result).toEqual('2079/08-15')
  })

  it('should format date with mismatched separators (YYYY MM/DD)', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYYY MM/DD')
    expect(result).toEqual('2079 08/15')
  })

  it('should format date with mismatched separators (YYYY/MM DD)', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'YYYY/MM DD')
    expect(result).toEqual('2079/08 15')
  })
})

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
