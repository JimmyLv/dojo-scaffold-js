import Item from '../Item'

export default class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality)
  }
  updateQualityAfterExpiration() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }
  }

  updateQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }
  }
}
