export default class GildedRose {
  constructor(items) {
    this.items = items
  }
  updateQuality() {
    this.items.forEach(item => {
      if (!item.isBetterQualityWhenTimeGoesBy()) {
        if (item.quality > 0 && !item.isSulfuras()) {
          item.quality = item.quality - 1
        }
      } else if (item.quality < 50) {
        item.quality = item.quality + 1

        if (item.isBackstagePass()) {
          if (item.sellIn < 11 && item.quality < 50) {
            item.quality = item.quality + 1
          }

          if (item.sellIn < 6 && item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }

      if (!item.isSulfuras()) {
        item.sellIn = item.sellIn - 1
      }

      if (item.sellIn < 0) {
        if (!item.isAgedBrie()) {
          if (!item.isBackstagePass()) {
            if (item.quality > 0 && !item.isSulfuras()) {
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
