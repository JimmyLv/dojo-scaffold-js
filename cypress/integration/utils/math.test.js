import { roundNumber } from '../../../src/utils/math'

describe('roundNumber', () => {
  it('correctly rounds different numbers', () => {
    expect(roundNumber(0.1234, 2), '0.1234 to 2').toEqual(0.12)
    expect(roundNumber(0), '0').toEqual(0)
    expect(roundNumber(), 'empty string').toEqual('')
    expect(roundNumber(0.1234), '0.1234').toBeNaN()
    expect(roundNumber(0.1234, -1), '0.1234 to -1').toEqual(0)
  })
})
