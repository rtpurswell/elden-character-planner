import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { RootState } from '../store/configureStore'
import EquipItem from './Equipment/EquipItem'
import type {
  IArmor,
  IWeapon,
  IShield,
  ITalisman,
  IItem,
} from '../data/dataTypes'
import Ash from './Equipment/Ash'
import Affinity from './Equipment/Affinity'
import { useSelector } from 'react-redux'
import Weapons from '../data/weapons.json'
import Shields from '../data/shields.json'
import Ashes from '../data/ashes.json'
import Affinities from '../data/affinities.json'
interface WeaponCustomizerProps {
  mainSelectorFunction: (state: RootState) => string
  mainActionCreator: ActionCreatorWithPayload<any, string>
  storeKey: string
  title: string
  data: {
    label: string
    value: { [key: string]: IWeapon | IShield }
    placeholder: string
  }[]
}
function WeaponCustomizer({
  mainSelectorFunction,

  mainActionCreator,
  storeKey,
  title,
  data,
}: WeaponCustomizerProps) {
  const selectedId = useSelector(mainSelectorFunction)
  const selectedAffinityId = useSelector(
    (state: RootState) =>
      state.character.affinities[
        storeKey as keyof typeof state.character.affinities
      ],
  )
  const selectedAshId = useSelector(
    (state: RootState) =>
      state.character.ashesOfWar[
        storeKey as keyof typeof state.character.ashesOfWar
      ],
  )
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
      <div className="hidden lg:flex  ">{title}</div>
      <EquipItem
        actionCreator={mainActionCreator}
        label={title}
        selectorFunction={mainSelectorFunction}
        type="mainHand"
        data={data}
      />
      <Ash storeKey={storeKey} />
      <Affinity storeKey={storeKey} />
      <div className="hidden col-span-2 lg:flex flex-col justify-around bg-slate-700 rounded p-5 text-xs">
        <span>
          {selectedId
            ? Weapons[selectedId as keyof typeof Weapons]?.name ||
              Shields[selectedId as keyof typeof Shields].name
            : 'None'}
        </span>
        <span>
          {selectedAshId
            ? Ashes[selectedAshId as keyof typeof Ashes].name
            : 'None'}
        </span>
        <span>
          {selectedAffinityId
            ? Affinities[selectedAffinityId as keyof typeof Affinities].name
            : 'None'}
        </span>
      </div>
    </div>
  )
}

export default WeaponCustomizer
