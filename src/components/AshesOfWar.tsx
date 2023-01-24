import { useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'
import AshOfWar from './AshOfWar'
import H2 from './common/H2'

function AshesOfWar() {
  const ashKeys = [
    { key: 'mainHand1', label: 'Main Hand 1' },
    { key: 'mainHand2', label: 'Main Hand 2' },
    { key: 'mainHand3', label: 'Main Hand 3' },
    { key: 'offHand1', label: 'Off Hand 1' },
    { key: 'offHand2', label: 'Off Hand 2' },
    { key: 'offHand3', label: 'Off Hand 3' },
  ]
  return (
    <div className="grid grid-cols-2 gap-3">
      <H2 className="col-span-2">Ashes of War</H2>
      {ashKeys.map((ash) => {
        return <AshOfWar key={ash.key} storeKey={ash.key} label={ash.label} />
      })}
    </div>
  )
}

export default AshesOfWar
