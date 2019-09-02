export default class GildedRose {
  constructor(items) {
    this.items = items
  }
  passesOneDay() {
    this.items.forEach(item => {
      item.passOneDay()
    })
  }
}
