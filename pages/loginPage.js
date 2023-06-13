export class LoginPage {
  constructor(page) {
    this.page = page
    this.textSignInOrCreateAccount = page.locator(
      "//p[text() = 'Sign In or Create an Account']"
    )
    this.email = page.locator("//input[@id = 'username']")
  }

  async isVisibleTextSignInOrCreateAccount() {
    return await this.textSignInOrCreateAccount.isVisible()
  }

  async setEmail(emailAddress) {
    await this.email.type(emailAddress)
  }
}
