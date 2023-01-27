import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/configureStore'
import { affinityUpdated } from '../../store/character'
interface AffinityProps {
  storeKey: string
  label: string
}
function Affinity({ storeKey, label }: AffinityProps) {
  const dispatch = useDispatch()
  const affinityArray = [
    'Standard',
    'Heavy',
    'Keen',
    'Quality',
    'Magic',
    'Cold',
    'Fire',
    'Flame Art',
    'Lightning',
    'Sacred',
    'Poison',
    'Blood',
    'Occult',
  ]
  const colorMap = {
    Standard: 'text-slate-500',
    Heavy: 'text-slate-500',
    Keen: 'text-green-500',
    Quality: 'text-emerald-500',
    Magic: 'text-blue-500',
    Cold: 'text-blue-600',
    Fire: 'text-red-500',
    'Flame Art': 'text-red-600',
    Lightning: 'text-yellow-500',
    Sacred: 'text-amber-500',
    Poison: 'text-green-700',
    Blood: 'text-red-700',
    Occult: 'text-purple-700',
  }
  const selectedAffinity = useSelector(
    (state: RootState) =>
      state.character.affinities[
        storeKey as keyof typeof state.character.affinities
      ],
  )
  const selectedWeaponId = useSelector(
    (state: RootState) =>
      state.character[storeKey as keyof typeof state.character],
  )
  const selectedAffinityIndex = affinityArray.indexOf(selectedAffinity)
  const handleAffinityUpdate = () => {
    const nextAffinityIndex = selectedAffinityIndex + 1
    if (nextAffinityIndex >= affinityArray.length) {
      dispatch(
        affinityUpdated({
          value: affinityArray[0],
          key: storeKey,
        }),
      )
    } else {
      dispatch(
        affinityUpdated({
          value: affinityArray[nextAffinityIndex],
          key: storeKey,
        }),
      )
    }
  }
  return (
    <>
      {selectedWeaponId !== '' ? (
        <button
          className={`bg-slate-700 rounded md:p-2 aspect-square flex items-center justify-center border-2 border-purple-400 font-bold text-xs md:text-base ${
            colorMap[selectedAffinity as keyof typeof colorMap]
          }`}
          onClick={handleAffinityUpdate}
        >
          {selectedAffinity}
        </button>
      ) : (
        <div className="bg-slate-700 rounded md:p-2 aspect-square flex items-center justify-center ">
          None
        </div>
      )}
    </>
  )
}

export default Affinity
