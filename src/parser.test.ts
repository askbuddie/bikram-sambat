import { parse } from './parser'
describe('Date Parsing', () => {
  it('should parse YYYY format', () => {
    const result = parse('2080')
    expect(result).toEqual({ year: 2080 })
  })

  it('should parse YYYY-MM format', () => {
    const result = parse('2080-08')
    expect(result).toEqual({ year: 2080, month: 8 })
  })

  it('should parse YYYY/MM format', () => {
    const result = parse('2080/08')
    expect(result).toEqual({ year: 2080, month: 8 })
  })

  it('should parse YYYY MM format', () => {
    const result = parse('2080 08')
    expect(result).toEqual({ year: 2080, month: 8 })
  })

  it('should parse YYYY-MM-DD format', () => {
    const result = parse('2080-08-15')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })

  it('should parse YYYY/MM/DD format', () => {
    const result = parse('2080/08/15')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })

  it('should parse YYYY MM DD format', () => {
    const result = parse('2080 08 15')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })

  it('should parse DD MMMM YYYY format', () => {
    const result = parse('15 Mangsir 2080')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })

  it('should parse DD-MMMM-YYYY format', () => {
    const result = parse('15-Mangsir-2080')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })

  it('should parse DD/MMMM/YYYY format', () => {
    const result = parse('15/Mangsir/2080')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })

  it('should parse  MMMM DD, YYYY format', () => {
    const result = parse('Mangsir 15, 2080')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })
  it('should parse  MMMM DD YYYY format', () => {
    const result = parse('Mangsir 15 2080')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })

  it('should parse DD-MM-YYYY format', () => {
    const result = parse('15-08-2080')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })

  it('should parse DD/MM/YYYY format', () => {
    const result = parse('15/08/2080')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })

  it('should parse DD MM YYYY format', () => {
    const result = parse('15 08 2080')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })
  it('should parse MM-DD format', () => {
    const result = parse('08-15')
    expect(result).toEqual({ month: 8, day: 15 })
  })
  it('should parse MM/DD format', () => {
    const result = parse('08/15')
    expect(result).toEqual({ month: 8, day: 15 })
  })

  it('should parse MM DD format', () => {
    const result = parse('08 15')
    expect(result).toEqual({ month: 8, day: 15 })
  })

  it('should parse YY-MM-DD format', () => {
    const result = parse('80-08-15')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })
  it('should parse YY/MM/DD format', () => {
    const result = parse('80/08/15')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })

  it('should parse YY MM DD format', () => {
    const result = parse('80 08 15')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })

  it('should parse YYY-MM-DD format', () => {
    const result = parse('080-08-15')
    expect(result).toEqual({ year: 2080, month: 8, day: 15 })
  })

  it('should parse YYY/MM/DD format', () => {
    const result = parse('079/08/15')
    expect(result).toEqual({ year: 2079, month: 8, day: 15 })
  })

  it('should parse YYY MM DD format', () => {
    const result = parse('079 08 15')
    expect(result).toEqual({ year: 2079, month: 8, day: 15 })
  })
  it('should handle mismatched separators (YYYY-MM/DD)', () => {
    const result = parse('2079-08/15')
    expect(result).toEqual({ year: 2079, month: 8, day: 15 })
  })

  it('should handle mismatched separators (YY-MM/DD)', () => {
    const result = parse('79-08/15')
    expect(result).toEqual({ year: 2079, month: 8, day: 15 })
  })

  it('should handle mismatched separators (DD-MM/YYYY)', () => {
    const result = parse('15-08/2079')
    expect(result).toEqual({ year: 2079, month: 8, day: 15 })
  })

  it('should handle Invalid Date format', () => {
    const result = parse('Invalid Date')
    expect(result).toEqual('Invalid Date')
  })

  it('should handle day out of range', () => {
    const result = parse('2079-02-32')
    expect(result).toEqual('Invalid Date')
  })

  it('should handle month out of range', () => {
    const result = parse('2079-15-15')
    expect(result).toEqual('Invalid Date')
  })

  it('should handle month out of range with month name', () => {
    const result = parse('2079-15-15')
    expect(result).toEqual('Invalid Date')
  })
})
