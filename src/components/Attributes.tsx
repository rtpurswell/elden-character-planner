import H2 from './common/H2'
import Attribute from './Attribute'
import ClassData from '../data/classes.json'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCharacterStats, statUpdated } from '../store/character'
import type { RootState } from '../store/configureStore'
import { IClassType } from '../data/dataTypes'

const Classes = ClassData as { [key: string]: IClassType }

function Attributes() {
  const [selectedAttribute, setSelectedAttribute] = useState('')
  const [error, setError] = useState<null | string>(null)
  const [value, setValue] = useState(0)
  const dispatch = useDispatch()
  const stats = useSelector(getCharacterStats)
  const classId = useSelector((state: RootState) => state.character.classType)
  const dataMap = {
    Strength: {
      text: 'text-red-500',
      border: ' border-red-500',
      bg: 'bg-red-500',
      shorthand: 'STR',
    },
    Dexterity: {
      text: 'text-green-500',
      border: ' border-green-500',
      bg: 'bg-green-500',
      shorthand: 'DEX',
    },
    Intelligence: {
      text: 'text-blue-500',
      border: ' border-blue-500',
      bg: 'bg-blue-500',
      shorthand: 'INT',
    },
    Faith: {
      text: 'text-yellow-500',
      border: ' border-yellow-500',
      bg: 'bg-yellow-500',
      shorthand: 'FAI',
    },
    Vigor: {
      text: 'text-red-700',
      border: ' border-red-700',
      bg: 'bg-red-700',
      shorthand: 'VIG',
    },
    Endurance: {
      text: 'text-green-200',
      border: ' border-green-200',
      bg: 'bg-green-200',
      shorthand: 'END',
    },
    Arcane: {
      text: 'text-purple-500',
      border: ' border-purple-500',
      bg: 'bg-purple-500',
      shorthand: 'ARC',
    },
    Mind: {
      text: 'text-blue-300',
      border: ' border-blue-300',
      bg: 'bg-blue-300',
      shorthand: 'MND',
    },
  }
  const handleAttributeSelect = (name: string) => {
    setSelectedAttribute(name)
    setValue(stats[name.toLowerCase() as keyof typeof stats])
  }

  const defaults = Classes[classId].stats
  const handleUpdate = () => {
    const defaultValue =
      defaults[selectedAttribute.toLowerCase() as keyof typeof defaults]
    if (value >= defaultValue && value <= 99) {
      dispatch(
        statUpdated({
          stat: selectedAttribute.toLowerCase(),
          value: value - defaultValue,
        }),
      )
      setError(null)
      setSelectedAttribute('')
      setValue(0)
    } else {
      setError(`Must be between ${defaultValue} and 99`)
    }
  }
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value))
  }
  const handleValueIncrement = () => {
    setValue(value + 1)
  }
  const handleValueDecrement = () => {
    setValue(value - 1)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleUpdate()
    }
  }
  return (
    <div className="flex flex-col bg-slate-800 rounded p-5 gap-3 ">
      <div className="flex justify-between items-center">
        <H2 className=" mb-2 mr-2">Attributes</H2>
        {selectedAttribute !== '' ? (
          error ? (
            <span className="text-sm text-red-500">
              {error}{' '}
              <span className="text-sm text-slate-500 flex gap-5">
                Press enter or
                <button
                  className="flex gap-2 text-green-500"
                  onClick={handleUpdate}
                >
                  Accept
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-green-600"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </button>
              </span>
            </span>
          ) : (
            <span className="text-sm text-slate-500 flex gap-5">
              Press enter or
              <button
                className="flex gap-2 text-green-500"
                onClick={handleUpdate}
              >
                Accept
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-green-600"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
              </button>
            </span>
          )
        ) : (
          <span className="text-sm text-slate-500">
            Click an attribute to edit
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm md:text-base">
        {Object.keys(stats).map((key) => {
          if (key === 'level') return null
          const capitolKey = key.charAt(0).toUpperCase() + key.slice(1)
          return (
            <Attribute
              name={capitolKey}
              key={key}
              className={`${dataMap[capitolKey as keyof typeof dataMap].text} ${
                dataMap[capitolKey as keyof typeof dataMap].border
              }`}
              onSelect={handleAttributeSelect}
            />
          )
        })}
        {selectedAttribute !== '' ? (
          <div className="grid grid-cols-5 gap-2 col-span-2 md:col-span-3 lg:col-span-1">
            <div className={` text-slate-400 flex items-center`}>
              {dataMap[selectedAttribute as keyof typeof dataMap].shorthand}:
            </div>
            <div className="flex justify-end gap-2 col-span-4">
              <button
                className={`flex justify-end px-2`}
                onClick={handleValueDecrement}
              >
                <svg
                  className="w-6 h-10"
                  viewBox="0 0 17 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.91663 24.7917L7.08329 17.5L9.91663 10.2083"
                    stroke="#FFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <input
                autoFocus={true}
                type="number"
                value={value}
                onChange={handleValueChange}
                className={`bg-transparent border-b-2   text-center font-bold outline-none w-16 h-10${
                  dataMap[selectedAttribute as keyof typeof dataMap].border
                } ${dataMap[selectedAttribute as keyof typeof dataMap].text}`}
                size={2}
                onKeyDown={handleKeyDown}
              />
              <button className={`px-2`} onClick={handleValueIncrement}>
                <svg
                  className="w-6 h-10"
                  viewBox="0 0 17 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.08337 10.2083L9.91671 17.5L7.08337 24.7917"
                    stroke="#FFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Attributes
