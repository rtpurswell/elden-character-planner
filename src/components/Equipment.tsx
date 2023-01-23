import { IArmor, IWeapon, IShield, ITalisman, IItem } from '../data/dataTypes'
import {
  armorUpdated,
  handsUpdated,
  helmetUpdated,
  item1Updated,
  legsUpdated,
  mainHand1Updated,
  mainHand2Updated,
  mainHand3Updated,
  offHand1Updated,
  offHand2Updated,
  offHand3Updated,
  talisman1Updated,
  talisman2Updated,
  talisman3Updated,
  talisman4Updated,
  item2Updated,
  item3Updated,
  item4Updated,
  item5Updated,
} from '../store/character'
import H2 from './common/H2'
import EquipContainer from './EquipContainer'
import EquipItem from './EquipItem'
import WeaponData from '../data/weapons.json'
import ShieldData from '../data/shields.json'
import ArmorData from '../data/armors.json'
import TalismanData from '../data/talismans.json'
import ItemData from '../data/items.json'

function Equipment() {
  let Legs: any = {}
  let Helmets: any = {}
  let Hands: any = {}
  let Armors: any = {}
  Object.keys(ArmorData).forEach((key) => {
    if (ArmorData[key as keyof typeof ArmorData].category === 'Leg Armor') {
      Legs[key] = ArmorData[key as keyof typeof ArmorData]
    }
    if (ArmorData[key as keyof typeof ArmorData].category === 'Helm') {
      Helmets[key] = ArmorData[key as keyof typeof ArmorData]
    }
    if (ArmorData[key as keyof typeof ArmorData].category === 'Gauntlets') {
      Hands[key] = ArmorData[key as keyof typeof ArmorData]
    }
    if (ArmorData[key as keyof typeof ArmorData].category === 'Chest Armor') {
      Armors[key] = ArmorData[key as keyof typeof ArmorData]
    }
  })

  const Weapons = WeaponData as any
  const Shields = ShieldData as any
  const Talismans = TalismanData as any
  const Items = ItemData as any

  return (
    <div className="w-fit flex flex-col gap-2 p-3 rounded">
      <H2>Equipment</H2>
      <EquipContainer>
        <EquipItem
          type="mainHand"
          data={[
            { label: 'Weapons', value: Weapons },
            { label: 'Shields', value: Shields },
          ]}
          actionCreator={mainHand1Updated}
          storeKey="mainHand1"
        />
        <EquipItem
          type="mainHand"
          data={[
            { label: 'Weapons', value: Weapons },
            { label: 'Shields', value: Shields },
          ]}
          actionCreator={mainHand2Updated}
          storeKey="mainHand2"
        />
        <EquipItem
          type="mainHand"
          data={[
            { label: 'Weapons', value: Weapons },
            { label: 'Shields', value: Shields },
          ]}
          actionCreator={mainHand3Updated}
          storeKey="mainHand3"
        />
      </EquipContainer>
      <EquipContainer>
        <EquipItem
          type="offHand"
          data={[
            { label: 'Shields', value: Shields },
            { label: 'Weapons', value: Weapons },
          ]}
          actionCreator={offHand1Updated}
          storeKey="offHand1"
        />
        <EquipItem
          type="offHand"
          data={[
            { label: 'Shields', value: Shields },
            { label: 'Weapons', value: Weapons },
          ]}
          actionCreator={offHand2Updated}
          storeKey="offHand2"
        />
        <EquipItem
          type="offHand"
          data={[
            { label: 'Shields', value: Shields },
            { label: 'Weapons', value: Weapons },
          ]}
          actionCreator={offHand3Updated}
          storeKey="offHand3"
        />
      </EquipContainer>
      <EquipContainer>
        <EquipItem
          type="helmet"
          data={[{ label: 'Helms', value: Helmets }]}
          actionCreator={helmetUpdated}
          storeKey="helmet"
        />
        <EquipItem
          type="armor"
          data={[{ label: 'Chest Armor', value: Armors }]}
          actionCreator={armorUpdated}
          storeKey="armor"
        />
        <EquipItem
          type="hands"
          data={[{ label: 'Gloves', value: Hands }]}
          actionCreator={handsUpdated}
          storeKey="hands"
        />
        <EquipItem
          type="legs"
          data={[{ label: 'Leg Armor', value: Legs }]}
          actionCreator={legsUpdated}
          storeKey="legs"
        />
      </EquipContainer>
      <EquipContainer>
        <EquipItem
          type="talisman"
          data={[{ label: 'Talismans', value: Talismans }]}
          actionCreator={talisman1Updated}
          storeKey="talisman1"
        />
        <EquipItem
          type="talisman"
          data={[{ label: 'Talismans', value: Talismans }]}
          actionCreator={talisman2Updated}
          storeKey="talisman2"
        />
        <EquipItem
          type="talisman"
          data={[{ label: 'Talismans', value: Talismans }]}
          actionCreator={talisman3Updated}
          storeKey="talisman3"
        />
        <EquipItem
          type="talisman"
          data={[{ label: 'Talismans', value: Talismans }]}
          actionCreator={talisman4Updated}
          storeKey="talisman4"
        />
      </EquipContainer>
      <EquipContainer>
        <EquipItem
          type="item"
          data={[{ label: 'Items', value: Items }]}
          actionCreator={item1Updated}
          storeKey="item1"
        />
        <EquipItem
          type="item"
          data={[{ label: 'Items', value: Items }]}
          actionCreator={item2Updated}
          storeKey="item2"
        />
        <EquipItem
          type="item"
          data={[{ label: 'Items', value: Items }]}
          actionCreator={item3Updated}
          storeKey="item3"
        />
        <EquipItem
          type="item"
          data={[{ label: 'Items', value: Items }]}
          actionCreator={item4Updated}
          storeKey="item4"
        />
        <EquipItem
          type="item"
          data={[{ label: 'Items', value: Items }]}
          actionCreator={item5Updated}
          storeKey="item5"
        />
      </EquipContainer>
    </div>
  )
}

export default Equipment
