export class WaitHelperUtils {
  async waitForSelector(page, locator, timeout) {
    await page.waitForSelector(locator, { timeout: timeout })
  }
}

module.exports = new WaitHelperUtils()
