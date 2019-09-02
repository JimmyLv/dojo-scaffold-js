import Item from '../Item'

export default class BackstagePass extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)
  }
  updateQualityAfterExpiration() {
    this.quality = 0
  }

  updateQuality() {
    this.increaseQuality()

    if (this.sellIn < 10) {
      this.increaseQuality()
    }

    if (this.sellIn < 5) {
      this.increaseQuality()
    }
  }

  increaseQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }
  }
}
