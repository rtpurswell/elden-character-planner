import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getStats,
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
  const stats = useSelector(getStats)
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
    <div className="flex p-1">
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
      <div>{name}</div>
      <div className="ml-auto flex gap-2">
        <div>
          <button className="rounded p-3 bg-red-600" onClick={handleDecrement}>
            -
          </button>
        </div>
        <div className="align-middle text-center">
          <button
            className="p-3 bg-slate-700 rounded w-12"
            onClick={handleModalToggle}
          >
            {stats[name.toLowerCase() as keyof typeof stats]}
          </button>
        </div>
        <div>
          <button
            className="rounded p-3 bg-green-600"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Stat
