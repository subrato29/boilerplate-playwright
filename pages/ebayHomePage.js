export class EbayHomePage {
  constructor(page) {
    this.page = page
    this.itemsAvailableInAllCategoriesDrodown =
      "//select[@aria-label = 'Select a category for search']/option"
    this.itemsInShopByCategories =
      "//button[text() = ' Shop by category']/../..//a[@title]"
    this.myEbayList =
      "//a[text() = 'My eBay']/..//ul[@role = 'navigation']/li/a"
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
}
