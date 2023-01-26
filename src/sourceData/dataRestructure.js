const Original = require('./armors.json')
const fs = require('fs')
const OutputObject = {}

Original.forEach((weapon) => {
  // Object.keys(weapon.stats).forEach((key) => {
  //   weapon.stats[key] = Number(weapon.stats[key])
  // })
  let resObject = {}
  let negObject = {}
  weapon.resistance.forEach((resistance) => {
    resObject[resistance.name] = resistance.amount
  })
  weapon.dmgNegation.forEach((dmgNegation) => {
    negObject[dmgNegation.name] = dmgNegation.amount
  })

  weapon.resistance = resObject
  weapon.dmgNegation = negObject
  OutputObject[weapon.id] = weapon
})

fs.writeFileSync(
  './src/data/armors.json',
  JSON.stringify(OutputObject, null, 2),
)
