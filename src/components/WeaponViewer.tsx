import WeaponList from '../data/weapons.json'
import Weapon from './Weapon'
interface WeaponViewerProps {}
function WeaponViewer({}: WeaponViewerProps) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {WeaponList.map((weapon) => {
        return (
          <Weapon name={weapon.name} imageURL={weapon.image} key={weapon.id} />
        )
      })}
    </div>
  )
}

export default WeaponViewer
