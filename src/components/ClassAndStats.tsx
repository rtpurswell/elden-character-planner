import Classes from '../data/classes.json'
import { useDispatch, useSelector } from 'react-redux'
import { classUpdated } from '../store/character'
import { RootState } from '../store/configureStore'
import type { IClassType } from '../data/dataTypes'
import H2 from './common/H2'
import { useState } from 'react'
import Modal from './common/Modal'
import {
  getCharacterHP,
  getCharacterLevel,
  getCharacterWeight,
  getCharacterMaxWeight,
  getCharacterFP,
} from '../store/character'
import Attributes from './Attributes'

function ClassSelector() {
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()

  const HP = useSelector(getCharacterHP)
  const level = useSelector(getCharacterLevel)
  const weight = useSelector(getCharacterWeight)
  const maxWeight = useSelector(getCharacterMaxWeight)

  const FP = useSelector(getCharacterFP)
  const equipPercent = (weight / maxWeight) * 100
  const equipText =
    equipPercent < 100
      ? equipPercent < 70
        ? equipPercent < 30
          ? 'Light Load'
          : 'Medium Load'
        : 'Heavy Load'
      : 'Overweight'
  const selectedClassId = useSelector(
    (state: RootState) => state.character.classType,
  )
  const selectedClass = Classes[
    selectedClassId as keyof typeof Classes
  ] as IClassType

  const handleClassSelect = (classId: string) => () => {
    dispatch(classUpdated(classId))
    setModalOpen(false)
  }
  const handleModalToggle = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      {modalOpen ? (
        <Modal onClose={handleModalToggle} title="Select a Class">
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
              <div
                className="p-3 bg-slate-700 rounded mt-2 mb-2"
                key={Classes[c as keyof typeof Classes].id}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className=" bg-slate-800 rounded p-5 flex flex-col items-center">
                    <button
                      className="p-3 rounded flex flex-col items-center justify-center"
                      onClick={handleClassSelect(c)}
                    >
                      <H2>{Classes[c as keyof typeof Classes].name}</H2>
                      <img
                        src={`/images/${
                          Classes[c as keyof typeof Classes]?.image
                        }`}
                        className="rounded max-h-32"
                      />
                    </button>

                    <p>{Classes[c as keyof typeof Classes]?.description}</p>
                  </div>
                  <div className="flex flex-col bg-slate-800 rounded p-5 md:col-span-2">
                    <div>
                      <H2>
                        Starting Level:{' '}
                        {Classes[c as keyof typeof Classes].stats.level}
                      </H2>
                    </div>
                    <div className="flex items-center flex-grow">
                      <div className="grid grid-cols-2 md:grid-cols-4  gap-3 w-full">
                        <div className="col-span-2 md:col-span-4">
                          <H2>Starting Stats:</H2>
                        </div>
                        {Object.keys(
                          Classes[c as keyof typeof Classes].stats,
                        ).map((key) => {
                          if (key === 'level') return null
                          const capitolKey =
                            key.charAt(0).toUpperCase() + key.slice(1)
                          return (
                            <div
                              className="flex p-3 bg-slate-700 rounded"
                              key={key}
                            >
                              <div className="flex-grow">{capitolKey}</div>
                              <div className="flex-shrink">
                                {
                                  Classes[c as keyof typeof Classes].stats[
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
            ))}
        </Modal>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <button
          onClick={handleModalToggle}
          className=" bg-slate-800 rounded p-5 flex flex-col items-center"
        >
          <H2>{selectedClass?.name}</H2>
          <img
            src={`/images/${selectedClass?.image}`}
            className="rounded max-h-32"
          />
          <p>{selectedClass?.description}</p>
        </button>
        <div className="flex flex-col bg-slate-800 rounded p-5">
          <H2 className=" mb-2">Stats</H2>
          <div>Character Level: {level}</div>
          <div>Character HP: {HP}</div>
          <div>Character Focus: {FP}</div>
          <div>
            Equip Load: {weight}/{maxWeight} ({equipText})
          </div>
        </div>
        <Attributes />
      </div>
    </>
  )
}

export default ClassSelector
