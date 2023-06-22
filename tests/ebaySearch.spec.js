import { test, expect } from '@playwright/test'
import testDataJSON from '../support/readDataFromJson'
import { EbayHomePage } from '../pages/ebayHomePage'
const waitHelperUtils = require('../utils/waitHelperUtils')

const BASE_URL = 'https://www.ebay.com'

test.describe('Validating ebay home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Verifying count of suggested search result after a valid search', async ({
    page,
  }) => {
    const homePage = new EbayHomePage(page)
    await homePage.setSearch(testDataJSON.ebaySearch)
    await homePage.clickBtnSearch()
    await homePage.isAppearCategoryLabel()
    const results = await homePage.getAllSearchResultsSuggested()
    expect(testDataJSON.maxCountOfSearchResultsAppear).toBeLessThanOrEqual(
      results
    )
  })
})
