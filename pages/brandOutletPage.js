const waitHelperUtils = require('../utils/waitHelperUtils')
const PlaywrightHelper = require('../utils/playwrightHelper')

export class BrandOutletPage {
  constructor(page) {
    this.page = page
    this.lnkBrandOutlet = page.locator(`//a[contains(text(), 'Brand Outlet')]`)
    this.pageHeaderTheBrandOutlet = `//span[text() = 'The Brand Outlet']`
    this.clothing = `//span[text() = 'Clothing']/..`
    this.clothingBrands = `//span[text() = 'Clothing']/../..//li/a`
  }

  async clickLnkBrandOutlet() {
    await this.lnkBrandOutlet.click()
  }

  async isPresentpageHeaderTheBrandOutlet() {
    await waitHelperUtils.waitForSelector(
      this.page,
      this.pageHeaderTheBrandOutlet,
      5000
    )
  }

  async clickClothing() {
    const element = await this.page.$(this.clothing)
    await element.scrollIntoViewIfNeeded()
    await element.click()
  }

  async getAllClothingBrands() {
    const brands = await PlaywrightHelper.getInnerTextOfAllElements(
      this.page,
      this.clothingBrands
    )
    return brands.sort((a, b) => b - a)
  }
}
