const Original = require('./classes.json')
const fs = require('fs')
const OutputObject = {}

Original.forEach((weapon) => {
  Object.keys(weapon.stats).forEach((key) => {
    weapon.stats[key] = Number(weapon.stats[key])
  })
  OutputObject[weapon.id] = weapon
})

fs.writeFileSync(
  './src/data/classes.json',
  JSON.stringify(OutputObject, null, 2),
)
