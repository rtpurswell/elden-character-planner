import Stat from './Stat'
import H2 from './common/H2'
import { useDispatch } from 'react-redux'
import { defaultStatsUpdated } from '../store/character'
interface StatsProps {}
function Stats({}: StatsProps) {
  const dispatch = useDispatch()
  dispatch(defaultStatsUpdated({}))
  return (
    <div className="p-3 rounded">
      <H2>Stats</H2>
      <Stat name="Vigor" />
      <Stat name="Mind" />
      <Stat name="Endurance" />
      <Stat name="Strength" />
      <Stat name="Dexterity" />
      <Stat name="Intelligence" />
      <Stat name="Faith" />
      <Stat name="Arcane" />
    </div>
  )
}

export default Stats
