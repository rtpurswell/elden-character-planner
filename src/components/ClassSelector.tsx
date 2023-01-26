import { useDispatch, useSelector } from 'react-redux'
import ClassData from '../data/classes.json'
import type { IClassType } from '../data/dataTypes'
import { RootState } from '../store/configureStore'
import H2 from './common/H2'
import { classUpdated } from '../store/character'
const Classes = ClassData as { [key: string]: IClassType }
function ClassSelector() {
  const dispatch = useDispatch()

  const selectedClassId = useSelector(
    (state: RootState) => state.character.classType,
  )
  const selectedClass = Classes[
    selectedClassId as keyof typeof Classes
  ] as IClassType

  const ClassKeys = Object.keys(Classes)
  const handleClassChange = (direction: 'forward' | 'backward') => () => {
    const currentIndex = ClassKeys.indexOf(selectedClassId)
    let newIndex = currentIndex
    if (direction === 'forward') {
      newIndex = currentIndex + 1
      if (newIndex > ClassKeys.length - 1) {
        newIndex = 0
      }
    } else {
      newIndex = currentIndex - 1
      if (newIndex < 0) {
        newIndex = ClassKeys.length - 1
      }
    }
    dispatch(classUpdated(ClassKeys[newIndex]))
  }
  return (
    <div className="grid grid-cols-8">
      <button
        className="p-2 bg-green-500 rounded "
        onClick={handleClassChange('backward')}
      >{`<`}</button>
      <div className=" bg-slate-800 rounded p-5 flex flex-col items-center col-span-6 ">
        <H2>{selectedClass?.name}</H2>
        <img
          src={`/images/${selectedClass?.image}`}
          className="rounded max-h-32"
        />
        <p>{selectedClass?.description}</p>
      </div>
      <button
        className="p-2 bg-green-500 rounded "
        onClick={handleClassChange('forward')}
      >{`>`}</button>
    </div>
  )
}

export default ClassSelector
