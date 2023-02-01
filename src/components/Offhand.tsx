import {
  offHand1Updated,
  offHand2Updated,
  offHand3Updated,
} from '../store/character'
import { RootState } from '../store/configureStore'
import WeaponCustomizer from './WeaponCustomizer'
import WeaponData from '../data/weapons.json'
import ShieldData from '../data/shields.json'
import { IShield, IWeapon } from '../data/dataTypes'
const Shields = ShieldData as { [key: string]: IShield }
const Weapons = WeaponData as { [key: string]: IWeapon }
function OffHand() {
  return (
    <div className="grid grid-cols-1 gap-3">
      <WeaponCustomizer
        mainActionCreator={offHand1Updated}
        mainSelectorFunction={(state: RootState) => state.character.offHand1}
        storeKey="offHand1"
        title="Off Hand 1"
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
      />
      <WeaponCustomizer
        mainActionCreator={offHand2Updated}
        mainSelectorFunction={(state: RootState) => state.character.offHand2}
        storeKey="offHand2"
        title="Off Hand 2"
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
      />
      <WeaponCustomizer
        mainActionCreator={offHand3Updated}
        mainSelectorFunction={(state: RootState) => state.character.offHand3}
        storeKey="offHand3"
        title="Off Hand 3"
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
      />
    </div>
  )
}

export default OffHand
