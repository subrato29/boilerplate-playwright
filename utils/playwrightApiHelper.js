const dotenv = require('dotenv');

dotenv.config();

const playwrightApiHelper = {
  post: async (request, endpoint, requestBody) => {
    return await request.fetch(endpoint, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.TOKEN}`,
      },
      data: requestBody,
    })
  },

  get: async (request, endpoint) => {
    return await request.fetch(endpoint, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.TOKEN}`,
      },
    })
  },

  put: async (request, endpoint, requestBody) => {
    return await request.fetch(endpoint, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.TOKEN}`,
      },
      data: requestBody,
    })
  },

  delete: async (request, endpoint) => {
    return await request.fetch(endpoint, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.TOKEN}`,
      },
    })
  },
}

export default playwrightApiHelper
