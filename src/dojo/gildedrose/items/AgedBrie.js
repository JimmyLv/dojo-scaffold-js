import Item from '../Item'

export default class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality)
  }
  isAgedBrie() {
    return true
  }
}
