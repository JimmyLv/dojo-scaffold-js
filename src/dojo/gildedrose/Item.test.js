import Item from './Item'
import BackstagePass from './items/BackstagePass'

describe('Item', () => {
  it('should increase backstage pass quality when it gets close to expiration', () => {
    const item =  new BackstagePass(11, 20)

    item.passOneDay()
    expect(item.quality).toBe(21)

    item.passOneDay()
    expect(item.quality).toBe(23)
  })
})
