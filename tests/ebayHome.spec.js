import { test, expect } from '@playwright/test'
import { testDataJSON, urls } from '../support/readDataFromJson'
import { EbayHomePage } from '../pages/ebayHomePage'

test.describe('Validating ebay home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(urls.ebayHomePage)
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

  test('Verifying My eBay list', async ({ page }) => {
    const homePage = new EbayHomePage(page)
    let actualItemsInMyEbayList = await homePage.getAllItemsInMyEbayList()
    actualItemsInMyEbayList = actualItemsInMyEbayList.sort((a, b) => a - b)
    let expectedItemsInMyEbayList = testDataJSON.myEbayList.sort(
      (a, b) => a - b
    )
    expect(actualItemsInMyEbayList).toStrictEqual(expectedItemsInMyEbayList)
  })
})
