const waitHelperUtils = require('../utils/waitHelperUtils')

export class HelpAndContactPage {
  constructor(page) {
    this.page = page
    this.helpAndContact = page.locator(
      "//div[@aria-label = 'Account']//a[contains(text(), 'Help & Contact')]"
    )
    this.textHowCanWeHelpYouToday =
      "//h2[text() = 'How can we help you today?']"
  }

  async clickHelpAndContact() {
    await this.helpAndContact.click()
  }

  async waitForTextHowCanWeHelpYouTodayToAppear() {
    await waitHelperUtils.waitForSelector(
      this.page,
      this.textHowCanWeHelpYouToday,
      5000
    )
  }
}
