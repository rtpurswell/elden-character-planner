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
    value: { [key: string]: IArmor | IWeapon | IShield | ITalisman | IItem }
    placeholder: string
  }[]
  label: string
  storeKey: keyof typeof initialState
  actionCreator: ActionCreatorWithPayload<any, string>
}
function EquipItem({
  type,
  data,
  storeKey,
  actionCreator,
  label,
}: EquipItemProps) {
  const [modalOpen, setModalOpen] = useState(false)

  let imageURL = ''
  let defaultImage = ''
  let selectedItem: IArmor | IWeapon | IShield | ITalisman | IItem | null = null

  const dispatch = useDispatch()
  const itemId = useSelector((state: RootState) => state.character[storeKey])
  if (itemId !== '') {
    for (let i = 0; i < data.length; i++) {
      if (data[i].value[itemId as any]) {
        selectedItem = data[i].value[itemId as any]
        imageURL = data[i].value[itemId as any].image
      }
    }
  }
  let bgClass = ''
  switch (type) {
    case 'mainHand':
      defaultImage = 'default/weapon.png'
      bgClass = "bg-[url('/images/default/weapon.png')]"
      break
    case 'armor':
      defaultImage = 'default/armor.png'
      bgClass = "bg-[url('/images/default/armor.png')]"
      break
    case 'offHand':
      defaultImage = 'default/off-hand.png'
      bgClass = "bg-[url('/images/default/off-hand.png')]"
      break
    case 'talisman':
      defaultImage = 'default/talisman.png'
      bgClass = "bg-[url('/images/default/talisman.png')]"
      break
    case 'item':
      defaultImage = 'default/item.png'
      bgClass = "bg-[url('/images/default/itme.png')]"
      break
    case 'helmet':
      defaultImage = 'default/helmet.png'
      bgClass = "bg-[url('/images/default/helmet.png')]"
      break
    case 'legs':
      defaultImage = 'default/legs.png'
      bgClass = "bg-[url('/images/default/legs.png')]"
      break
    case 'hands':
      defaultImage = 'default/hands.png'
      bgClass = "bg-[url('/images/default/hands.png')]"

      break
  }

  const handleModalToggle = () => {
    setModalOpen(!modalOpen)
  }
  const handleItemSelect = (value: string) => {
    dispatch(actionCreator(value))
    handleModalToggle()
  }
  return (
    <div className="flex items-center justify-center">
      {modalOpen ? (
        <Modal onClose={handleModalToggle} title={label}>
          <SearchAndSelect
            data={data.map((dataItem) => {
              return {
                label: dataItem.label,
                placeholder: dataItem.placeholder,
                value: Object.keys(dataItem.value).map((dataItemKey) => {
                  return dataItem.value[dataItemKey as any]
                }),
              }
            })}
            onSelect={handleItemSelect}
          />
        </Modal>
      ) : null}
      <button
        onClick={handleModalToggle}
        className={`${
          selectedItem ? `${bgClass} p-4` : null
        }  bg-no-repeat bg-center rounded bg-cover w-full h-full`}
      >
        <img
          src={`/images/${selectedItem ? imageURL : defaultImage}`}
          className="aspect-square rounded w-full h-full"
        />
      </button>
    </div>
  )
}

export default EquipItem
