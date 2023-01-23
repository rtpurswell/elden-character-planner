export interface IWeapon {
  id: string
  name: string
  image: string
  description: string
  attack: {
    name: 'Phy' | 'Mag' | 'Fire' | 'Ligt' | 'Holy' | 'Crit'
    amount: number
  }[]
  defence: {
    name: 'Phy' | 'Mag' | 'Fire' | 'Ligt' | 'Holy' | 'Boost'
    amount: number
  }[]
  scalesWith: {
    name: 'Str' | 'Dex' | 'Int' | 'Fai'
    scaling: 'S' | 'A' | 'B' | 'C' | 'D' | 'E'
  }[]
  requiredAttributes: {
    name: 'Str' | 'Dex'
    amount: number
  }[]
  category: string
  weight: number
}

export interface ITalisman {
  id: string
  name: string
  image: string
  description: string
  effect: string
}

export interface ISorcery {
  id: string
  name: string
  image: string
  description: string
  type: string
  cost: number
  slots: number
  effects: string
  requires: { name: 'Intelegence' | 'Faith' | 'Arcane'; amount: number }[]
}

export interface IShield {
  id: string
  name: string
  image: string
  description: string
  attack: {
    name: 'Phy' | 'Mag' | 'Fire' | 'Ligt' | 'Holy' | 'Crit'
    amount: number
  }[]
  defence: {
    name: 'Phy' | 'Mag' | 'Fire' | 'Ligt' | 'Holy' | 'Boost'
    amount: number
  }[]
  scalesWith: {
    name: 'Str' | 'Dex' | 'Int' | 'Fai'
    scaling: 'S' | 'A' | 'B' | 'C' | 'D' | 'E'
  }[]
  requiredAttributes: {
    name: 'Str' | 'Dex'
    amount: number
  }[]
  category: string
  weight: number
}

export interface IItem {
  id: string
  name: string
  image: string
  description: string
  type: string
  effect: string
}

export interface IIncantation {
  id: string
  name: string
  image: string
  description: string
  type: string
  cost: number
  slots: number
  effects: string
  requires: {
    name:
      | 'Intelligence'
      | 'Faith'
      | 'Arcane'
      | 'Vigor'
      | 'Mind'
      | 'Endurance'
      | 'Strength'
      | 'Dexterity'
    amount: number
  }[]
}
// please wirte a typescript interface for this object

export interface IClassType {
  id: string
  name: string
  image: string
  description: string
  stats: {
    level: string
    vigor: string
    mind: string
    endurance: string
    strength: string
    dexterity: string
    intelligence: string
    faith: string
    arcane: string
  }
}

export interface IArmor {
  id: string
  name: string
  image: string
  description: string
  category: string
  dmgNegation: {
    name:
      | 'Phy'
      | 'Mag'
      | 'Fire'
      | 'Ligt'
      | 'Holy'
      | 'Strike'
      | 'Slash'
      | 'Pierce'

    amount: number
  }[]
  resistance: {
    name: 'Immunity' | 'Robustness' | 'Focus' | 'Vitality' | 'Poise'
    amount: number
  }[]
  weight: number
}
