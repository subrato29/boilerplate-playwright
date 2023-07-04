import { test, expect } from '@playwright/test'
import testDataJSON from '../support/readDataFromJson'
import { BrandOutletPage } from '../pages/brandOutletPage'

const BASE_URL = 'https://www.ebay.com'

test.describe('Verifying the brand outlet page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Verifying clothing brands enlisted', async ({ page }) => {
    const brandOutletPage = new BrandOutletPage(page)
    await brandOutletPage.clickLnkBrandOutlet()
    await brandOutletPage.isPresentpageHeaderTheBrandOutlet()
    await brandOutletPage.clickClothing()
    const actualBrandsSorted = await brandOutletPage.getAllClothingBrands()
    const expectedBrandsSorted = testDataJSON.brands.sort((a, b) => a - b)
    expect(actualBrandsSorted).toStrictEqual(expectedBrandsSorted)
  })
})
