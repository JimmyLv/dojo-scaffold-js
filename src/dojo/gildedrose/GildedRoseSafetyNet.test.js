import fs from 'fs'
import TextTestFixture from './TextTestFixture'

describe('GildedRoseSafetyNet', () => {
  it('should always generate output identical to baseline', () => {
    const baseline = fs.readFileSync(__dirname + '/baseline.txt', 'utf-8')
    expect(TextTestFixture.generate()).toBe(baseline)
  })
})
