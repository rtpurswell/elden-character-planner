import type {
  IArmor,
  IWeapon,
  IShield,
  ITalisman,
  IItem,
} from '../../data/dataTypes'
import { useState } from 'react'

interface SearchAndSelectProps {
  data: {
    label: string
    value: Array<IArmor | IWeapon | IShield | ITalisman | IItem>
  }[]
  onSelect: (value: string) => void
}
function SearchAndSelect({ data, onSelect }: SearchAndSelectProps) {
  const [search, setSearch] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  return (
    <div className="grid grid-cols-1 gap-2">
      <div>
        <input
          value={search}
          onChange={handleChange}
          type="text"
          className="rounded p-3 bg-gray-500 w-full"
          placeholder="Search"
        />
      </div>
      {data.map((d) => {
        return (
          <div className=" grid grid-cols-5" key={d.label}>
            <h3 className="col-span-5">{d.label}</h3>
            {d.value
              .filter((item) => {
                if (search === '') {
                  return true
                }
                if (item.name.toLowerCase().includes(search.toLowerCase())) {
                  return true
                }
                return false
              })
              .map((item: IArmor | IItem | IShield | IWeapon | ITalisman) => {
                return (
                  <div
                    className="flex flex-col border-gray-500 border-2 rounded p-2"
                    key={item.id}
                  >
                    <h4>{item.name}</h4>
                    <div>
                      <img src={`/images/${item.image}`} />
                    </div>
                  </div>
                )
              })}
          </div>
        )
      })}
    </div>
  )
}

export default SearchAndSelect
