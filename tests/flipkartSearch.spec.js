import { test, expect } from '@playwright/test'
import testDataJSON from '../support/readDataFromJson'
const { FlipkartPlusPage } = require('../pages/flipkartPlusPage')
const waitHelperUtils = require('../utils/waitHelperUtils')

const BASE_URL = 'https://www.flipkart.com/plus'

test.describe('Validating search functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Verifying valid search in Flipkart', async ({ page }) => {
    const flipkartPlus = new FlipkartPlusPage(page)
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

  test('Verifying search result between given min and max price', async ({
    page,
  }) => {
    const flipkartPlus = new FlipkartPlusPage(page)
    const elementToBeSearched = testDataJSON.searchText
    await flipkartPlus.setSearch(elementToBeSearched)
    await flipkartPlus.clickBtnSearch()
    await waitHelperUtils.waitForSelector(
      page,
      flipkartPlus.searchResult,
      10000
    )
    await flipkartPlus.selectMinPrice(testDataJSON.minPrice)
    await page.waitForTimeout(1000)
    await flipkartPlus.selectMaxPrice(testDataJSON.maxPrice)
    await waitHelperUtils.waitForSelector(
      page,
      `//div[text() = '${testDataJSON.minPrice}-${testDataJSON.maxPrice}']`,
      10000
    )
  })
})
