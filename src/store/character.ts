import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './configureStore'
import Classes from '../data/classes.json'
import Weapon from '../data/weapons.json'
import Shield from '../data/shields.json'
import Armor from '../data/armors.json'
const Weapons = Weapon as { [key: string]: IWeapon }
const Shields = Shield as { [key: string]: IShield }
const Armors = Armor as { [key: string]: IArmor }

import { IArmor, IShield, IWeapon } from '../data/dataTypes'
export const initialState = {
  name: '',
  classType: '17f69874f7bl0i32gmqaffmbfral8f',
  mainHand1: '',
  mainHand2: '',
  mainHand3: '',
  offHand1: '',
  offHand2: '',
  offHand3: '',
  armor: '',
  helmet: '',
  hands: '',
  legs: '',
  talisman1: '',
  talisman2: '',
  talisman3: '',
  talisman4: '',
  item1: '',
  item2: '',
  item3: '',
  item4: '',
  item5: '',
  stats: {
    vigor: 0,
    mind: 0,
    endurance: 0,
    strength: 0,
    dexterity: 0,
    intelligence: 0,
    faith: 0,
    arcane: 0,
  },
  spell1: '',
  spell2: '',
  spell3: '',
  spell4: '',
  spell5: '',
  spell6: '',
  spell7: '',
  spell8: '',
  spell9: '',
  spell10: '',
  spell11: '',
  spell12: '',
  defaultStats: {
    vigor: 0,
    mind: 0,
    endurance: 0,
    strength: 0,
    dexterity: 0,
    intelligence: 0,
    faith: 0,
    arcane: 0,
    level: 5,
  },
  ashesOfWar: {
    mainHand1: {
      id: '',
      affinity: false,
    },
    mainHand2: {
      id: '',
      affinity: false,
    },
    mainHand3: {
      id: '',
      affinity: false,
    },
    offHand1: {
      id: '',
      affinity: false,
    },
    offHand2: {
      id: '',
      affinity: false,
    },
    offHand3: {
      id: '',
      affinity: false,
    },
  },
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    nameUpdated: (state, action) => {
      state.name = action.payload
    },
    classUpdated: (state, action) => {
      state.classType = action.payload
      state.defaultStats = Classes[action.payload as keyof typeof Classes].stats
    },
    mainHand1Updated: (state, action) => {
      state.mainHand1 = action.payload
    },
    mainHand2Updated: (state, action) => {
      state.mainHand2 = action.payload
    },
    mainHand3Updated: (state, action) => {
      state.mainHand3 = action.payload
    },
    offHand1Updated: (state, action) => {
      state.offHand1 = action.payload
    },
    offHand2Updated: (state, action) => {
      state.offHand2 = action.payload
    },
    offHand3Updated: (state, action) => {
      state.offHand3 = action.payload
    },
    armorUpdated: (state, action) => {
      state.armor = action.payload
    },
    helmetUpdated: (state, action) => {
      state.helmet = action.payload
    },
    handsUpdated: (state, action) => {
      state.hands = action.payload
    },
    legsUpdated: (state, action) => {
      state.legs = action.payload
    },
    talisman1Updated: (state, action) => {
      state.talisman1 = action.payload
    },
    talisman2Updated: (state, action) => {
      state.talisman2 = action.payload
    },
    talisman3Updated: (state, action) => {
      state.talisman3 = action.payload
    },
    talisman4Updated: (state, action) => {
      state.talisman4 = action.payload
    },
    item1Updated: (state, action) => {
      state.item1 = action.payload
    },
    item2Updated: (state, action) => {
      state.item2 = action.payload
    },
    item3Updated: (state, action) => {
      state.item3 = action.payload
    },
    item4Updated: (state, action) => {
      state.item4 = action.payload
    },
    item5Updated: (state, action) => {
      state.item5 = action.payload
    },
    statUpdated: (state, action) => {
      state.stats[action.payload.stat as keyof typeof state.stats] =
        action.payload.value
    },
    statIncremented: (state, action) => {
      if (
        state.stats[action.payload as keyof typeof state.stats] +
          1 +
          Number(
            state.defaultStats[
              action.payload as keyof typeof state.defaultStats
            ],
          ) <=
        99
      ) {
        state.stats[action.payload as keyof typeof state.stats] += 1
      }
    },
    statDecremented: (state, action) => {
      if (state.stats[action.payload as keyof typeof state.stats] - 1 >= 0) {
        state.stats[action.payload as keyof typeof state.stats] -= 1
      }
    },
    spell1Updated: (state, action) => {
      state.spell1 = action.payload
    },
    spell2Updated: (state, action) => {
      state.spell2 = action.payload
    },
    spell3Updated: (state, action) => {
      state.spell3 = action.payload
    },
    spell4Updated: (state, action) => {
      state.spell4 = action.payload
    },
    spell5Updated: (state, action) => {
      state.spell5 = action.payload
    },
    spell6Updated: (state, action) => {
      state.spell6 = action.payload
    },
    spell7Updated: (state, action) => {
      state.spell7 = action.payload
    },
    spell8Updated: (state, action) => {
      state.spell8 = action.payload
    },
    spell9Updated: (state, action) => {
      state.spell9 = action.payload
    },
    spell10Updated: (state, action) => {
      state.spell10 = action.payload
    },
    spell11Updated: (state, action) => {
      state.spell11 = action.payload
    },
    spell12Updated: (state, action) => {
      state.spell12 = action.payload
    },
    defaultStatsUpdated: (state, action) => {
      state.defaultStats = Classes[state.classType as keyof typeof Classes]
        ?.stats as any
    },
    ashOfWarUpdated: (state, action) => {
      state.ashesOfWar[action.payload.key as keyof typeof state.ashesOfWar] = {
        id: action.payload.id,
        affinity: action.payload.affinity,
      }
    },
  },
})

