import Item from '../Item'

export default class BackstagePass extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)
  }
  isBackstagePass() {
    return true
  }
  updateQualityAfterExpiration() {
    this.quality = 0
  }
  updateQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1

      if (this.sellIn < 10 && this.quality < 50) {
        this.quality = this.quality + 1
      }

      if (this.sellIn < 5 && this.quality < 50) {
        this.quality = this.quality + 1
      }
    }
  }
}
