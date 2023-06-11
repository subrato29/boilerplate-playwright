import { test, expect } from '@playwright/test'

const BASE_URL = 'https://www.homedepot.com/'

test.describe('Validating home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Verify home page', async ({ page }) => {
    await expect(page).toHaveTitle(/The Home Depot/)
  })

  test('Click me link', async ({ page }) => {
    //code
  })
})
