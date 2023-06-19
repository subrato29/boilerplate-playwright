import { test, expect } from '@playwright/test'
import testDataJSON from '../support/readDataFromJson'
const { FlipkartPlus } = require('../pages/flipkartPlus')
const waitHelperUtils = require('../utils/waitHelperUtils')

const BASE_URL = 'https://www.flipkart.com/plus'

test.describe('Validating search functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Verifying valid search in Flipkart', async ({ page }) => {
    const flipkartPlus = new FlipkartPlus(page)
    const elementToBeSearched = testDataJSON.searchText
    await flipkartPlus.setSearch(elementToBeSearched)
    await flipkartPlus.clickBtnSearch()
    await waitHelperUtils.waitForSelector(
      page,
      flipkartPlus.searchResult,
      10000
    )
    const isLimitOfSuggestedSearchResultVerified =
      await flipkartPlus.verifyLimitOfSuggestedSearchResultInSinglePage(
        page,
        testDataJSON.limitOfSuggestedSearchResultInASinglePage
      )
    expect(isLimitOfSuggestedSearchResultVerified).toBe(true)
  })
})
