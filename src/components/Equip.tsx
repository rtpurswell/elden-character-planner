import Armor from './Armor'
import Item from './Item'
import Talisman from './Talisman'

function Equip() {
  return (
    <div className="grid grid-cols-1 gap-3">
      <Armor />
      <Talisman />
      <Item />
    </div>
  )
}

export default Equip
