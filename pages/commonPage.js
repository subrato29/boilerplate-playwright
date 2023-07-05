const waitHelperUtils = require('../utils/waitHelperUtils')
import { PlaywrightHelper } from '../utils/playwrightHelper'

export class CommonPage {
  constructor(page) {
    this.page = page
    this.addToCart = `//span[text() = 'Add to cart']`
    this.sizeMeasure = page.locator(`//span[text() = 'Size']/../..//select`)
    this.quantity = page.locator(`//input[@id = 'qtyTextBox']`)
  }

  async isPresentAddToCart() {
    await waitHelperUtils.waitForSelector(this.page, this.addToCart, 10000)
  }

  async selectSize(size) {
    await this.sizeMeasure.selectOption(size)
  }

  async setQuantity(quantity) {
    await this.quantity.fill(quantity)
  }
}
