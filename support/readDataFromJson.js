const fs = require('fs')
const path = require('path')

const testDataJSON = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../testData/data.json'))
)

module.exports = testDataJSON
