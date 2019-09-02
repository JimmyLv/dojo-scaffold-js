export default class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  isAgedBrie() {
    return this.name === 'Aged Brie'
  }

  isBackstagePass() {
    return this.name === 'Backstage passes to a TAFKAL80ETC concert'
  }

  isSulfuras() {
    return this.name === 'Sulfuras, Hand of Ragnaros'
  }

  isBetterQualityWhenTimeGoesBy() {
    return this.isAgedBrie() || this.isBackstagePass()
  }

  toString() {
    return this.name + ', ' + this.sellIn + ', ' + this.quality + '\n'
  }
}
