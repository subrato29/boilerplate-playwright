import { test, expect } from '@playwright/test'
import testDataJSON from '../support/readDataFromJson'
import { ChampionBrandOutletPage } from '../pages/championBrandOutletPage'
import { PlaywrightHelper } from '../utils/playwrightHelper'
import { CommonPage } from '../pages/commonPage'

const BASE_URL = 'https://www.ebay.com/e/fashion/champion-brand-outlet'

test.describe('Verifying champion clothing brand outlet page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Verifying search functionality', async ({ page }) => {
    const championBrandOutletPage = new ChampionBrandOutletPage(page)
    const commonPage = new CommonPage(page)
    await championBrandOutletPage.setSearch(testDataJSON.eBayItemNo1)
    await new PlaywrightHelper().keyboardPressEnter(page)
    await championBrandOutletPage.waitForSearchResultFound()
    await championBrandOutletPage.clickProductLink()
    await commonPage.isPresentAddToCart()
    await page.waitForURL()
    await commonPage.selectSize('2XL')
    await page.waitForURL()
    await commonPage.setQuantity('3')
    await page.waitForTimeout(2000)
  })
})
