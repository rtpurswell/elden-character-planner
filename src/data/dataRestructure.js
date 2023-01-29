const Original = require('./tears.json')
// const fs = require('fs')
// const OutputObject = {}

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
// const weaponLength = Object.keys(Incantations).length
// const originalKeys = Object.keys(Original)
// const newKeys = generateKeys(originalKeys.length + weaponLength)
// originalKeys.forEach((key, index) => {
//   OutputObject[newKeys[index + weaponLength]] = Original[key]
//   OutputObject[newKeys[index + weaponLength]].id = newKeys[index + weaponLength]
// })

// const newKeys = generateKeys(Original.length)
// Original.forEach((item, index) => {
//   OutputObject[newKeys[index]] = { ...item, id: newKeys[index] }
// })

// fs.writeFileSync(
//   './src/data/tears2.json',
//   JSON.stringify(OutputObject, null, 2),
// )
console.log(Object.keys(Original).length)
