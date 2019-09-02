import Item from './Item'
import GildedRose from './GildedRose'

export default class TextTestFixture {
  static generate(args = []) {
    let result = 'OMGHAI!\n'

    const items = [
      Item.createNormalItem('+5 Dexterity Vest', 10, 20), //
      Item.createAgedBrie(2, 0), //
      Item.createNormalItem('Elixir of the Mongoose', 5, 7), //
      Item.createSulfuras(0, 80), //
      Item.createSulfuras(-1, 80),
      Item.createBackstagePass(15, 20),
      Item.createBackstagePass(10, 49),
      Item.createBackstagePass(5, 49),
      Item.createBackstagePass(1, 20),
      // this conjured item does not work properly yet
      Item.createNormalItem('Conjured Mana Cake', 3, 6),
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
      app.passesOneDay()
    }

    return result
  }
}
