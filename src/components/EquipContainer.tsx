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
  const getPrevTitle = () => {
    const prevIndex = selectedIndex - 1
    if (prevIndex < 0) {
      return options[options.length - 1].title
    }
    return options[prevIndex].title
  }
  const handleComponentCycle = (direction: 'next' | 'prev') => () => {
    if (direction === 'next') {
      const nextIndex = selectedIndex + 1
      if (nextIndex >= options.length) {
        setSelectedIndex(0)
      } else {
        setSelectedIndex(nextIndex)
      }
    } else {
      const prevIndex = selectedIndex - 1
      if (prevIndex < 0) {
        setSelectedIndex(options.length - 1)
      } else {
        setSelectedIndex(prevIndex)
      }
    }
  }

  return (
    <div className="grid grid-cols-5 gap-1">
      {component}
      {options.length > 1 ? (
        <div className="grid gap-2">
          <button
            className="w-full bg-green-600 rounded"
            onClick={handleComponentCycle('next')}
          >
            {getNextTitle()}
          </button>
          {options.length > 2 ? (
            <button
              className="w-full bg-green-600 rounded"
              onClick={handleComponentCycle('prev')}
            >
              {getPrevTitle()}
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default EquipContainer
