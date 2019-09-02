export default class GildedRose {
  constructor(items) {
    this.items = items
  }
  isAgedBrie(item) {
    return item.name === 'Aged Brie'
  }

  isBackstagePass(item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert'
  }

  isSulfuras(item) {
    return item.name === 'Sulfuras, Hand of Ragnaros'
  }

  isBetterQualityWhenTimeGoesBy(item) {
    return this.isAgedBrie(item) || this.isBackstagePass(item)
  }
  updateQuality() {
    this.items.forEach(item => {
      if (!this.isBetterQualityWhenTimeGoesBy(item)) {
        if (item.quality > 0 && !this.isSulfuras(item)) {
          item.quality = item.quality - 1
        }
      } else if (item.quality < 50) {
        item.quality = item.quality + 1

        if (this.isBackstagePass(item)) {
          if (item.sellIn < 11 && item.quality < 50) {
            item.quality = item.quality + 1
          }

          if (item.sellIn < 6 && item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }

      if (!this.isSulfuras(item)) {
        item.sellIn = item.sellIn - 1
      }

      if (item.sellIn < 0) {
        if (!this.isAgedBrie(item)) {
          if (!this.isBackstagePass(item)) {
            if (item.quality > 0 && !this.isSulfuras(item)) {
              item.quality = item.quality - 1
            }
          } else {
            item.quality = 0
          }
        } else if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
    })
  }
}
