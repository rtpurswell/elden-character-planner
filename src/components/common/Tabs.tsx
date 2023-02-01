import { useState } from 'react'

interface TabsProps {
  options: { title: string; component: React.ReactNode; shortTitle?: string }[]
}
function Tabs({ options }: TabsProps) {
  const [selected, setSelected] = useState(0)

  const handleSelect = (index: number) => () => {
    setSelected(index)
  }
  return (
    <div className="p-5">
      <div className="flex gap-4 justify-evenly mb-5">
        {options.map((option, index) => {
          return (
            <span key={option.title}>
              <button
                className={`px-3 py-1  flex justify-evenly md:hidden  ${
                  selected === index ? 'text-white' : 'text-slate-400'
                }`}
                onClick={handleSelect(index)}
              >
                <span>
                  {option.shortTitle ? option.shortTitle : option.title}
                </span>
              </button>
              <button
                className={`px-3 py-1  md:flex justify-evenly hidden  ${
                  selected === index ? 'text-white' : 'text-slate-400'
                }`}
                onClick={handleSelect(index)}
              >
                <span>{option.title}</span>
              </button>
            </span>
          )
        })}
      </div>
      {options[selected].component}
    </div>
  )
}

export default Tabs
