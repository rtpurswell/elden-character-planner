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
    name: 'Str' | 'Dex' | 'Int' | 'Fai' | 'Arc' | '-'
    scaling?: 'S' | 'A' | 'B' | 'C' | 'D' | 'E'
  }[]
  requiredAttributes: {
    name: 'Str' | 'Dex'
    amount: number
  }[]
  category: string
  weight: number
  unique?: boolean
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
    scaling?: 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | '-'
  }[]
  requiredAttributes: {
    name: 'Str' | 'Dex'
    amount: number
  }[]
  category: string | null
  weight: number
}

export interface IItem {
  id: string
  name: string
  image: string | null
  description: string
  type: string
  effect?: string
}

export interface IIncantation {
  id: string
  name: string
  image: string | null
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

export interface IClassType {
  id: string
  name: string
  image: string
  description: string
  stats: {
    level: number
    vigor: number
    mind: number
    endurance: number
    strength: number
    dexterity: number
    intelligence: number
    faith: number
    arcane: number
  }
}

export interface IArmor {
  id: string
  name: string
  image: string | null
  description: string
  category: string
  dmgNegation: {
    Physical: number
    Strike: number
    Slash: number
    Pierce: number
    Magic: number
    Fire: number
    Light: number
    Holy: number
  }
  resistance: {
    Immunity: number
    Robustness: number
    Focus: number
    Vitality: number
    Poise: number
  }
  weight: number
}
export interface IAsh {
  id: string
  name: string
  image: string | null
  description: string
  affinity: string
  skill: string
}
export type IAffinityName =
  | 'Standard'
  | 'Heavy'
  | 'Keen'
  | 'Quality'
  | 'Magic'
  | 'Cold'
  | 'Fire'
  | 'Flame Art'
  | 'Lightning'
  | 'Sacred'
  | 'Poison'
  | 'Blood'
  | 'Occult'

export interface IAffinity {
  id: string
  name: IAffinityName
}
export interface IGreatRune {
  id: string
  name: string
  description: string
  effect: string
  image: string
}
export interface ITear {
  id: string
  name: string
  effect: string
  image: string
}
