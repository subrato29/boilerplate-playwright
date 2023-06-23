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
    const actualSearchResultCount =
      await homePage.getCountOfAllSearchResultsSuggested()
    expect(testDataJSON.maxCountOfSearchResultsAppear).toBeLessThanOrEqual(
      actualSearchResultCount
    )
  })

  test('Verifying suggested results suggested after sending text in search box', async ({
    page,
  }) => {
    const homePage = new EbayHomePage(page)
    await homePage.setSearch(testDataJSON.ebaySearch)
    await homePage.clickSearchBox()
    await homePage.waitForSuggestedSearchAreaDisplayed()
    const arrayOfSuggestedTextAfterSearch =
      await homePage.getTextSuggestedAfterSearch()
    const arrayOfPresence = arrayOfSuggestedTextAfterSearch.map((element) =>
      element.includes(testDataJSON.ebaySearch.toLowerCase())
    )
    expect(arrayOfPresence.includes(false)).toBe(false)
  })
})
