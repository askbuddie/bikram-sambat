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
})
