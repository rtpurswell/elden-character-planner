import { useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'
import ClassData from '../data/classes.json'
import {
  getCharacterHP,
  getCharacterLevel,
  getCharacterWeight,
  getCharacterMaxWeight,
} from '../store/character'
import H2 from './common/H2'
function ClassInfo() {
  const selectedClassId = useSelector(
    (state: RootState) => state.character.classType,
  )
  const selectedClass = ClassData[selectedClassId as keyof typeof ClassData]
  const HP = useSelector(getCharacterHP)
  const level = useSelector(getCharacterLevel)
  const weight = useSelector(getCharacterWeight)
  const maxWeight = useSelector(getCharacterMaxWeight)
  const equipPercent = (weight / maxWeight) * 100
  const equipText =
    equipPercent < 100
      ? equipPercent < 70
        ? equipPercent < 30
          ? 'Light Load'
          : 'Medium Load'
        : 'Heavy Load'
      : 'Overweight'

  return (
    <div className="w-full bg-slate-800 grid md:grid-cols-2 gap-2 p-5 rounded">
      <div>
        <H2>{selectedClass.name}</H2>
        <div>{selectedClass.description}</div>
      </div>
      <div className="grid grid-cols-1 auto-rows-fr gap-2">
        <div className="border-2 border-slate-700 rounded flex items-center p-2">
          Max HP: {HP}
        </div>
        <div className="border-2 border-slate-700 rounded flex items-center p-2">
          Level: {level}
        </div>
        <div className="border-2 border-slate-700 rounded flex items-center p-2">
          Equip Load: {weight}/{maxWeight}({equipText})
        </div>
      </div>
    </div>
  )
}

export default ClassInfo
