import { test, expect } from '@playwright/test'
const { HomePage } = require('../pages/homePage')

const BASE_URL = 'https://www.homedepot.com'

test.describe('Validating login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Presence of search box', async ({ page }) => {
    const homePage = new HomePage(page)
    const validatePresenceOfSearchTextbox =
      await homePage.validatePresenceOfSearchTextbox()
    expect(validatePresenceOfSearchTextbox).toBe(true)
  })
})
