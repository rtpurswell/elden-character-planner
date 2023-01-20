import Stat from './Stat'

interface StatsProps {}
function Stats({}: StatsProps) {
  return (
    <div className="p-2">
      <h1>Stats</h1>
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
