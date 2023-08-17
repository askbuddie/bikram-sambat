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
  it('should format date with mismatched separators (MMMM DD YYYY)', () => {
    const date = new BikramSambat('2079-8-15')
    const result = format(date, 'MMMM DD YYYY')
    expect(result).toEqual('Mangsir 15 2079')
  })

  it('should handle Invalid Date', () => {
    const date = new BikramSambat('2079815')
    const date2 = new BikramSambat('798-15')
    const date3 = new BikramSambat('Invalid Date')
    const result = format(date, 'YYYY MM DD')
    const result2 = format(date2, 'YYYY MM DD')
    const result3 = format(date3, 'YYYY MM DD')
    expect(result).toEqual('Invalid Date')
    expect(result2).toEqual('Invalid Date')
    expect(result3).toEqual('Invalid Date')
  })
})
