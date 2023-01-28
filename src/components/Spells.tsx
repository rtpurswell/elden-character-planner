import EquipItem from './Equipment/EquipItem'
import SorceryData from '../data/sorceries.json'
import IncantationData from '../data/incantations.json'
import {
  spell1Updated,
  spell2Updated,
  spell3Updated,
  spell4Updated,
  spell5Updated,
  spell6Updated,
  spell7Updated,
  spell8Updated,
  spell9Updated,
  spell10Updated,
  spell11Updated,
  spell12Updated,
} from '../store/character'
import { IIncantation, ISorcery } from '../data/dataTypes'
import H2 from './common/H2'

const Sorceries = SorceryData as { [id: string]: ISorcery }
const Incantations = IncantationData as { [id: string]: IIncantation }

function Spells() {
  return (
    <div className="grid grid-cols-6 gap-2">
      <H2 className="col-span-6">Spells</H2>
      <EquipItem
        storeKey="spell1"
        type="spell"
        label="Spell 1"
        data={[
          {
            label: 'Sorceries',
            placeholder: '/images/default/item.png',
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: '/images/default/item.png',
            value: Incantations,
          },
        ]}
        actionCreator={spell1Updated}
      />
      <EquipItem
        storeKey="spell2"
        type="spell"
        label="Spell 2"
        data={[
          {
            label: 'Sorceries',
            placeholder: '/images/default/item.png',
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: '/images/default/item.png',
            value: Incantations,
          },
        ]}
        actionCreator={spell2Updated}
      />
      <EquipItem
        storeKey="spell3"
        type="spell"
        label="Spell 3"
        data={[
          {
            label: 'Sorceries',
            placeholder: '/images/default/item.png',
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: '/images/default/item.png',
            value: Incantations,
          },
        ]}
        actionCreator={spell3Updated}
      />
      <EquipItem
        storeKey="spell4"
        type="spell"
        label="Spell 4"
        data={[
          {
            label: 'Sorceries',
            placeholder: '/images/default/item.png',
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: '/images/default/item.png',
            value: Incantations,
          },
        ]}
        actionCreator={spell4Updated}
      />
      <EquipItem
        storeKey="spell5"
        type="spell"
        label="Spell 5"
        data={[
          {
            label: 'Sorceries',
            placeholder: '/images/default/item.png',
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: '/images/default/item.png',
            value: Incantations,
          },
        ]}
        actionCreator={spell5Updated}
      />
      <EquipItem
        storeKey="spell6"
        type="spell"
        label="Spell 6"
        data={[
          {
            label: 'Sorceries',
            placeholder: '/images/default/item.png',
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: '/images/default/item.png',
            value: Incantations,
          },
        ]}
        actionCreator={spell6Updated}
      />

      <EquipItem
        storeKey="spell7"
        type="spell"
        label="Spell 7"
        data={[
          {
            label: 'Sorceries',
            placeholder: '/images/default/item.png',
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: '/images/default/item.png',
            value: Incantations,
          },
        ]}
        actionCreator={spell7Updated}
      />
      <EquipItem
        storeKey="spell8"
        type="spell"
        label="Spell 8"
        data={[
          {
            label: 'Sorceries',
            placeholder: '/images/default/item.png',
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: '/images/default/item.png',
            value: Incantations,
          },
        ]}
        actionCreator={spell8Updated}
      />
      <EquipItem
        storeKey="spell9"
        type="spell"
        label="Spell 9"
        data={[
          {
            label: 'Sorceries',
            placeholder: '/images/default/item.png',
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: '/images/default/item.png',
            value: Incantations,
          },
        ]}
        actionCreator={spell9Updated}
      />
      <EquipItem
        storeKey="spell10"
        type="spell"
        label="Spell 10"
        data={[
          {
            label: 'Sorceries',
            placeholder: '/images/default/item.png',
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: '/images/default/item.png',
            value: Incantations,
          },
        ]}
        actionCreator={spell10Updated}
      />
      <EquipItem
        storeKey="spell11"
        type="spell"
        label="Spell 11"
        data={[
          {
            label: 'Sorceries',
            placeholder: '/images/default/item.png',
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: '/images/default/item.png',
            value: Incantations,
          },
        ]}
        actionCreator={spell11Updated}
      />
      <EquipItem
        storeKey="spell12"
        type="spell"
        label="Spell 12"
        data={[
          {
            label: 'Sorceries',
            placeholder: '/images/default/item.png',
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: '/images/default/item.png',
            value: Incantations,
          },
        ]}
        actionCreator={spell12Updated}
      />
    </div>
  )
}

export default Spells
