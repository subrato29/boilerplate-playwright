import { readFileSync } from 'fs'
import { resolve } from 'path'

const testDataJSON = JSON.parse(
  readFileSync(resolve(__dirname, '../testData/data.json'))
)

export default testDataJSON
