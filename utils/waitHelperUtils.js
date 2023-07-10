import { DEFAULT_TIMEOUT } from '../config/wait'

export class WaitHelperUtils {
  async waitForSelector(page, locator, timeout = DEFAULT_TIMEOUT) {
    await page.waitForSelector(locator, { timeout: timeout })
  }
}

module.exports = new WaitHelperUtils()
