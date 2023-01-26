import {
  IArmor,
  IWeapon,
  IShield,
  ITalisman,
  IItem,
} from '../../data/dataTypes'
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
} from '../../store/character'
import H2 from '.././common/H2'
import EquipContainer from '.././EquipContainer'
import EquipItem from './EquipItem'
import WeaponData from '../../data/weapons.json'
import ShieldData from '../../data/shields.json'
import ArmorData from '../../data/armors.json'
import TalismanData from '../../data/talismans.json'
import ItemData from '../../data/items.json'
import Ashes from './Ashes'
const Armors = ArmorData as { [key: string]: IArmor }
function Equipment() {
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

  const Weapons = WeaponData as { [key: string]: IWeapon }
  const Shields = ShieldData as { [key: string]: IShield }
  const Talismans = TalismanData as { [key: string]: ITalisman }
  const Items = ItemData as { [key: string]: IItem }

  const mainHandComponent = (
    <div className="col-span-4 grid grid-cols-4 gap-2">
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
    </div>
  )
  const mainHandAshesComponent = (
    <Ashes
      ashKeys={[
        { key: 'mainHand1', label: 'Main Hand 1' },
        { key: 'mainHand2', label: 'Main Hand 2' },
        { key: 'mainHand3', label: 'Main Hand 3' },
      ]}
    />
  )
  const offHandComponent = (
    <div className="col-span-4 grid grid-cols-4 gap-2">
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
    </div>
  )
  const offHandAshesComponent = (
    <Ashes
      ashKeys={[
        { key: 'offHand1', label: 'Off Hand 1' },
        { key: 'offHand2', label: 'Off Hand 2' },
        { key: 'offHand3', label: 'Off Hand 3' },
      ]}
    />
  )
  const armorComponent = (
    <div className="col-span-4 grid grid-cols-4 gap-2">
      {' '}
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
    </div>
  )
  const talismanComponent = (
    <div className="col-span-4 grid grid-cols-4 gap-2">
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
    </div>
  )
  return (
    <div className="w-full flex flex-col gap-2 p-3 rounded">
      <H2>Equipment</H2>
      <EquipContainer
        options={[
          { title: 'Weapons', component: mainHandComponent },
          { title: 'Ashes', component: mainHandAshesComponent },
          {
            title: 'test2',
            component: <div className="col-span-4">test2</div>,
          },
        ]}
      />
      <EquipContainer
        options={[
          { title: 'Off-Hand', component: offHandComponent },
          { title: 'Ashes', component: offHandAshesComponent },
        ]}
      />
      <EquipContainer
        options={[{ title: 'Armor', component: armorComponent }]}
      />

      <EquipContainer
        options={[{ title: 'Talismans', component: talismanComponent }]}
      />
      {/* 
      
   
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

      </EquipContainer> */}
    </div>
  )
}

export default Equipment
