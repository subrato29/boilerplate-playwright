import { TOKEN } from '../config/token'

const playwrightApiHelper = {
  post: async (request, endpoint, requestBody) => {
    return await request.fetch(endpoint, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOKEN}`,
      },
      data: requestBody,
    })
  },

  get: async (request, endpoint) => {
    return await request.fetch(endpoint, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOKEN}`,
      },
    })
  },

  put: async (request, endpoint, requestBody) => {
    return await request.fetch(endpoint, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOKEN}`,
      },
      data: requestBody,
    })
  },

  delete: async (request, endpoint) => {
    return await request.fetch(endpoint, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TOKEN}`,
      },
    })
  },
}

export default playwrightApiHelper
