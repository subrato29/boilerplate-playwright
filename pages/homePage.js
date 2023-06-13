export class HomePage {
  constructor(page) {
    this.page = page
    this.searchTextbox = page.locator("//input[@type = 'search']")
  }

  async validatePresenceOfSearchTextbox() {
    return await this.searchTextbox.isVisible()
  }
}
