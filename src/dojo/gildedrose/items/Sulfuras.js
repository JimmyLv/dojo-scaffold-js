import Item from '../Item'

export default class Sulfuras extends Item {
  constructor(sellIn, quality) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality)
  }

  isSulfuras() {
    return true
  }
}
