import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useState } from 'react'
import { RootState } from '../store/configureStore'
import TearData from '../data/tears.json'
import { useDispatch, useSelector } from 'react-redux'
import { ITear } from '../data/dataTypes'
import Modal from './common/Modal'
import SearchAndSelect from './common/SearchAndSelect'
const Tears = TearData as { [key: string]: ITear }
interface TearProps {
  actionCreator: ActionCreatorWithPayload<any, string>
  selectorFunction: (state: RootState) => any
}
function Tear({ actionCreator, selectorFunction }: TearProps) {
  const dispatch = useDispatch()
  const [modalOpen, setModalOpen] = useState(false)
  const selectedId = useSelector(selectorFunction)
  const selectedTear = Tears[selectedId]
  const handleUpdate = (id: string) => {
    dispatch(actionCreator(id))
    handleModalToggle()
  }
  const handleModalToggle = () => setModalOpen(!modalOpen)

  return (
    <>
      {modalOpen ? (
        <Modal onClose={handleModalToggle} title="Tears">
          <SearchAndSelect
            data={[
              {
                label: 'Tears',
                placeholder: '/images/default/item.png',
                value: Object.keys(Tears).map((key) => {
                  return Tears[key]
                }),
              },
            ]}
            onSelect={handleUpdate}
            handleClear={() => {}}
          />
        </Modal>
      ) : null}
      <button
        className="p-2 flex items-center justify-center bg-slate-700 rounded aspect-square"
        onClick={handleModalToggle}
      >
        <img
          src={`/images/${selectedTear.image}`}
          className="w-full h-full"
          alt={selectedTear.name}
        />
      </button>
    </>
  )
}

export default Tear
