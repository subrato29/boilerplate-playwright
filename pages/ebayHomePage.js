export class EbayHomePage {
  constructor(page) {
    this.page = page
    this.itemsAvailableInAllCategoriesDrodown =
      "//select[@aria-label = 'Select a category for search']/option"
  }

  async getAllItemsFromDropdownAllCategories() {
    const items = await this.page.$$eval(
      this.itemsAvailableInAllCategoriesDrodown,
      (items) => items.map((item) => item.innerText)
    )
    let arrOfItems = []
    for (const item of items) {
      arrOfItems.push(item)
    }
    arrOfItems = arrOfItems.filter((item) => item != 'All Categories')
    return arrOfItems
  }
}
