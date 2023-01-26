import { useSelector } from 'react-redux'
import { RootState } from '../../store/configureStore'

interface AffinityProps {
  storeKey: string
  label: string
}
function Affinity({ storeKey, label }: AffinityProps) {
  const selectedAffinity = useSelector(
    (state: RootState) =>
      state.character.affinities[
        storeKey as keyof typeof state.character.affinities
      ],
  )
  return <div>{selectedAffinity !== '' ? '' : ''}</div>
}

export default Affinity
