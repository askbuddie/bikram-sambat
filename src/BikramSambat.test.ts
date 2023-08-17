import BikramSambat from 'BikramSambat'

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
    expect(bikramSambat.toString()).toBe('Invalid Date')
  })

  it('should return Invalid Date Format .getDay()', () => {
    const bikramSambat = new BikramSambat('207501-01')
    expect(bikramSambat.getDay()).toBe(NaN)
  })

  it('should return Invalid Date Format .getMonth()', () => {
    const bikramSambat = new BikramSambat('207501-01')
    expect(bikramSambat.getMonth()).toBe(NaN)
  })
  it('should return Invalid Date Format .getYear()', () => {
    const bikramSambat = new BikramSambat('207501-01')
    expect(bikramSambat.getYear()).toBe(NaN)
  })

  it('should return NaN for Invalid Day', () => {
    const bikramSambat = new BikramSambat('2075-01-32')
    expect(bikramSambat.getDay()).toBe(NaN)
  })
})
