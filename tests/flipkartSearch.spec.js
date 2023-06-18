import { test, expect } from '@playwright/test'
import testDataJSON from '../support/readDataFromJson'
const { FlipkartSearch } = require('../pages/flipkartSearch')

const BASE_URL = 'https://www.flipkart.com/plus'

test.describe('Validating search functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Verifying valid search in Flipkart', async ({ page }) => {
    const search = new FlipkartSearch(page)
    const elementToBeSearched = testDataJSON.searchText
    await search.setSearch(elementToBeSearched)
    await search.clickBtnSearch()
    const isLimitOfSuggestedSearchResultVerified =
      await search.verifyLimitOfSuggestedSearchResultInSinglePage(
        page,
        testDataJSON.limitOfSuggestedSearchResultInASinglePagge
      )
    expect(isLimitOfSuggestedSearchResultVerified).toBe(true)
  })
})
