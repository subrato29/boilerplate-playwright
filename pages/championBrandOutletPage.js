const waitHelperUtils = require('../utils/waitHelperUtils')

export class ChampionBrandOutletPage {
  constructor(page) {
    this.page = page
    this.searchTextbox = page.locator(`//input[@name = '_bkw']`)
    this.searchResultFound = `//h2[text() = '1 Results']`
    this.productLink = page.locator(`//a[@class = 's-item__link']`)
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
}
