export class HomePage {
  constructor(page) {
    this.page = page
    this.searchTextbox = page.locator("//input[@id = 'headerSearch']")
    this.btnSearch = "//button[@id = 'headerSearchButton']"
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
