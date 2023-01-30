import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/configureStore'
import { affinityUpdated } from '../../store/character'
import type { IAffinity } from '../../data/dataTypes'
import AffinityData from '../../data/affinities.json'
import GridDropdown from '../common/GridDropdown'
const Affinities = AffinityData as { [key: string]: IAffinity }
interface AffinityProps {
  storeKey: string
  label: string
}
function Affinity({ storeKey, label }: AffinityProps) {
  const dispatch = useDispatch()

  const colorMap = {
    AA: 'text-slate-500',
    AB: 'text-slate-500',
    AC: 'text-green-500',
    AD: 'text-emerald-500',
    AE: 'text-blue-500',
    AF: 'text-blue-600',
    AG: 'text-red-500',
    AH: 'text-red-600',
    AI: 'text-yellow-500',
    AJ: 'text-amber-500',
    AK: 'text-green-700',
    AL: 'text-red-700',
    AM: 'text-purple-700',
  }
  const selectorFunction = (state: RootState) =>
    state.character.affinities[
      storeKey as keyof typeof state.character.affinities
    ]
  const selectedAffinityId = useSelector(selectorFunction)
  const selectedWeaponId = useSelector(
    (state: RootState) =>
      state.character[storeKey as keyof typeof state.character],
  )

  const handleAffinityUpdate = (id: string) => {
    dispatch(affinityUpdated({ value: id, key: storeKey }))
  }
  return (
    <>
      {selectedWeaponId !== '' ? (
        <GridDropdown
          heightClass="h-48"
          widthClass="w-24"
          selectorFunction={selectorFunction}
          selectedItemId={selectedAffinityId}
          onUpdate={handleAffinityUpdate}
          data={Object.keys(Affinities).map((key) => {
            return {
              id: key,
              component: (
                <div
                  className={`text-xs font-bold w-full aspect-square flex justify-center items-center ${
                    colorMap[key as keyof typeof colorMap]
                  }`}
                >
                  {Affinities[key].name}
                </div>
              ),
            }
          })}
        />
      ) : (
        <div className="bg-slate-700 rounded md:p-2 aspect-square flex items-center justify-center ">
          None
        </div>
      )}
    </>
  )
}

export default Affinity
