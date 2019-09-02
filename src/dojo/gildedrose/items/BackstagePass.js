import Item from '../Item'

export default class BackstagePass extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)
  }
  isBackstagePass() {
    return true
  }
}
