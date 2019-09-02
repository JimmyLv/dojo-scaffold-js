import Item from './Item'

describe('Item', () => {
  it('should increase backstage pass quality when it gets close to expiration', () => {
    const item = Item.createBackstagePass(11, 20)

    item.passOneDay()
    expect(item.quality).toBe(21)

    item.passOneDay()
    expect(item.quality).toBe(23)
  })
})
