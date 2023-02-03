import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'
import ClassData from '../data/classes.json'
import { classUpdated } from '../store/character'
function ClassImage() {
  const classId = useSelector((state: RootState) => state.character.classType)
  const selectedClass = ClassData[classId as keyof typeof ClassData]
  const dispatch = useDispatch()

  const ClassKeys = Object.keys(ClassData)
  const handleClassChange = (direction: 'forward' | 'backward') => () => {
    const currentIndex = ClassKeys.indexOf(classId)
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
    <div className="border-4 border-slate-800 flex items-center justify-center rounded-2xl relative z-0">
      <button
        className="absolute top-0 left-0 h-full md:hover:bg-opacity-30 rounded md:hover:bg-slate-400 md:opacity-0 md:hover:opacity-100"
        onClick={handleClassChange('backward')}
      >
        <svg
          className="h-full stroke-slate-400"
          viewBox="5 0 8 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.91663 24.7917L7.08329 17.5L9.91663 10.2083"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <img src={`/images/${selectedClass.image}`} alt={selectedClass.name} />
      <button
        className="absolute top-0 right-0 h-full md:hover:bg-opacity-30 rounded md:hover:bg-slate-400 md:opacity-0 md:hover:opacity-100"
        onClick={handleClassChange('forward')}
      >
        <svg
          className="h-full stroke-slate-400"
          viewBox="5 0 8 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.08337 10.2083L9.91671 17.5L7.08337 24.7917"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default ClassImage
