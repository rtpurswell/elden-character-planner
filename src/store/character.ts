import { createSlice } from '@reduxjs/toolkit/dist/createSlice'

const initialState = {
  name: '',
  class: '',
  weapon1: '',
  weapon2: '',
  weapon3: '',
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
  vigor: 0,
  mind: 0,
  enurance: 0,
  strength: 0,
  dexterity: 0,
  intelligence: 0,
  faith: 0,
  arcane: 0,
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
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    nameUpdated: (state, action) => {
      state.name = action.payload
    },
    classUpdated: (state, action) => {
      state.class = action.payload
    },
    weapon1Updated: (state, action) => {
      state.weapon1 = action.payload
    },
    weapon2Updated: (state, action) => {
      state.weapon2 = action.payload
    },
    weapon3Updated: (state, action) => {
      state.weapon3 = action.payload
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
    vigorUpdated: (state, action) => {
      state.vigor = action.payload
    },
    mindUpdated: (state, action) => {
      state.mind = action.payload
    },
    enuranceUpdated: (state, action) => {
      state.enurance = action.payload
    },
    strengthUpdated: (state, action) => {
      state.strength = action.payload
    },
    dexterityUpdated: (state, action) => {
      state.dexterity = action.payload
    },
    intelligenceUpdated: (state, action) => {
      state.intelligence = action.payload
    },
    faithUpdated: (state, action) => {
      state.faith = action.payload
    },
    arcaneUpdated: (state, action) => {
      state.arcane = action.payload
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
  },
})

export default characterSlice.reducer
