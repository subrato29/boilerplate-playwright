export class PlaywrightHelper {
  async getInnerTextOfAllElements(page, locator) {
    return await page.$$eval(locator, (elements) =>
      elements.map((element) => element.innerText)
    )
  }
}

module.exports = new PlaywrightHelper()
