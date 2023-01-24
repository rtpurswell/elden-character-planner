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
    <div className="w-full flex flex-col gap-2 p-3 rounded">
      <H2>Equipment</H2>
      <EquipContainer>
        <EquipItem
          type="mainHand"
          label="Main Hand"
          data={[
            {
              label: 'Weapons',
              value: Weapons,
              placeholder: '/images/default/weapon.png',
            },
            {
              label: 'Shields',
              value: Shields,
              placeholder: '/images/default/off-hand.png',
            },
          ]}
          actionCreator={mainHand1Updated}
          storeKey="mainHand1"
        />
        <EquipItem
          type="mainHand"
          label="Main Hand 2"
          data={[
            {
              label: 'Weapons',
              value: Weapons,
              placeholder: '/images/default/weapon.png',
            },
            {
              label: 'Shields',
              value: Shields,
              placeholder: '/images/default/off-hand.png',
            },
          ]}
          actionCreator={mainHand2Updated}
          storeKey="mainHand2"
        />
        <EquipItem
          type="mainHand"
          label="Main Hand 3"
          data={[
            {
              label: 'Weapons',
              value: Weapons,
              placeholder: '/images/default/weapon.png',
            },
            {
              label: 'Shields',
              value: Shields,
              placeholder: '/images/default/off-hand.png',
            },
          ]}
          actionCreator={mainHand3Updated}
          storeKey="mainHand3"
        />
      </EquipContainer>
      <EquipContainer>
        <EquipItem
          type="offHand"
          label="Off Hand"
          data={[
            {
              label: 'Shields',
              value: Shields,
              placeholder: '/images/default/off-hand.png',
            },
            {
              label: 'Weapons',
              value: Weapons,
              placeholder: '/images/default/weapon.png',
            },
          ]}
          actionCreator={offHand1Updated}
          storeKey="offHand1"
        />
        <EquipItem
          type="offHand"
          label="Off Hand 2"
          data={[
            {
              label: 'Shields',
              value: Shields,
              placeholder: '/images/default/off-hand.png',
            },
            {
              label: 'Weapons',
              value: Weapons,
              placeholder: '/images/default/weapon.png',
            },
          ]}
          actionCreator={offHand2Updated}
          storeKey="offHand2"
        />
        <EquipItem
          type="offHand"
          label="Off Hand 3"
          data={[
            {
              label: 'Shields',
              value: Shields,
              placeholder: '/images/default/off-hand.png',
            },
            {
              label: 'Weapons',
              value: Weapons,
              placeholder: '/images/default/weapon.png',
            },
          ]}
          actionCreator={offHand3Updated}
          storeKey="offHand3"
        />
      </EquipContainer>
      <EquipContainer>
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
          storeKey="helmet"
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
          storeKey="armor"
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
          storeKey="hands"
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
          storeKey="legs"
        />
      </EquipContainer>
      <EquipContainer>
        <EquipItem
          type="talisman"
          label="Talisman"
          data={[
            {
              label: 'Talismans',
              value: Talismans,
              placeholder: '/images/default/talisman.png',
            },
          ]}
          actionCreator={talisman1Updated}
          storeKey="talisman1"
        />
        <EquipItem
          type="talisman"
          label="Talisman 2"
          data={[
            {
              label: 'Talismans',
              value: Talismans,
              placeholder: '/images/default/talisman.png',
            },
          ]}
          actionCreator={talisman2Updated}
          storeKey="talisman2"
        />
        <EquipItem
          type="talisman"
          label="Talisman 3"
          data={[
            {
              label: 'Talismans',
              value: Talismans,
              placeholder: '/images/default/talisman.png',
            },
          ]}
          actionCreator={talisman3Updated}
          storeKey="talisman3"
        />
        <EquipItem
          type="talisman"
          label="Talisman 4"
          data={[
            {
              label: 'Talismans',
              value: Talismans,
              placeholder: '/images/default/talisman.png',
            },
          ]}
          actionCreator={talisman4Updated}
          storeKey="talisman4"
        />
      </EquipContainer>
      <EquipContainer>
        <EquipItem
          type="item"
          label="Item"
          data={[
            {
              label: 'Items',
              value: Items,
              placeholder: '/images/default/item.png',
            },
          ]}
          actionCreator={item1Updated}
          storeKey="item1"
        />
        <EquipItem
          type="item"
          label="Item 2"
          data={[
            {
              label: 'Items',
              value: Items,
              placeholder: '/images/default/item.png',
            },
          ]}
          actionCreator={item2Updated}
          storeKey="item2"
        />
        <EquipItem
          type="item"
          label="Item 3"
          data={[
            {
              label: 'Items',
              value: Items,
              placeholder: '/images/default/item.png',
            },
          ]}
          actionCreator={item3Updated}
          storeKey="item3"
        />
        <EquipItem
          type="item"
          label="Item 4"
          data={[
            {
              label: 'Items',
              value: Items,
              placeholder: '/images/default/item.png',
            },
          ]}
          actionCreator={item4Updated}
          storeKey="item4"
        />
        <EquipItem
          type="item"
          label="Item 5"
          data={[
            {
              label: 'Items',
              value: Items,
              placeholder: '/images/default/item.png',
            },
          ]}
          actionCreator={item5Updated}
          storeKey="item5"
        />
      </EquipContainer>
    </div>
  )
}

export default Equipment
