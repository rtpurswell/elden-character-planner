import Attributes from './Attributes'
import ClassInfo from './ClassInfo'
import ClassImage from './ClassImage'

function ClassAndStats() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <ClassImage />
        <div className="col-span-2 grid grid-cols-1  pt-3 rounded gap-2">
          <ClassInfo />
          <Attributes />
        </div>
      </div>
    </>
  )
}

export default ClassAndStats
