import { useSelector } from 'react-redux'
import { getCharacterStats } from '../store/character'
interface StatProps {
  name: string
  className: string
  onSelect: (name: string) => void
}
function Stat({ name, className, onSelect }: StatProps) {
  const stats = useSelector(getCharacterStats)
  const value = Number(stats[name.toLowerCase() as keyof typeof stats])

  return (
    <button
      className={`p-3 rounded bg-slate-700 flex justify-between border-2 ${className}`}
      onClick={() => {
        onSelect(name)
      }}
    >
      <span className="font-bold">{name}:</span>
      <span>{value}</span>
    </button>
  )
}

export default Stat
