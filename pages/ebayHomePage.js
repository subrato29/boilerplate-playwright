const waitHelperUtils = require('../utils/waitHelperUtils')

export class EbayHomePage {
  constructor(page) {
    this.page = page
    this.itemsAvailableInAllCategoriesDrodown =
      "//select[@aria-label = 'Select a category for search']/option"
    this.itemsInShopByCategories =
      "//button[text() = ' Shop by category']/../..//a[@title]"
    this.myEbayList =
      "//a[text() = 'My eBay']/..//ul[@role = 'navigation']/li/a"
    this.searchTextBox = page.locator(
      "//input[@placeholder = 'Search for anything']"
    )
    this.btnSearch = page.locator("//input[@value = 'Search']")
    this.searchResultsSuggested =
      "//ul[contains(@class, 'srp-results')]/li[@data-viewport]"
    this.category = "//h3[text() = 'Category']"
    this.searchResultsSuggestedAfterSendingTextInSearchBox =
      "//ul[@role = 'listbox']/li/a"
    this.suggestedSearchAreaDisplayed =
      "//ul[@role = 'listbox'][contains(@class, 'ghAC_opened')]"
    this.productTitle = page.locator(
      "//div[@class = 's-item__title']/span/span[@class = 'BOLD']"
    )
    this.allListings = "//span[@aria-label = 'All Listings Current view']"
    this.productItemsDisplayed = page.locator(
      "//h1[@class = 'srp-controls__count-heading']"
    )
    this.advancedSearch = page.locator("//a[@title = 'Advanced Search']")
    this.advanceSearchTitle = "//div[text() = 'Advanced Search']"
    this.inputBoxEnterKeywordsOrItemNo = page.locator(
      "//span[text() = 'Enter keywords or item number']/../..//input"
    )
    this.btnSearchFirst = page.locator(
      "//div[contains(@class, 'adv-keywords__btn-help')]//button[text() = 'Search']"
    )
  }

  async getAllItemsFromDropdownAllCategories() {
    let items = await this.page.$$eval(
      this.itemsAvailableInAllCategoriesDrodown,
      (items) => items.map((item) => item.innerText)
    )
    items = items.filter((item) => item != 'All Categories')
    return items
  }

  async getItemsInShopByCategories() {
    const items = await this.page.$$eval(
      this.itemsInShopByCategories,
      (items) => items.map((item) => item.innerText)
    )
    return items
  }

  async getAllItemsInMyEbayList() {
    const items = await this.page.$$eval(this.myEbayList, (items) =>
      items.map((item) => item.innerText.trim())
    )
    return items
  }

  async setSearch(searchItem) {
    await this.searchTextBox.type(searchItem)
  }

  async clickBtnSearch() {
    await this.btnSearch.click()
  }

  async getCountOfAllSearchResultsSuggested() {
    return (await this.page.$$(this.searchResultsSuggested)).length
  }

  async isAppearCategoryLabel() {
    await waitHelperUtils.waitForSelector(this.page, this.category, 10000)
  }

  async getTextSuggestedAfterSearch() {
    const arrayOfSuggestedTextAfterSearch = await this.page.$$eval(
      this.searchResultsSuggestedAfterSendingTextInSearchBox,
      (items) =>
        items.map((item) =>
          item.getAttribute('aria-label').trim().toLowerCase()
        )
    )
    return arrayOfSuggestedTextAfterSearch
  }

  async clickSearchBox() {
    await this.searchTextBox.click()
  }

  async waitForSuggestedSearchAreaDisplayed() {
    await waitHelperUtils.waitForSelector(
      this.page,
      this.suggestedSearchAreaDisplayed,
      10000
    )
  }

  async waitForAllListingLabelDisplayed() {
    await waitHelperUtils.waitForSelector(this.page, this.allListings, 10000)
  }

  async getProductTitle() {
    return await this.productTitle.textContent()
  }

  async getItemCountDisplayedByProductId() {
    return await this.productItemsDisplayed.textContent()
  }

  async clickAdvancedSearch() {
    await this.advancedSearch.click()
  }

  async waitForAdvancedSearchPage() {
    await waitHelperUtils.waitForSelector(
      this.page,
      this.advanceSearchTitle,
      10000
    )
  }

  async enterKeywordsOrItemNo(value) {
    await this.inputBoxEnterKeywordsOrItemNo.type(value)
  }

  async clickBtnSearchFirst() {
    await this.btnSearchFirst.click()
  }
}
