import React, { Children, useState } from 'react'
interface EquipContainerProps {
  options: { title: string; component: React.ReactNode }[]
}
const EquipContainer = ({ options }: EquipContainerProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const component = options[selectedIndex].component

  const getNextTitle = () => {
    const nextIndex = selectedIndex + 1
    if (nextIndex >= options.length) {
      return options[0].title
    }
    return options[nextIndex].title
  }

  const handleComponentCycle = () => {
    const nextIndex = selectedIndex + 1
    if (nextIndex >= options.length) {
      setSelectedIndex(0)
    } else {
      setSelectedIndex(nextIndex)
    }
  }

  return (
    <div className="grid grid-cols-5 gap-1">
      {component}
      {options.length > 1 ? (
        <div className="grid gap-2">
          <button
            className="w-full border-2 border-purple-400 text-purple-400 rounded"
            onClick={handleComponentCycle}
          >
            <div>{getNextTitle()}</div>
            <div>{'> >'}</div>
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default EquipContainer
