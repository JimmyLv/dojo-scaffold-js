import Item from './Item'
import GildedRose from './GildedRose'
import BackstagePass from './items/BackstagePass'
import AgedBrie from './items/AgedBrie'
import Sulfuras from './items/Sulfuras'

export default class TextTestFixture {
  static generate(args = []) {
    let result = 'OMGHAI!\n'

    const items = [
      new Item('+5 Dexterity Vest', 10, 20),
      new AgedBrie(2, 0), //
      new Item('Elixir of the Mongoose', 5, 7),
      new Sulfuras(0, 80), //
      new Sulfuras(-1, 80),
      new BackstagePass(15, 20),
      new BackstagePass(10, 49),
      new BackstagePass(5, 49),
      new BackstagePass(1, 20),
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
      app.passesOneDay()
    }

    return result
  }
}
