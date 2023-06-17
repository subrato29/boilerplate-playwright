export class HomePage {
  constructor(page) {
    this.page = page
    this.searchTextbox = page.locator(
      "//input[@id = 'headerSearch'] | //input[@placeholder = 'Search']"
    )
    this.btnSearch =
      "//button[@id = 'headerSearchButton'] | //button[@id = 'typeahead-search-icon-button']"
    this.searchResultHeader = page.locator(
      "//div[@class = 'results-header']/div/h1"
    )
  }

  async validatePresenceOfSearchTextbox() {
    return await this.searchTextbox.isVisible()
  }

  async setSearch(elementToBeSearched) {
    await this.searchTextbox.type(elementToBeSearched)
  }

  async validateSearchResultHeader() {
    return await this.searchResultHeader.textContent()
  }
}
