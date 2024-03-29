import { test, expect } from '@playwright/test'
import { testDataJSON, urls } from '../../support/readDataFromJson'
import { EbayHomePage } from '../../pages/ebayHomePage'

test.describe('Validating ebay home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(urls.ebayHomePage)
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

  test('Searching element by eBay Item Number', async ({ page }) => {
    const homePage = new EbayHomePage(page)
    await homePage.setSearch(testDataJSON.eBayItemNo)
    await homePage.clickBtnSearch()
    await homePage.waitForAllListingLabelDisplayed()
    const productTitle = await homePage.getProductTitle()
    expect(productTitle.trim()).toBe(testDataJSON.productTitle)
    const productCountByProductId =
      await homePage.getItemCountDisplayedByProductId()
    expect(productCountByProductId.trim()).toBe(
      `1 result for ${testDataJSON.eBayItemNo}`
    )
  })

  test.skip('Verify advanced search', async ({ page }) => {
    const homePage = new EbayHomePage(page)
    await homePage.clickAdvancedSearch()
    await homePage.waitForAdvancedSearchPage()
    await homePage.enterKeywordsOrItemNo(testDataJSON.eBayItemNo)
    await homePage.clickBtnSearchFirst()
    await homePage.waitForAllListingLabelDisplayed()
    const productTitle = await homePage.getProductTitle()
    expect(productTitle.trim()).toBe(testDataJSON.productTitle)
    const productCountByProductId =
      await homePage.getItemCountDisplayedByProductId()
    expect(productCountByProductId.trim()).toBe(
      `1 result for ${testDataJSON.eBayItemNo}`
    )
  })

  test('Click all checkboxes under year', async ({ page }) => {
    const homePage = new EbayHomePage(page)
    await homePage.setSearch(testDataJSON.ebaySearch)
    await homePage.clickBtnSearch()
    await homePage.waitForAllListingLabelDisplayed()
    await homePage.clickAllCheckBoxesYear()
  })
})
