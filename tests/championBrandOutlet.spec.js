import { test, expect } from '@playwright/test'
import testDataJSON from '../support/readDataFromJson'
import { ChampionBrandOutletPage } from '../pages/championBrandOutletPage'
import { PlaywrightHelper } from '../utils/playwrightHelper'
import { ProductDetailsPage } from '../pages/productDetailsPage'

const BASE_URL = 'https://www.ebay.com/e/fashion/champion-brand-outlet'

test.describe('Verifying champion clothing brand outlet page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Verifying search functionality', async ({ page }) => {
    const championBrandOutletPage = new ChampionBrandOutletPage(page)
    const productDetailsPage = new ProductDetailsPage(page)
    await championBrandOutletPage.setSearch(testDataJSON.eBayItemNo1)
    await new PlaywrightHelper().keyboardPressEnter(page)
    await championBrandOutletPage.waitForSearchResultFound()
    await championBrandOutletPage.clickProductLink()
    await productDetailsPage.isPresentAddToCart()
    await page.waitForURL()
    await productDetailsPage.selectSize('2XL')
    await page.waitForURL()
    await productDetailsPage.setQuantity('3')
    await productDetailsPage.clickAddToCart()
    await page.waitForTimeout(2000)
  })
})
