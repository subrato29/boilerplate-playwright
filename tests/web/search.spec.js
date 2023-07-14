import { test, expect } from '@playwright/test'
import { testDataJSON } from '../../support/readDataFromJson'
const { HomePage } = require('../../pages/homePage')

const BASE_URL = 'https://www.homedepot.com'

test.describe('Validating search functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test.skip('Presence of search box', async ({ page }) => {
    const homePage = new HomePage(page)
    const validatePresenceOfSearchTextbox =
      await homePage.validatePresenceOfSearchTextbox()
    expect(validatePresenceOfSearchTextbox).toBe(true)
  })

  test.skip('Verifying valid search', async ({ page }) => {
    const homePage = new HomePage(page)
    const elementToBeSearched = testDataJSON.searchText
    await homePage.setSearch(elementToBeSearched)
    await page.click(homePage.btnSearch)
    const actualSearchResult = await homePage.validateSearchResultHeader()
    expect(actualSearchResult).toBe(elementToBeSearched)
  })
})
