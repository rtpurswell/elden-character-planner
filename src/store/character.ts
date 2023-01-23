import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './configureStore'
import Classes from '../data/classes.json'
const initialState = {
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
}

export const getStats = (state: RootState) => {
  const defaultstats = state.character.defaultStats
  const stats = { ...state.character.stats }

  for (const [key, value] of Object.entries(stats)) {
    stats[key as keyof typeof stats] =
      value + Number(defaultstats[key as keyof typeof defaultstats])
  }
  return stats
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
      state.defaultStats = Classes.find((x) => x.id === action.payload)
        ?.stats as any
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
      state.defaultStats = Classes.find((x) => x.id === state.classType)
        ?.stats as any
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
} = characterSlice.actions

export default characterSlice.reducer
