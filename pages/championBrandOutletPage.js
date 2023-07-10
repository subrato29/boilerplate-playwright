const waitHelperUtils = require('../utils/waitHelperUtils')
import { PlaywrightHelper } from '../utils/playwrightHelper'

export class ChampionBrandOutletPage {
  constructor(page) {
    this.page = page
    this.searchTextbox = page.locator(`//input[@name = '_bkw']`)
    this.searchResultFound = `//h2[text() = '1 Results']`
    this.productLink = page.locator(`//a[@class = 's-item__link']`)
    this.minPrice = page.locator(`//input[@aria-label = 'Minimum Value']`)
    this.maxPrice = page.locator(`//input[@aria-label = 'Maximum Value']`)
    this.btnSubmitPriceRange = page.locator(
      `//button[@aria-label = 'Submit price range']`
    )
    this.itemPrices = `//span[@class = 's-item__price']`
  }

  async setSearch(value) {
    await this.searchTextbox.type(value)
  }

  async waitForSearchResultFound() {
    await waitHelperUtils.waitForSelector(
      this.page,
      this.searchResultFound,
      5000
    )
  }

  async clickProductLink() {
    await this.productLink.click()
  }

  async setMinPrice(price) {
    await this.minPrice.type(price)
  }

  async setMaxPrice(price) {
    await this.maxPrice.type(price)
  }

  async clickBtnSubmitPriceRange() {
    await this.btnSubmitPriceRange.click()
  }

  async getItemPricesSortedInAscendingOrder() {
    let prices = await new PlaywrightHelper().getInnerTextOfAllElements(
      this.page,
      this.itemPrices
    )
    prices = prices.map((price) => price.slice(1))
    return prices.sort((a, b) => a - b)
  }
}
