interface WeaponProps {
  imageURL: string
  name: string
}
function Weapon({ name, imageURL }: WeaponProps) {
  return (
    <div className="flex flex-col border-gray-500 border-2 rounded p-2">
      <h4>{name}</h4>
      <div>
        <img src={`/images/${imageURL}`} />
      </div>
    </div>
  )
}

export default Weapon
