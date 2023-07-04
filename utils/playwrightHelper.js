export class PlaywrightHelper {
  async getInnerTextOfAllElements(page, locator) {
    return await page.$$eval(locator, (elements) =>
      elements.map((element) => element.innerText)
    )
  }

  async scrollIntoViewIfNeededAndClick(page, locator) {
    const element = await page.$(locator)
    await element.scrollIntoViewIfNeeded()
    await element.click()
  }
}

module.exports = new PlaywrightHelper()