export const {
  nameUpdated,
  classUpdated,
  mainHand1Updated,
  mainHand2Updated,
  mainHand3Updated,
  offHand1Updated,
  offHand2Updated,
  offHand3Updated,
  armorUpdated,
  helmetUpdated,
  handsUpdated,
  legsUpdated,
  talisman1Updated,
  talisman2Updated,
  talisman3Updated,
  talisman4Updated,
  item1Updated,
  item2Updated,
  item3Updated,
  item4Updated,
  item5Updated,
  statUpdated,
  statIncremented,
  statDecremented,
  spell1Updated,
  spell2Updated,
  spell3Updated,
  spell4Updated,
  spell5Updated,
  spell6Updated,
  spell7Updated,
  spell8Updated,
  spell9Updated,
  spell10Updated,
  spell11Updated,
  spell12Updated,
  defaultStatsUpdated,
  ashOfWarUpdated,
} = characterSlice.actions

//Selectors
export const getCharacterLevel = (state: RootState) => {
  let totalLevel = state.character.defaultStats.level
  const statArray = Object.values(state.character.stats)
  statArray.forEach((stat) => {
    totalLevel += stat
  })

  return totalLevel
}
export const getCharacterWeight = (state: RootState) => {
  const getItemWeight = (
    itemId: string,
    data: { [key: string]: IArmor | IShield | IWeapon }[],
  ) => {
    if (data[0][itemId]) return data[0][itemId as keyof typeof data[0]].weight
    else if (data[1][itemId])
      return data[1][itemId as keyof typeof data[1]].weight
    return 0
  }
  let weightArray: number[] = []
  if (state.character.mainHand1 !== '') {
    weightArray.push(
      getItemWeight(state.character.mainHand1, [Weapons, Shields]),
    )
  }
  if (state.character.mainHand2 !== '') {
    weightArray.push(
      getItemWeight(state.character.mainHand2, [Weapons, Shields]),
    )
  }
  if (state.character.mainHand3 !== '') {
    weightArray.push(
      getItemWeight(state.character.mainHand3, [Weapons, Shields]),
    )
  }
  if (state.character.offHand1 !== '') {
    weightArray.push(
      getItemWeight(state.character.offHand1, [Weapons, Shields]),
    )
  }
  if (state.character.offHand2 !== '') {
    weightArray.push(
      getItemWeight(state.character.mainHand1, [Weapons, Shields]),
    )
  }
  if (state.character.offHand3 !== '') {
    weightArray.push(
      getItemWeight(state.character.offHand2, [Weapons, Shields]),
    )
  }
  if (state.character.armor !== '') {
    weightArray.push(getItemWeight(state.character.armor, [Armors]))
  }
  if (state.character.helmet !== '') {
    weightArray.push(getItemWeight(state.character.helmet, [Armors]))
  }
  if (state.character.hands !== '') {
    weightArray.push(getItemWeight(state.character.hands, [Armors]))
  }
  if (state.character.legs !== '') {
    weightArray.push(getItemWeight(state.character.legs, [Armors]))
  }

  return Number(weightArray.reduce((a, b) => a + b, 0).toFixed(1))
}
export const getCharacterMaxWeight = (state: RootState) => {
  const totalendurance =
    state.character.stats.endurance + state.character.defaultStats.endurance
  //below is the formula for calculating max equip load in elden ring
  //   Endurance Level 1 - 25 --> 45 + 27*((Lvl - 8) / 17)
  // Endurance Level 26 - 60 --> 72 + 48*(((Lvl - 25) / 35)^1.1)
  // Endurance Level 61 - 99 --> 120 + 40*((Lvl - 60) / 39)
  //Only the first decimal point is kept.
  let totalWeight = 0
  if (totalendurance <= 25) {
    totalWeight = 45 + 27 * ((totalendurance - 8) / 17)
  } else if (totalendurance <= 60) {
    totalWeight = 72 + 48 * ((totalendurance - 25) / 35) ** 1.1
  } else if (totalendurance <= 99) {
    totalWeight = 120 + 40 * ((totalendurance - 60) / 39)
  }
  return Number(totalWeight.toFixed(1))
}
export const getCharacterStats = (state: RootState) => {
  const totalStats = { ...state.character.defaultStats }
  Object.keys(state.character.stats).forEach((statKey) => {
    if (statKey === 'level') return
    totalStats[statKey as keyof typeof totalStats] +=
      state.character.stats[statKey as keyof typeof state.character.stats]
  })
  return totalStats
}
export const getCharacterHP = (state: RootState) => {
  const totalVigor =
    state.character.stats.vigor + state.character.defaultStats.vigor
  /* 
  Formula for calculating HP in elden ring
  Vigor Level 1 - 25 --> 300 + 500*(((Lvl - 1) / 24)^1.5)
Vigor Level 26 - 40 --> 800 + 650*(((Lvl - 25) / 15)^1.1)
Vigor Level 41 - 60 --> 1450 + 450*(1 - (1 - ((Lvl - 40) / 20))^1.2)
Vigor Level 61 - 99 --> 1900 + 200*(1 - (1 - ((Lvl - 60) / 39))^1.2)
  */
  let totalHP = 0
  if (totalVigor <= 25) {
    totalHP = 300 + 500 * ((totalVigor - 1) / 24) ** 1.5
  } else if (totalVigor <= 40) {
    totalHP = 800 + 650 * ((totalVigor - 25) / 15) ** 1.1
  } else if (totalVigor <= 60) {
    totalHP = 1450 + 450 * (1 - (1 - (totalVigor - 40) / 20) ** 1.2)
  } else if (totalVigor <= 99) {
    totalHP = 1900 + 200 * (1 - (1 - (totalVigor - 60) / 39) ** 1.2)
  }
  return Math.floor(totalHP)
}
export const getCharacterFP = (state: RootState) => {
  const totalMind =
    state.character.stats.mind + state.character.defaultStats.mind
  /*
  Formula for calculating FP in elden ring
  Level 1 - 15 --> 50 + 45*((Lvl - 1) / 14)
Level 16 - 35 --> 95 + 105*((Lvl - 15) / 20)
Level 36 - 60 --> 200 + 150*(1 - (1 - ((Lvl - 35) / 25))^1.2))
Level 61 - 99 --> 350 + 100*((Lvl - 60) / 39) */
  let totalFP = 0
  if (totalMind <= 15) {
    totalFP = 50 + 45 * ((totalMind - 1) / 14)
  } else if (totalMind <= 35) {
    totalFP = 95 + 105 * ((totalMind - 15) / 20)
  } else if (totalMind <= 60) {
    totalFP = 200 + 150 * (1 - (1 - (totalMind - 35) / 25) ** 1.2)
  } else if (totalMind <= 99) {
    totalFP = 350 + 100 * ((totalMind - 60) / 39)
  }
  return Math.floor(totalFP)
}
export const getCharacterStamina = (state: RootState) => {
  const totalEndurance =
    state.character.stats.endurance + state.character.defaultStats.endurance
  /*
  Formula for calculating stamina in elden ring
  Level 1 - 15: 80 + 25*((Lvl - 1) / 14)
Level 16 - 35: 105 + 25*((Lvl - 15) / 15)
Level 36 - 60: 130 + 25*((Lvl - 30) / 20)
Level 61 - 99: 155 + 15*((Lvl - 50) / 49)
*/
  let totalStamina = 0
  if (totalEndurance <= 15) {
    totalStamina = 80 + 25 * ((totalEndurance - 1) / 14)
  } else if (totalEndurance <= 35) {
    totalStamina = 105 + 25 * ((totalEndurance - 15) / 15)
  } else if (totalEndurance <= 60) {
    totalStamina = 130 + 25 * ((totalEndurance - 30) / 20)
  } else if (totalEndurance <= 99) {
    totalStamina = 155 + 15 * ((totalEndurance - 50) / 49)
  }
  return Math.floor(totalStamina)
}

export default characterSlice.reducer
