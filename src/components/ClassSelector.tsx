import Classes from '../data/classes.json'
import { useDispatch, useSelector } from 'react-redux'
import { classUpdated } from '../store/character'
import { RootState } from '../store/configureStore'
import type { IClassType } from '../data/dataTypes'
import H2 from './common/H2'
function ClassSelector() {
  const dispatch = useDispatch()
  const handleClassSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const classId = e.target.value
    dispatch(classUpdated(classId))
  }
  const selectedClassId = useSelector(
    (state: RootState) => state.character.classType,
  )
  const selectedClass = Classes[
    selectedClassId as keyof typeof Classes
  ] as IClassType
  return (
    <div>
      {' '}
      <select
        onChange={handleClassSelect}
        value={selectedClassId}
        className="w-full bg-slate-700 p-3 rounded mb-5"
      >
        {Object.keys(Classes)
          .sort((a: any, b: any) => {
            if (
              Classes[a as keyof typeof Classes].name <
              Classes[b as keyof typeof Classes].name
            )
              return -1
            if (
              Classes[a as keyof typeof Classes].name >
              Classes[b as keyof typeof Classes].name
            )
              return 1
            return 0
          })
          .map((c) => (
            <option
              value={Classes[c as keyof typeof Classes].id}
              key={Classes[c as keyof typeof Classes].id}
            >
              {Classes[c as keyof typeof Classes].name}
            </option>
          ))}
      </select>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className=" bg-slate-800 rounded p-5 flex flex-col items-center">
          <H2>{selectedClass?.name}</H2>
          <img
            src={`/images/${selectedClass?.image}`}
            className="rounded max-h-32"
          />
          <p>{selectedClass?.description}</p>
        </div>
        <div className="flex flex-col bg-slate-800 rounded p-5 md:col-span-2">
          <div>
            <H2>Starting Level: {selectedClass.stats.level}</H2>
          </div>
          <div className="flex items-center flex-grow">
            <div className="grid grid-cols-2 md:grid-cols-4  gap-3 w-full">
              <div className="col-span-2 md:col-span-4">
                <H2>Starting Stats:</H2>
              </div>
              {Object.keys(selectedClass.stats).map((key) => {
                if (key === 'level') return null
                const capitolKey = key.charAt(0).toUpperCase() + key.slice(1)
                return (
                  <div className="flex p-3 bg-slate-700 rounded" key={key}>
                    <div className="flex-grow">{capitolKey}</div>
                    <div className="flex-shrink">
                      {
                        selectedClass.stats[
                          key as keyof typeof selectedClass.stats
                        ]
                      }
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassSelector
