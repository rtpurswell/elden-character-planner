import { useState } from 'react'
import WeaponList from '../data/weapons.json'
import Weapon from './Weapon'
interface WeaponViewerProps {}
function WeaponViewer({}: WeaponViewerProps) {
  const [search, setSearch] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  return (
    <div className="grid grid-cols-5 gap-2">
      <div className="col-span-5">
        <input
          value={search}
          onChange={handleChange}
          type="text"
          className="rounded p-3 bg-gray-500 w-full"
          placeholder="Search"
        />
      </div>
      {WeaponList.filter((weapon) => {
        if (search === '') {
          return true
        }
        if (weapon.name.toLowerCase().includes(search.toLowerCase())) {
          return true
        }
        return false
      }).map((weapon) => {
        return (
          <Weapon name={weapon.name} imageURL={weapon.image} key={weapon.id} />
        )
      })}
    </div>
  )
}

export default WeaponViewer
