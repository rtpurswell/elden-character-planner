import Stat from './Stat'
import H1 from './common/H1'
interface StatsProps {}
function Stats({}: StatsProps) {
  return (
    <div className="p-3">
      <H1>Stats</H1>
      <Stat name="Vigor" defaultValue={0} />
      <Stat name="Mind" defaultValue={0} />
      <Stat name="Endurance" defaultValue={0} />
      <Stat name="Strength" defaultValue={0} />
      <Stat name="Dexterity" defaultValue={0} />
      <Stat name="Intelligence" defaultValue={0} />
      <Stat name="Faith" defaultValue={0} />
      <Stat name="Arcane" defaultValue={0} />
    </div>
  )
}

export default Stats
