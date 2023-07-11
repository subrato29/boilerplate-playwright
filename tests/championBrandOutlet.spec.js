import { test, expect } from '@playwright/test'
import { testDataJSON, urls } from '../support/readDataFromJson'
import { ChampionBrandOutletPage } from '../pages/championBrandOutletPage'
import { PlaywrightHelper } from '../utils/playwrightHelper'
import { ProductDetailsPage } from '../pages/productDetailsPage'

test.describe('Verifying champion clothing brand outlet page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(urls.championBrandOutletPage)
  })

  test('Verifying search functionality and add to cart items', async ({
    page,
  }) => {
    const championBrandOutletPage = new ChampionBrandOutletPage(page)
    const productDetailsPage = new ProductDetailsPage(page)
    await championBrandOutletPage.setSearch(testDataJSON.eBayItemNo1)
    await new PlaywrightHelper().keyboardPressEnter(page)
    await championBrandOutletPage.waitForSearchResultFound()
    await championBrandOutletPage.clickProductLink()
    await productDetailsPage.isPresentAddToCart()
    await page.waitForURL()
    await productDetailsPage.selectSize(testDataJSON.size)
    await page.waitForURL()
    const quantity = testDataJSON.quantity
    await productDetailsPage.setQuantity(quantity)
    const pricePerItem = await productDetailsPage.getPrice()
    const expectedTotalPrice = parseFloat(pricePerItem) * parseFloat(quantity)
    await productDetailsPage.clickAddToCart()
    await productDetailsPage.isPresentGoToCart()
    const itemOrItems = quantity == '1' ? 'item' : 'items'
    const expectedMessageOfItemsAdded = `${quantity} ${itemOrItems} added to cart`
    const actualMessageOfItemsAdded =
      await productDetailsPage.itemsAddedHeaderMessage()
    expect(expectedMessageOfItemsAdded).toBe(actualMessageOfItemsAdded)
    const actualTotalPrice = await productDetailsPage.getTotalPrice()
    expect(expectedTotalPrice).toBe(parseFloat(actualTotalPrice))
  })

  test('Fetching items within a certain price range', async ({ page }) => {
    const championBrandOutletPage = new ChampionBrandOutletPage(page)
    await championBrandOutletPage.setMinPrice(testDataJSON.ebayMinPrice)
    await championBrandOutletPage.setMaxPrice(testDataJSON.ebayMaxPrice)
    await championBrandOutletPage.clickBtnSubmitPriceRange()
    await page.waitForURL()
    const itemPrices =
      await championBrandOutletPage.getItemPricesSortedInAscendingOrder()
    expect(parseFloat(itemPrices[0])).toBeGreaterThanOrEqual(
      parseFloat(testDataJSON.ebayMinPrice)
    )
    expect(parseFloat(itemPrices[itemPrices.length - 1])).toBeLessThanOrEqual(
      parseFloat(testDataJSON.ebayMaxPrice)
    )
  })

  test('Validating List and Gallery view', async ({ page }) => {
    const championBrandOutletPage = new ChampionBrandOutletPage(page)
    await championBrandOutletPage.clickBtnToChangeViewOfItems()
    await championBrandOutletPage.clickListView()
    await championBrandOutletPage.waitForBtnListViewToAppear()
    await championBrandOutletPage.waitForListViewOfItemsToAppear()
    await championBrandOutletPage.clickBtnToChangeViewOfItems()
    await championBrandOutletPage.clickGalleryView()
    await championBrandOutletPage.waitForBtnGalleryViewToAppear()
    await championBrandOutletPage.waitForGalleryViewOfItemsToAppear()
  })
})
