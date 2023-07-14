const waitHelperUtils = require('../utils/waitHelperUtils')
import { PlaywrightHelper } from '../utils/playwrightHelper'

export class BrandOutletPage {
  constructor(page) {
    this.page = page
    this.lnkBrandOutlet = page.locator(
      `//li/a[contains(text(), 'Brand Outlet')]`
    )
    this.pageHeaderTheBrandOutlet = `//span[text() = 'The Brand Outlet']`
    this.clothing = `//span[text() = 'Clothing']/..`
    this.clothingBrands = `//span[text() = 'Clothing']/../..//li/a`
  }

  async clickLnkBrandOutlet() {
    await this.lnkBrandOutlet.click()
  }

  async isPresentPageHeaderTheBrandOutlet() {
    await waitHelperUtils.waitForSelector(
      this.page,
      this.pageHeaderTheBrandOutlet,
      5000
    )
  }

  async clickClothing() {
    await new PlaywrightHelper().scrollIntoViewIfNeededAndClick(
      this.page,
      this.clothing
    )
  }

  async getAllClothingBrands() {
    const brands = await new PlaywrightHelper().getInnerTextOfAllElements(
      this.page,
      this.clothingBrands
    )
    return brands.sort((a, b) => b - a)
  }
}
