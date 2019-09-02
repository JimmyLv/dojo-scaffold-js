export default class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  passOneDay() {
    this.updateSellInDays()
    this.updateQuality()

    if (this.isExpired()) {
      this.updateQualityAfterExpiration()
    }
  }

  updateQuality() {
    this.decreaseQuality()
  }

  updateQualityAfterExpiration() {
    this.decreaseQuality()
  }

  decreaseQuality() {
    if (this.quality > 0) {
      this.quality = this.quality - 1
    }
  }

  isExpired() {
    return this.sellIn < 0
  }

  updateSellInDays() {
    this.sellIn = this.sellIn - 1
  }

  toString() {
    return this.name + ', ' + this.sellIn + ', ' + this.quality + '\n'
  }
}
