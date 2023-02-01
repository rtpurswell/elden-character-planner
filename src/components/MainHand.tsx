import {
  mainHand1Updated,
  mainHand2Updated,
  mainHand3Updated,
} from '../store/character'
import { RootState } from '../store/configureStore'
import WeaponCustomizer from './WeaponCustomizer'
import WeaponData from '../data/weapons.json'
import ShieldData from '../data/shields.json'
import { IShield, IWeapon } from '../data/dataTypes'
const Shields = ShieldData as { [key: string]: IShield }
const Weapons = WeaponData as { [key: string]: IWeapon }
function MainHand() {
  return (
    <div className="grid grid-cols-1 gap-3">
      <WeaponCustomizer
        mainActionCreator={mainHand1Updated}
        mainSelectorFunction={(state: RootState) => state.character.mainHand1}
        storeKey="mainHand1"
        title="Main Hand 1"
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
      />
      <WeaponCustomizer
        mainActionCreator={mainHand2Updated}
        mainSelectorFunction={(state: RootState) => state.character.mainHand2}
        storeKey="mainHand2"
        title="Main Hand 2"
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
      />
      <WeaponCustomizer
        mainActionCreator={mainHand3Updated}
        mainSelectorFunction={(state: RootState) => state.character.mainHand3}
        storeKey="mainHand3"
        title="Main Hand 3"
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
      />
    </div>
  )
}

export default MainHand
