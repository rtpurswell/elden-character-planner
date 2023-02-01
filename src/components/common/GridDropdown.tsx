import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { IAffinity, IGreatRune, ITear } from '../../data/dataTypes'
import { RootState } from '../../store/configureStore'

interface GridDropdownProps {
  data: {
    id: string
    component: React.ReactNode
    displayComponent?: React.ReactNode
  }[]
  onUpdate: (id: string) => void
  widthClass: string
  heightClass: string
  selectorFunction: (state: RootState) => any
}
function GridDropdown({
  data,
  onUpdate,
  heightClass,
  widthClass,
  selectorFunction,
}: GridDropdownProps) {
  const selectedId = useSelector(selectorFunction)
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (id: string) => () => {
    onUpdate(id)
    setIsOpen(false)
  }
  const selectedIndex = data.findIndex((item) => item.id === selectedId)
  const selectedComponent = data[selectedIndex].component
  const displayComponent = data[selectedIndex].displayComponent
  return (
    <div className="">
      <button
        className="w-full bg-slate-700 rounded"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {displayComponent ? displayComponent : selectedComponent}
      </button>
      <div className="relative h-0">
        {isOpen ? (
          <div
            className={`overflow-y-scroll  bg-slate-700 border-2 rounded grid grid-cols-1 gap-2 p-2 ${widthClass} ${heightClass}`}
          >
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
