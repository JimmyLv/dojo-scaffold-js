import Item from './Item'
import GildedRose from './GildedRose'

describe('GildedRose', () => {
  it('should update quality', () => {
    // given
    const items = [new Item('foo', 1, 5)]
    const app = new GildedRose(items)

    // when
    app.updateQuality()

    // then
    expect(app.items[0].name).toBe('foo')
    expect(app.items[0].quality).toBe(4)
    expect(app.items[0].sellIn).toBe(0)
  })
})
