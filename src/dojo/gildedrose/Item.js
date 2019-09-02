export default class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  isAgedBrie() {
    return false
  }

  isBackstagePass() {
    return false
  }

  isSulfuras() {
    return false
  }

  isBetterQualityWhenTimeGoesBy() {
    return this.isAgedBrie() || this.isBackstagePass()
  }

  passOneDay() {
    this.updateSellInDays()
    this.updateQuality()

    if (this.isExpired()) {
      this.updateQualityAfterExpiration()
    }
  }

  updateQuality() {
    if (!this.isBetterQualityWhenTimeGoesBy()) {
      if (this.quality > 0 && !this.isSulfuras()) {
        this.quality = this.quality - 1
      }
    } else if (this.quality < 50) {
      this.quality = this.quality + 1

      if (this.isBackstagePass()) {
        if (this.sellIn < 10 && this.quality < 50) {
          this.quality = this.quality + 1
        }

        if (this.sellIn < 5 && this.quality < 50) {
          this.quality = this.quality + 1
        }
      }
    }
  }

  updateQualityAfterExpiration() {
    if (!this.isAgedBrie()) {
      if (!this.isBackstagePass()) {
        if (this.quality > 0 && !this.isSulfuras()) {
          this.quality = this.quality - 1
        }
      } else {
        this.quality = 0
      }
    } else if (this.quality < 50) {
      this.quality = this.quality + 1
    }
  }

  isExpired() {
    return this.sellIn < 0
  }

  updateSellInDays() {
    if (!this.isSulfuras()) {
      this.sellIn = this.sellIn - 1
    }
  }

  toString() {
    return this.name + ', ' + this.sellIn + ', ' + this.quality + '\n'
  }
}
