import EquipItem from './Equipment/EquipItem'
import {
  helmetUpdated,
  armorUpdated,
  legsUpdated,
  handsUpdated,
} from '../store/character'
import type { IArmor } from '../data/dataTypes'
import Armors from '../data/armors.json'
let Legs = {} as { [key: string]: IArmor }
let Helmets = {} as { [key: string]: IArmor }
let Hands = {} as { [key: string]: IArmor }
let Chest = {} as { [key: string]: IArmor }
Object.keys(Armors).forEach((key) => {
  if (Armors[key as keyof typeof Armors].category === 'Leg Armor') {
    Legs[key] = Armors[key as keyof typeof Armors]
  }
  if (Armors[key as keyof typeof Armors].category === 'Helm') {
    Helmets[key] = Armors[key as keyof typeof Armors]
  }
  if (Armors[key as keyof typeof Armors].category === 'Gauntlets') {
    Hands[key] = Armors[key as keyof typeof Armors]
  }
  if (Armors[key as keyof typeof Armors].category === 'Chest Armor') {
    Chest[key] = Armors[key as keyof typeof Armors]
  }
})

function Armor() {
  return (
    <div className="col-span-4 grid grid-cols-4 gap-2">
      <EquipItem
        type="helmet"
        label="Helm"
        data={[
          {
            label: 'Helms',
            value: Helmets,
            placeholder: '/images/default/helmet.png',
          },
        ]}
        actionCreator={helmetUpdated}
        selectorFunction={(state) => state.character.helmet}
      />
      <EquipItem
        type="armor"
        label="Chest Armor"
        data={[
          {
            label: 'Chest Armor',
            value: Armors,
            placeholder: '/images/default/armor.png',
          },
        ]}
        actionCreator={armorUpdated}
        selectorFunction={(state) => state.character.armor}
      />
      <EquipItem
        type="hands"
        label="Glauntlets"
        data={[
          {
            label: 'Gloves',
            value: Hands,
            placeholder: '/images/default/hands.png',
          },
        ]}
        actionCreator={handsUpdated}
        selectorFunction={(state) => state.character.hands}
      />
      <EquipItem
        type="legs"
        label="Leg Armor"
        data={[
          {
            label: 'Leg Armor',
            value: Legs,
            placeholder: '/images/default/legs.png',
          },
        ]}
        actionCreator={legsUpdated}
        selectorFunction={(state) => state.character.legs}
      />
    </div>
  )
}

export default Armor
