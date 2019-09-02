export default class GildedRose {
  constructor(items) {
    this.items = items
  }

  updateQuality() {
    function isAgedBrie(item) {
      return item.name === 'Aged Brie'
    }

    function isBackstagePass(item) {
      return item.name === 'Backstage passes to a TAFKAL80ETC concert'
    }

    function isSulfuras(item) {
      return item.name === 'Sulfuras, Hand of Ragnaros'
    }

    this.items.forEach(item => {
      if (!(isAgedBrie(item))
        && !(isBackstagePass(item))) {
        if (item.quality > 0) {
          if (!(isSulfuras(item))) {
            item.quality = item.quality - 1
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1

          if (isBackstagePass(item)) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }

            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
          }
        }
      }

      if (!isSulfuras(item)) {
        item.sellIn = item.sellIn - 1
      }

      if (item.sellIn < 0) {
        if (!isAgedBrie(item)) {
          if (!isBackstagePass(item)) {
            if (item.quality > 0) {
              if (!isSulfuras(item)) {
                item.quality = item.quality - 1
              }
            }
          } else {
            item.quality = 0
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }
    })
  }
}
