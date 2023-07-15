import { expect, test } from '@playwright/test'
import randomUtils from '../../utils/randomUtils'
import { TOKEN } from '../../config/token'
import { urls } from '../../support/readDataFromJson'

test.describe('Verifying champion clothing brand outlet page', () => {
  let endpoint = `${urls.baseUrl}${urls.users}`
  const random = randomUtils.generateAlphaNumericNoOfCertainLength(6)
  let responseId = ''

  test('POST call', async ({ request }) => {
    const response = await request.fetch(endpoint, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOKEN}`,
      },
      data: {
        name: `playwright_${random}`,
        email: `${random}@email.com`,
        gender: 'male',
        status: 'active',
      },
    })
    expect(response.status()).toBe(201)
    const responseBody = await response.json()
    responseId = responseBody.id
    console.log(JSON.stringify(responseBody))
  })

  test('GET call', async ({ request }) => {
    endpoint = `${endpoint}/${responseId}`
    const response = await request.fetch(endpoint, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOKEN}`,
      },
    })
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    responseId = responseBody.id
  })

  test('PUT call', async ({ request }) => {
    const response = await request.fetch(endpoint, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOKEN}`,
      },
      data: {
        name: `playwright_${random}_Updated`,
        email: `${random}@email.com`,
        gender: 'male',
        status: 'active',
      },
    })
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    console.log(JSON.stringify(responseBody))
  })

  test('DELETE call', async ({ request }) => {
    const response = await request.fetch(endpoint, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOKEN}`,
      },
    })
    expect(response.status()).toBe(204)
  })

  test('GET call to verify successful DELETE', async ({ request }) => {
    const response = await request.fetch(endpoint, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOKEN}`,
      },
    })
    expect(response.status()).toBe(404)
    const responseBody = await response.json()
    expect(responseBody.message).toBe('Resource not found')
  })
})
