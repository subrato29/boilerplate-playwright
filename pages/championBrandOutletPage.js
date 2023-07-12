const waitHelperUtils = require('../utils/waitHelperUtils')
import { PlaywrightHelper } from '../utils/playwrightHelper'

export class ChampionBrandOutletPage {
  constructor(page) {
    this.page = page
    this.searchTextbox = page.locator(`//input[@name = '_bkw']`)
    this.searchResultFound = `//h2[text() = '1 Results']`
    this.productLink = page.locator(`//a[@class = 's-item__link']`)
    this.minPrice = page.locator(`//input[@aria-label = 'Minimum Value']`)
    this.maxPrice = page.locator(`//input[@aria-label = 'Maximum Value']`)
    this.btnSubmitPriceRange = page.locator(
      `//button[@aria-label = 'Submit price range']`
    )
    this.itemPrices = `//span[@class = 's-item__price']`
    this.btnToChangeViewOfItems = page.locator(
      `//div[contains(@class, 'srp-controls__control')]//button[@class = 'fake-menu-button__button btn']`
    )
    this.listView = page.locator(`//span[text() = 'List View']/..`)
    this.galleryView = page.locator(`//span[text() = 'Gallery View']/..`)
    this.listViewOfItems = `//ul[@class = 'b-list__items_nofooter']`
    this.galleryViewOfItems = `//ul[contains(@class, 'b-list__items_nofooter srp-results')][contains(@class, grid)]`
    this.btnListView = `//button[@class = 'fake-menu-button__button btn'][@aria-label = 'View: List View']`
    this.btnGalleryView = `//button[@class = 'fake-menu-button__button btn'][@aria-label = 'View: Gallery View']`
    this.itemsInGalleryView = page.$$(`//li[@class = 's-item s-item--large']`)
    this.lnkToNavigateNextPage = page.locator(
      `//a[@class = 'pagination__next icon-link']`
    )
  }

  async setSearch(value) {
    await this.searchTextbox.type(value)
  }

  async waitForSearchResultFound() {
    await waitHelperUtils.waitForSelector(
      this.page,
      this.searchResultFound,
      5000
    )
  }

  async clickProductLink() {
    await this.productLink.click()
  }

  async setMinPrice(price) {
    await this.minPrice.type(price)
  }

  async setMaxPrice(price) {
    await this.maxPrice.type(price)
  }

  async clickBtnSubmitPriceRange() {
    await this.btnSubmitPriceRange.click()
  }

  async getItemPricesSortedInAscendingOrder() {
    let prices = await new PlaywrightHelper().getInnerTextOfAllElements(
      this.page,
      this.itemPrices
    )
    prices = prices.map((price) => price.slice(1))
    return prices.sort((a, b) => a - b)
  }

  async clickBtnToChangeViewOfItems() {
    await this.btnToChangeViewOfItems.click()
  }

  async clickListView() {
    await this.listView.click()
  }

  async clickGalleryView() {
    await this.galleryView.click()
  }

  async waitForListViewOfItemsToAppear() {
    await waitHelperUtils.waitForSelector(this.page, this.listViewOfItems)
  }

  async waitForGalleryViewOfItemsToAppear() {
    await waitHelperUtils.waitForSelector(this.page, this.galleryViewOfItems)
  }

  async waitForBtnListViewToAppear() {
    await waitHelperUtils.waitForSelector(this.page, this.btnListView)
  }

  async waitForBtnGalleryViewToAppear() {
    await waitHelperUtils.waitForSelector(this.page, this.btnGalleryView)
  }

  async clickLnkToNavigateNextPage() {
    await this.lnkToNavigateNextPage.click()
  }

  async countOfItemsLoadedInAPage() {
    const elements = await this.itemsInGalleryView
    return elements.length
  }
}
