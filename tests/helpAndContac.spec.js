import { test, expect } from '@playwright/test'
import testDataJSON from '../support/readDataFromJson'
import { HelpAndContactPage } from '../pages/helpAndContactPage'

const BASE_URL = 'https://www.ebay.com'

test.describe('Validating help and contact page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Verifying help and contact feature', async ({ page }) => {
    const helpAndContact = new HelpAndContactPage(page)
    await helpAndContact.clickHelpAndContact()
    await helpAndContact.waitForTextHowCanWeHelpYouTodayToAppear()
  })
})
