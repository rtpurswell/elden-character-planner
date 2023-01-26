import Ash from './Ash'
interface AshesProps {
  ashKeys: { key: string; label: string }[]
}
function Ashes({ ashKeys }: AshesProps) {
  return (
    <div className="grid grid-cols-4 gap-2 col-span-4">
      {ashKeys.map((ash) => {
        return <Ash key={ash.key} storeKey={ash.key} label={ash.label} />
      })}
    </div>
  )
}

export default Ashes
