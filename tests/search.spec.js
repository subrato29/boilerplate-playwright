import { test, expect } from '@playwright/test'
const { HomePage } = require('../pages/homePage')

const BASE_URL = 'https://www.homedepot.com'

test.describe('Validating search functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Presence of search box', async ({ page }) => {
    const homePage = new HomePage(page)
    const validatePresenceOfSearchTextbox =
      await homePage.validatePresenceOfSearchTextbox()
    expect(validatePresenceOfSearchTextbox).toBe(true)
  })

  test('Verifying valid search', async ({ page }) => {
    const homePage = new HomePage(page)
    const elementToBeSearched = 'Computer table'
    await homePage.setSearch(elementToBeSearched)
    await page.click(homePage.btnSearch)
    homePage.page.waitForTimeout(5000)
    const actualSearchResult = await homePage.validateSearchResultHeader()
    expect(actualSearchResult).toBe(elementToBeSearched)
  })
})
