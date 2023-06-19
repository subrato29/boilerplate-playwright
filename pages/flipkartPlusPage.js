export class FlipkartPlusPage {
  constructor(page) {
    this.page = page
    this.searchTextBox = page.locator(
      "//input[@title = 'Search for products, brands and more']"
    )
    this.btnSearch = page.locator("//button[@type = 'submit']")
    this.searchResult = "//img[@loading = 'eager']"
    this.productType = "//span[text() = 'Electronics']/../span"
    this.login = page.locator("//a[text() = 'Login']")
    this.textBoxEnterEmainOrMobileNo = page.locator(
      "//span[text() = 'Enter Email/Mobile number']"
    )
    this.minPriceDropdown = page.locator("//option[text() = 'Min']/..")
    this.maxPriceDropdown = page.locator(
      "//option[text() = 'Min']/../../..//div[3]/select"
    )
    this.prices = page.$$("//div[@class = '_30jeq3']")
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

  async clickLogin() {
    await this.login.click()
  }

  async selectMinPrice(minPrice) {
    await this.minPriceDropdown.selectOption(minPrice)
  }

  async selectMaxPrice(maxPrice) {
    await this.maxPriceDropdown.selectOption(maxPrice)
  }

  async getAllPrices() {
    const prices = await this.prices
    let arrOfPrices = []
    for (const price of prices) {
      const eachPrice = await price.innerText()
      arrOfPrices.push(eachPrice.slice(1))
    }
    return arrOfPrices
  }
}
