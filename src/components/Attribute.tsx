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
      className={`px-3 py-1 rounded flex justify-between border-2 border-slate-700 text-slate-400`}
      onClick={() => {
        onSelect(name)
      }}
    >
      <span>{name}:</span>
      <span>{value}</span>
    </button>
  )
}

export default Stat
