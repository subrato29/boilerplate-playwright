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

  async getAllSearchResultsSuggested() {
    return (await this.page.$$(this.searchResultsSuggested)).length
  }

  async isAppearCategoryLabel() {
    await waitHelperUtils.waitForSelector(this.page, this.category, 10000)
  }
}
