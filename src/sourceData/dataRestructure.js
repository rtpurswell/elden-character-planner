const Original = require('./ashes.json')
const fs = require('fs')
const OutputObject = {}

Original.forEach((weapon) => {
  // Object.keys(weapon.stats).forEach((key) => {
  //   weapon.stats[key] = Number(weapon.stats[key])
  // })
  weapon.name = weapon.name.replace('Ash Of War: ', '')
  console.log(weapon.name)
  OutputObject[weapon.id] = weapon
})

fs.writeFileSync('./src/data/ashes.json', JSON.stringify(OutputObject, null, 2))
