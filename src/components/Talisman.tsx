import {
  talisman1Updated,
  talisman2Updated,
  talisman3Updated,
  talisman4Updated,
} from '../store/character'
import Talismans from '../data/talismans.json'
import EquipItem from './Equipment/EquipItem'
function Talisman() {
  return (
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
        selectorFunction={(state) => state.character.talisman1}
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
        selectorFunction={(state) => state.character.talisman2}
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
        selectorFunction={(state) => state.character.talisman3}
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
        selectorFunction={(state) => state.character.talisman4}
      />
    </div>
  )
}

export default Talisman
