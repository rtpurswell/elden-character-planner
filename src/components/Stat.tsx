import { useState } from 'react'

interface StatProps {
  name: string
  defaultValue: number
}
function Stat({ name, defaultValue }: StatProps) {
  const [value, setValue] = useState(defaultValue)

  const handleIncrement = () => {
    setValue(value + 1)
  }
  const handleDecrement = () => {
    if (value - 1 >= defaultValue) {
      setValue(value - 1)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value))
  }
  return (
    <div className="flex p-1">
      <div>{name}</div>
      <div className="ml-auto flex gap-2">
        <div>
          <button className="rounded p-3 bg-red-600" onClick={handleDecrement}>
            -
          </button>
        </div>
        <div className="align-middle text-center">
          <input
            value={value}
            onChange={handleChange}
            className="rounded bg-gray-500 text-center h-full"
            type="text"
            size={1}
          />
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
