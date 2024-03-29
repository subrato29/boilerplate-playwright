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
    this.prices = "//div[@class = '_30jeq3']"
    this.priceLowToHigh = page.locator("//div[text() = 'Price -- Low to High']")
    this.priceHighToLow = page.locator("//div[text() = 'Price -- High to Low']")
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

  async getAllProductType() {
    const productType = await this.page.$$eval(this.productType, (products) =>
      products.map((product) => product.innerText)
    )
    return productType
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
    const prices = await this.page.$$eval(this.prices, (elements) =>
      elements.map((element) => element.innerText)
    )
    return prices.map((price) => price.split(',').join('').split('₹').join(''))
  }

  async clickPriceLowToHigh() {
    await this.priceLowToHigh.click()
  }

  async clickPriceHighToLow() {
    await this.priceHighToLow.click()
  }
}
