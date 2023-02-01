import EquipItem from './Equipment/EquipItem'
import Items from '../data/items.json'
import {
  item1Updated,
  item2Updated,
  item3Updated,
  item4Updated,
} from '../store/character'
function Item() {
  return (
    <div className="col-span-4 grid grid-cols-4 gap-2">
      {' '}
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
        selectorFunction={(state) => state.character.item1}
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
        selectorFunction={(state) => state.character.item2}
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
        selectorFunction={(state) => state.character.item3}
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
        selectorFunction={(state) => state.character.item4}
      />
    </div>
  )
}

export default Item
