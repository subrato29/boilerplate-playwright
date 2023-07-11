import { readFileSync } from 'fs'
import { resolve } from 'path'

const testDataJSON = JSON.parse(
  readFileSync(resolve(__dirname, '../testData/data.json'))
)

const urls = JSON.parse(readFileSync(resolve(__dirname, '../config/urls.json')))

export { testDataJSON, urls }
