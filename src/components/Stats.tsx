import Stat from './Stat'
import H2 from './common/H2'
interface StatsProps {}
function Stats({}: StatsProps) {
  return (
    <div className="p-3 rounded">
      <H2>Stats</H2>
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
