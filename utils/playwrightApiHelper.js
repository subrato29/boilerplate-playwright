import { TOKEN } from '../config/token'

export class PlaywrightApiHelper {
  async post(request, endpoint, requestBody) {
    return await request.fetch(endpoint, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOKEN}`,
      },
      data: requestBody,
    })
  }

  async get(request, endpoint) {
    return await request.fetch(endpoint, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOKEN}`,
      },
    })
  }

  async put(request, endpoint, requestBody) {
    return await request.fetch(endpoint, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOKEN}`,
      },
      data: requestBody,
    })
  }

  async delete(request, endpoint) {
    return await request.fetch(endpoint, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOKEN}`,
      },
    })
  }
}
