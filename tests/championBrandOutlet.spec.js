import { test, expect } from '@playwright/test'
import testDataJSON from '../support/readDataFromJson'
import { ChampionBrandOutletPage } from '../pages/championBrandOutletPage'
import { PlaywrightHelper } from '../utils/playwrightHelper'

const BASE_URL = 'https://www.ebay.com/e/fashion/champion-brand-outlet'

test.describe('Verifying champion clothing brand outlet page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Verifying search functionality', async ({ page }) => {
    const championBrandOutletPage = new ChampionBrandOutletPage(page)
    const playwrightHelper = new PlaywrightHelper()
    await championBrandOutletPage.setSearch(testDataJSON.eBayItemNo1)
    await playwrightHelper.keyboardPressEnter(page)
    await championBrandOutletPage.waitForSearchResultFound()
    await championBrandOutletPage.clickProductLink()
  })
})
