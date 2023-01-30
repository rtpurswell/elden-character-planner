import { useState } from 'react'
import { useSelector } from 'react-redux'
import { IAffinity, IGreatRune, ITear } from '../../data/dataTypes'
import { RootState } from '../../store/configureStore'

interface GridDropdownProps {
  data: { id: string; component: React.ReactNode }[]
  selectedItemId: string
  onUpdate: (id: string) => void
}
function GridDropdown({ data, onUpdate, selectedItemId }: GridDropdownProps) {
  const [selectedId, setSelectedId] = useState(selectedItemId)
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (id: string) => () => {
    setSelectedId(id)
    onUpdate(id)
    setIsOpen(false)
  }
  const selectedComponent = data.find((item) => item.id === selectedId)
    ?.component
  return (
    <div>
      <button
        className="flex items-center justify-center aspect-square w-full bg-slate-700 rounded border-2 border-purple-400"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {selectedComponent}
      </button>
      <div className="relative h-0">
        {isOpen ? (
          <div className="w-24 overflow-x-scroll h-52 bg-slate-700 border-2 rounded grid grid-cols-1 gap-2 p-2">
            {data.map((item) => {
              return (
                <button
                  key={item.id}
                  className="aspect-square bg-slate-600 flex items-center justify-center rounded p-2 border-2 border-purple-400"
                  onClick={handleSelect(item.id)}
                >
                  {item.component}
                </button>
              )
            })}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default GridDropdown
