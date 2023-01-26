import Attributes from './Attributes'
import ClassSelector from './ClassSelector'
import StatsAndDefense from './StatsAndDefense'

function ClassAndStats() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <ClassSelector />
        <StatsAndDefense />
        <Attributes />
      </div>
    </>
  )
}

export default ClassAndStats
