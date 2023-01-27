const Original = require('./shields.json')
const Weapons = require('./weapons.json')
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
const weaponLength = Object.keys(Weapons).length
const originalKeys = Object.keys(Original)
const newKeys = generateKeys(originalKeys.length + weaponLength)
originalKeys.forEach((key, index) => {
  OutputObject[newKeys[index + weaponLength]] = Original[key]
  OutputObject[newKeys[index + weaponLength]].id = newKeys[index + weaponLength]
})

fs.writeFileSync(
  './src/data/shields2.json',
  JSON.stringify(OutputObject, null, 2),
)
