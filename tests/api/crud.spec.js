import { expect, test } from '@playwright/test'
import randomUtils from '../../utils/randomUtils'
import { urls } from '../../support/readDataFromJson'
import { PlaywrightApiHelper } from '../../utils/playwrightApiHelper'

test.describe('CRUD operation', () => {
  let endpoint = `${urls.baseUrl}${urls.users}`
  const random = randomUtils.generateAlphaNumericNoOfCertainLength(6)
  let responseId = ''

  test('POST call', async ({ request }) => {
    const requestBody = {
      name: `playwright_${random}`,
      email: `${random}@email.com`,
      gender: 'male',
      status: 'active',
    }
    const response = await new PlaywrightApiHelper().post(
      request,
      endpoint,
      requestBody
    )
    expect(response.status()).toBe(201)
    const responseBody = await response.json()
    responseId = responseBody.id
    console.log(JSON.stringify(responseBody))
  })

  test('GET call', async ({ request }) => {
    endpoint = `${endpoint}/${responseId}`
    const response = await new PlaywrightApiHelper().get(request, endpoint)
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    responseId = responseBody.id
  })

  test('PUT call', async ({ request }) => {
    const requestBody = {
      name: `playwright_${random}_Updated`,
      email: `${random}@email.com`,
      gender: 'male',
      status: 'active',
    }
    const response = await new PlaywrightApiHelper().put(
      request,
      endpoint,
      requestBody
    )
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    console.log(JSON.stringify(responseBody))
  })

  test('DELETE call', async ({ request }) => {
    const response = await new PlaywrightApiHelper().delete(request, endpoint)
    expect(response.status()).toBe(204)
  })

  test('GET call to verify successful DELETE', async ({ request }) => {
    const response = await new PlaywrightApiHelper().get(request, endpoint)
    expect(response.status()).toBe(404)
    const responseBody = await response.json()
    expect(responseBody.message).toBe('Resource not found')
  })
})
