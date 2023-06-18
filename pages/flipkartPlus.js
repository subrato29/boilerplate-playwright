export class FlipkartPlus {
  constructor(page) {
    this.page = page
    this.searchTextBox = page.locator(
      "//input[@title = 'Search for products, brands and more']"
    )
    this.btnSearch = page.locator("//button[@type = 'submit']")
    this.searchResult = "//img[@loading = 'eager']"
    this.productType = "//span[text() = 'Electronics']/../span"
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

  async getAllProductType(page) {
    const elements = await page.locator(this.productType)
    const countOfProductTypes = await elements.evaluateAll((ele) => ele.length)
    let arrOfProductType = []
    for (let i = 1; i <= countOfProductTypes; i++) {
      arrOfProductType.push(
        await page.locator(`${this.productType}[${i}]`).textContent()
      )
    }
    return arrOfProductType
  }
}
