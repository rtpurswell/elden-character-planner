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
const placeholderImage = '/images/default/spell.png'
function Spells() {
  return (
    <div className="grid grid-cols-4  gap-2">
      <EquipItem
        selectorFunction={(state) => state.character.spell1}
        type="spell"
        label="Spell 1"
        data={[
          {
            label: 'Sorceries',
            placeholder: placeholderImage,
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: placeholderImage,
            value: Incantations,
          },
        ]}
        actionCreator={spell1Updated}
      />
      <EquipItem
        selectorFunction={(state) => state.character.spell2}
        type="spell"
        label="Spell 2"
        data={[
          {
            label: 'Sorceries',
            placeholder: placeholderImage,
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: placeholderImage,
            value: Incantations,
          },
        ]}
        actionCreator={spell2Updated}
      />
      <EquipItem
        selectorFunction={(state) => state.character.spell3}
        type="spell"
        label="Spell 3"
        data={[
          {
            label: 'Sorceries',
            placeholder: placeholderImage,
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: placeholderImage,
            value: Incantations,
          },
        ]}
        actionCreator={spell3Updated}
      />
      <EquipItem
        selectorFunction={(state) => state.character.spell4}
        type="spell"
        label="Spell 4"
        data={[
          {
            label: 'Sorceries',
            placeholder: placeholderImage,
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: placeholderImage,
            value: Incantations,
          },
        ]}
        actionCreator={spell4Updated}
      />
      <EquipItem
        selectorFunction={(state) => state.character.spell5}
        type="spell"
        label="Spell 5"
        data={[
          {
            label: 'Sorceries',
            placeholder: placeholderImage,
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: placeholderImage,
            value: Incantations,
          },
        ]}
        actionCreator={spell5Updated}
      />
      <EquipItem
        selectorFunction={(state) => state.character.spell6}
        type="spell"
        label="Spell 6"
        data={[
          {
            label: 'Sorceries',
            placeholder: placeholderImage,
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: placeholderImage,
            value: Incantations,
          },
        ]}
        actionCreator={spell6Updated}
      />

      <EquipItem
        selectorFunction={(state) => state.character.spell7}
        type="spell"
        label="Spell 7"
        data={[
          {
            label: 'Sorceries',
            placeholder: placeholderImage,
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: placeholderImage,
            value: Incantations,
          },
        ]}
        actionCreator={spell7Updated}
      />
      <EquipItem
        selectorFunction={(state) => state.character.spell8}
        type="spell"
        label="Spell 8"
        data={[
          {
            label: 'Sorceries',
            placeholder: placeholderImage,
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: placeholderImage,
            value: Incantations,
          },
        ]}
        actionCreator={spell8Updated}
      />
      <EquipItem
        selectorFunction={(state) => state.character.spell9}
        type="spell"
        label="Spell 9"
        data={[
          {
            label: 'Sorceries',
            placeholder: placeholderImage,
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: placeholderImage,
            value: Incantations,
          },
        ]}
        actionCreator={spell9Updated}
      />
      <EquipItem
        selectorFunction={(state) => state.character.spell10}
        type="spell"
        label="Spell 10"
        data={[
          {
            label: 'Sorceries',
            placeholder: placeholderImage,
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: placeholderImage,
            value: Incantations,
          },
        ]}
        actionCreator={spell10Updated}
      />
      <EquipItem
        selectorFunction={(state) => state.character.spell11}
        type="spell"
        label="Spell 11"
        data={[
          {
            label: 'Sorceries',
            placeholder: placeholderImage,
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: placeholderImage,
            value: Incantations,
          },
        ]}
        actionCreator={spell11Updated}
      />
      <EquipItem
        selectorFunction={(state) => state.character.spell12}
        type="spell"
        label="Spell 12"
        data={[
          {
            label: 'Sorceries',
            placeholder: placeholderImage,
            value: Sorceries,
          },
          {
            label: 'Incantations',
            placeholder: placeholderImage,
            value: Incantations,
          },
        ]}
        actionCreator={spell12Updated}
      />
    </div>
  )
}

export default Spells
