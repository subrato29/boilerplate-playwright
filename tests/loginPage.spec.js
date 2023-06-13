import { test, expect } from '@playwright/test'
const { LoginPage } = require('../pages/loginPage')

const BASE_URL = 'https://www.homedepot.com/auth/view/signin?redirect=/&ref='

test.describe('Validating login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('Validating sign-in page and set email', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const isVisibleTextSignInOrCreateAccount =
      await loginPage.isVisibleTextSignInOrCreateAccount()
    expect(isVisibleTextSignInOrCreateAccount).toBe(true)
    await loginPage.setEmail('abc@email.com')
  })
})
