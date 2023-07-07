const waitHelperUtils = require('../utils/waitHelperUtils')

export class ProductDetailsPage {
  constructor(page) {
    this.page = page
    this.addToCart = `//span[text() = 'Add to cart']/../..`
    this.sizeMeasure = page.locator(`//span[text() = 'Size']/../..//select`)
    this.quantity = page.locator(`//input[@id = 'qtyTextBox']`)
    this.goToCart = `//span[text() = 'Go to cart']/../..`
    this.headerAtCartPopup = page.locator(`//h2[@class = 'vi-overlayTitleBar']`)
  }

  async isPresentAddToCart() {
    await waitHelperUtils.waitForSelector(this.page, this.addToCart, 10000)
  }

  async selectSize(size) {
    await this.sizeMeasure.selectOption(size)
  }

  async setQuantity(quantity) {
    await this.quantity.clear()
    await this.quantity.type(quantity)
  }

  async clickAddToCart() {
    await this.page.locator(this.addToCart).click()
  }

  async isPresentGoToCart() {
    await waitHelperUtils.waitForSelector(this.page, this.goToCart, 10000)
  }

  async itemsAddedHeaderMessage() {
    const message = await this.headerAtCartPopup.textContent()
    return message.trim()
  }
}
