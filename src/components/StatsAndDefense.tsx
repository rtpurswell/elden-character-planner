import { useSelector } from 'react-redux'
import { useState } from 'react'
import {
  getCharacterHP,
  getCharacterLevel,
  getCharacterWeight,
  getCharacterMaxWeight,
  getCharacterFP,
  getCharacterDefenses,
} from '../store/character'

function StatsAndDefense() {
  const [selectedTab, setSelectedTab] = useState<'stats' | 'defense'>('stats')
  const defenses = useSelector(getCharacterDefenses)
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

  const statsComponent = (
    <div className="grid grid-cols-1 gap-3 mt-3 md:mb-8">
      <div className="rounded border-2 border-slate-700 p-3">
        Level: {level}
      </div>
      <div className="rounded border-2 border-slate-700 p-3">HP: {HP}</div>
      <div className="rounded border-2 border-slate-700 p-3">Focus: {FP}</div>
      <div className="rounded border-2 border-slate-700 p-3">
        Equip Load: {weight}/{maxWeight} ({equipText})
      </div>
    </div>
  )
  const defenseComponent = (
    <div className="grid grid-cols-2 gap-1 mt-3">
      <div className="grid grid-cols-1 gap-2">
        {Object.keys(defenses.negation).map((negKey) => {
          return (
            <div
              className="flex justify-between p-1 text-xs rounded border-2 border-slate-700"
              key={negKey}
            >
              <span>{negKey}:</span>

              <span>
                {defenses.negation[negKey as keyof typeof defenses.negation]}
              </span>
            </div>
          )
        })}
      </div>
      <div className="grid grid-cols-1 gap-2">
        {Object.keys(defenses.resistances).map((resKey) => {
          return (
            <div
              className="flex justify-between p-1 rounded border-2 border-slate-700 items-center"
              key={resKey}
            >
              <span> {resKey}: </span>
              <span>
                {
                  defenses.resistances[
                    resKey as keyof typeof defenses.resistances
                  ]
                }
              </span>
            </div>
          )
        })}{' '}
      </div>
    </div>
  )
  return (
    <div className=" bg-slate-800 rounded p-5">
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => {
            setSelectedTab('stats')
          }}
          className={`p-3 text-lg rounded ${
            selectedTab === 'stats'
              ? 'bg-purple-400'
              : 'border-2 border-purple-400 text-purple-400'
          }`}
        >
          Stats
        </button>
        <button
          onClick={() => {
            setSelectedTab('defense')
          }}
          className={`p-3 text-lg rounded ${
            selectedTab === 'defense'
              ? 'bg-purple-400'
              : 'border-2 border-purple-400 text-purple-400'
          }`}
        >
          Defense
        </button>
      </div>
      {selectedTab === 'stats' ? statsComponent : defenseComponent}
    </div>
  )
}

export default StatsAndDefense
