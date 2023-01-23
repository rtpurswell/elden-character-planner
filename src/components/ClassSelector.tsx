import Classes from '../data/classes.json'
import { useDispatch, useSelector } from 'react-redux'
import { classUpdated } from '../store/character'
import { useEffect } from 'react'
import { RootState } from '../store/configureStore'
function ClassSelector() {
  const dispatch = useDispatch()
  const handleClassSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const classId = e.target.value
    dispatch(classUpdated(classId))
  }
  const selectedClass = useSelector(
    (state: RootState) => state.character.classType,
  )

  return (
    <select
      onChange={handleClassSelect}
      value={selectedClass}
      className="w-full bg-slate-700 p-3 rounded"
    >
      {Classes.sort((a: any, b: any) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      }).map((c) => (
        <option value={c.id} key={c.id}>
          {c.name}
        </option>
      ))}
    </select>
  )
}

export default ClassSelector
