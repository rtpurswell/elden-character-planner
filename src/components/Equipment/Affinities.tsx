import Affinity from './Affinity'
interface AffinitiesProps {
  affinityKeys: { key: string; label: string }[]
}
function Affinities({ affinityKeys }: AffinitiesProps) {
  return (
    <div className="grid grid-cols-4 gap-2 col-span-4">
      {affinityKeys.map((affinity) => {
        return (
          <Affinity
            key={affinity.key}
            storeKey={affinity.key}
            label={affinity.label}
          />
        )
      })}
    </div>
  )
}

export default Affinities
