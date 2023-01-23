import type {
  IArmor,
  IWeapon,
  IShield,
  ITalisman,
  IItem,
} from '../data/dataTypes'
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { initialState } from '../store/character'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'
import { useState } from 'react'
import Modal from './common/Modal'
import SearchAndSelect from './common/SearchAndSelect'

interface EquipItemProps {
  type:
    | 'mainHand'
    | 'armor'
    | 'offHand'
    | 'talisman'
    | 'item'
    | 'helmet'
    | 'legs'
    | 'hands'
  data: {
    label: string
    value: IArmor[] | IWeapon[] | IShield[] | ITalisman[] | IItem[]
  }[]
  storeKey: keyof typeof initialState
  actionCreator: ActionCreatorWithPayload<any, string>
}
function EquipItem({ type, data, storeKey, actionCreator }: EquipItemProps) {
  const [modalOpen, setModalOpen] = useState(false)

  let imageURL = ''
  let selectedItem: IArmor | IWeapon | IShield | ITalisman | IItem | null = null
  const dispatch = useDispatch()
  const value = useSelector((state: RootState) => state.character[storeKey])
  if (value !== '') {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].value.length; j++) {
        if (data[i].value[j].id === value) {
          selectedItem = data[i].value[j]
          imageURL = `/images/${selectedItem.image}`
          i = data.length
          break
        }
      }
    }
  } else {
    switch (type) {
      case 'mainHand':
        imageURL = 'default/weapon.png'
        break
      case 'armor':
        imageURL = 'default/armor.png'
        break
      case 'offHand':
        imageURL = 'default/off-hand.png'
        break
      case 'talisman':
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
  }

  const handleModalToggle = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <div>
      {modalOpen ? (
        <Modal onClose={handleModalToggle} title="">
          <SearchAndSelect data={data} onSelect={() => {}} />
        </Modal>
      ) : null}
      <button onClick={handleModalToggle}>
        <img src={`/images/${imageURL}`} className="aspect-square rounded" />
      </button>
    </div>
  )
}

export default EquipItem
