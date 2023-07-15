import { expect, test } from '@playwright/test'
import randomUtils from '../../utils/randomUtils'
import { TOKEN } from '../../config/token'

test.describe('Verifying champion clothing brand outlet page', () => {
  const ENDPOINT = 'https://gorest.co.in/public/v2/users'
  const random = randomUtils.generateAlphaNumericNoOfCertainLength(6)
  let responseId = ''

  test('Verifying search functionality and add to cart items', async ({
    request,
  }) => {
    const response = await request.fetch(ENDPOINT, {
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
    console.log('Response body: ' + responseId)
  })
})
