interface EquipItemProps {
  type:
    | 'weapon'
    | 'armor'
    | 'off-hand'
    | 'relic'
    | 'item'
    | 'helmet'
    | 'legs'
    | 'hands'
}
function EquipItem({ type }: EquipItemProps) {
  let imageURL = ''

  switch (type) {
    case 'weapon':
      imageURL = 'default/weapon.png'
      break
    case 'armor':
      imageURL = 'default/armor.png'
      break
    case 'off-hand':
      imageURL = 'default/off-hand.png'
      break
    case 'relic':
      imageURL = 'default/relic.png'
      break
    case 'item':
      imageURL = 'default/item.png'
      break
    case 'helmet':
      imageURL = 'default/helmet.png'
      break
    case 'legs':
      imageURL = 'default/legs.png'
      break
    case 'hands':
      imageURL = 'default/hands.png'
      break
  }

  return (
    <div>
      {' '}
      <img src={`/images/${imageURL}`} className="aspect-square rounded" />
    </div>
  )
}

export default EquipItem
