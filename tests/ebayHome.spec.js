import { test, expect } from '@playwright/test'
import testDataJSON from '../support/readDataFromJson'
import { EbayHomePage } from '../pages/ebayHomePage'
const waitHelperUtils = require('../utils/waitHelperUtils')

const BASE_URL = 'https://www.ebay.com'

test.describe('Validating ebay home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Verifying all categories list items', async ({ page }) => {
    const homePage = new EbayHomePage(page)
    let actualArrOfItemsInAllCategoriesDropdownn =
      await homePage.getAllItemsFromDropdownAllCategories()

    actualArrOfItemsInAllCategoriesDropdownn =
      actualArrOfItemsInAllCategoriesDropdownn.sort((a, b) => a - b)

    const expectedArrOfItemsInAllCategoriesDropdownn =
      testDataJSON.allCategories.sort((a, b) => a - b)

    expect(actualArrOfItemsInAllCategoriesDropdownn).toStrictEqual(
      expectedArrOfItemsInAllCategoriesDropdownn
    )
  })

  test('Verifying items in shop by categories', async ({ page }) => {
    const homePage = new EbayHomePage(page)
    let actualItemsInShopByCategory =
      await homePage.getItemsInShopByCategories()
    actualItemsInShopByCategory = actualItemsInShopByCategory.sort(
      (a, b) => a - b
    )
    const expectedItemsInShopByCategory = testDataJSON.shopByCategories.sort(
      (a, b) => a - b
    )
    expect(actualItemsInShopByCategory).toStrictEqual(
      expectedItemsInShopByCategory
    )
  })
})
