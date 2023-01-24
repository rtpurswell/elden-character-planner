import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getCharacterStats,
  statUpdated,
  statDecremented,
  statIncremented,
} from '../store/character'
import { RootState } from '../store/configureStore'
import Modal from './common/Modal'

interface StatProps {
  name: string
}
function Stat({ name }: StatProps) {
  const stats = useSelector(getCharacterStats)
  const defaultStats = useSelector(
    (state: RootState) => state.character.defaultStats,
  )

  const [modalOpen, setModalOpen] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [value, setValue] = useState(
    stats[name.toLowerCase() as keyof typeof stats],
  )
  const dispatch = useDispatch()
  const defaultValue = Number(
    defaultStats[name.toLowerCase() as keyof typeof defaultStats],
  )
  const handleModalToggle = () => {
    setModalOpen(!modalOpen)
  }
  const handleUpdate = () => {
    if (value >= defaultValue && value <= 99) {
      dispatch(
        statUpdated({ stat: name.toLowerCase(), value: value - defaultValue }),
      )
      setError(null)
      handleModalToggle()
    } else {
      setError(
        `Value must be between the minimum for the selected class (${defaultValue}) and the maximum (99)`,
      )
    }
  }
  const handleIncrement = () => {
    dispatch(statIncremented(name.toLowerCase()))
  }
  const handleDecrement = () => {
    dispatch(statDecremented(name.toLowerCase()))
  }
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUpdate()
    }
  }
  return (
    <>
      {modalOpen ? (
        <Modal title={name} onClose={handleModalToggle}>
          <div className="flex flex-col gap-3">
            <p>
              Use the field below to manually set the value for {name}. Keep in
              mind that it can not be lower than {defaultValue}, the default for
              the selected class
            </p>
            <input
              type="number"
              className="rounded bg-slate-700 p-3 w-full"
              defaultValue={stats[name.toLowerCase() as keyof typeof stats]}
              onChange={(e) => setValue(parseInt(e.target.value))}
              onKeyDown={handleKeyDown}
            />
            {error ? <p className="text-red-600">{error}</p> : null}
            <button
              className="w-full p-3 text-center bg-green-600 rounded"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </Modal>
      ) : null}
      <button
        className="p-3 rounded bg-slate-700 flex justify-between"
        onClick={handleModalToggle}
      >
        <span className="font-bold">{name}:</span>
        <span>{stats[name.toLowerCase() as keyof typeof stats]}</span>
      </button>
    </>
  )
}

export default Stat
