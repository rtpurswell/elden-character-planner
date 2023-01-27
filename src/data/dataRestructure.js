const Original = require('./weapons.json')
const fs = require('fs')
const OutputObject = {}

function generateKeys(amountOfKeys) {
  const keyOptions =
    'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789'
  let keyArray = []
  for (let i = 0; i < keyOptions.length; i++) {
    for (let j = 0; j < keyOptions.length; j++) {
      keyArray.push(keyOptions[i] + keyOptions[j])
      if (keyArray.length === amountOfKeys) {
        return keyArray
      }
    }
  }
}
const originalKeys = Object.keys(Original)
const newKeys = generateKeys(originalKeys.length)
originalKeys.forEach((key, index) => {
  OutputObject[newKeys[index]] = Original[key]
  OutputObject[newKeys[index]].id = newKeys[index]
})

fs.writeFileSync(
  './src/data/weapons.json',
  JSON.stringify(OutputObject, null, 2),
)
