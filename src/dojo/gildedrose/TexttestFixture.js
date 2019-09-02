import Item from './Item'
import GildedRose from './GildedRose'

export default class TexttestFixture {
  static generate(args = []) {
    let result = 'OMGHAI!\n'

    const items = [
      new Item('+5 Dexterity Vest', 10, 20), //
      new Item('Aged Brie', 2, 0), //
      new Item('Elixir of the Mongoose', 5, 7), //
      new Item('Sulfuras, Hand of Ragnaros', 0, 80), //
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 1, 20),
      // this conjured item does not work properly yet
      new Item('Conjured Mana Cake', 3, 6),
    ]

    const app = new GildedRose(items)

    let days = 3
    if (args.length > 0) {
      days = parseInt(args[0]) + 1
    }

    for (let i = 0; i < days; i++) {
      result += ('-------- day ' + i + ' --------\n')
      result += ('name, sellIn, quality\n')
      for (let item of items) {
        result += item
      }
      result += '\n'
      app.updateQuality()
    }

    return result
  }
}
