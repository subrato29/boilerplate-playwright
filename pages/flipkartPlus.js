export class FlipkartPlus {
  constructor(page) {
    this.page = page
    this.searchTextBox = page.locator(
      "//input[@title = 'Search for products, brands and more']"
    )
    this.btnSearch = page.locator("//button[@type = 'submit']")
    this.searchResult = "//img[@loading = 'eager']"
  }

  async setSearch(elementToBeSearched) {
    await this.searchTextBox.type(elementToBeSearched)
  }

  async clickBtnSearch() {
    await this.btnSearch.click()
  }

  async verifyLimitOfSuggestedSearchResultInSinglePage(
    page,
    isLimitOfSuggestedSearchResultVerified
  ) {
    const elements = await page.locator(this.searchResult)
    return await elements.evaluateAll(
      (ele, min) => ele.length > min,
      isLimitOfSuggestedSearchResultVerified - 1
    )
  }
}
