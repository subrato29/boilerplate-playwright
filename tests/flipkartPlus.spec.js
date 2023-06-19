import { test, expect } from '@playwright/test'
import testDataJSON from '../support/readDataFromJson'
const { FlipkartPlus } = require('../pages/flipkartPlus')
const waitHelperUtils = require('../utils/waitHelperUtils')

const BASE_URL = 'https://www.flipkart.com/plus'

test.describe('Validating flipkartPlus page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Verifying product type displayed', async ({ page }) => {
    const plusPage = new FlipkartPlus(page)
    const arrOfExpectedProductType = testDataJSON.arrOfProductType.sort(
      (a, b) => a - b
    )
    let arrOfActualProductType = await plusPage.getAllProductType(page)
    arrOfActualProductType = arrOfActualProductType.sort((a, b) => a - b)
    expect(arrOfActualProductType).toStrictEqual(arrOfExpectedProductType)
  })
})