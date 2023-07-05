const waitHelperUtils = require('../utils/waitHelperUtils')
import { PlaywrightHelper } from '../utils/playwrightHelper'

export class CommonPage {
  constructor(page) {
    this.page = page
    this.addToCart = `//span[text() = 'Add to cart']`
  }

  async isPresentAddToCart() {
    await waitHelperUtils.waitForSelector(this.page, this.addToCart, 10000)
  }
}
