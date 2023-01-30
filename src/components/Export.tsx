import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getSerializedCharacter } from '../store/character'
import CopyIcon from './common/CopyIcon'
import H2 from './common/H2'

function Export() {
  const serializedCharacter = useSelector(getSerializedCharacter)
  return (
    <>
      <div className="flex mt-3 md:mt-0 justify-end items-center h-fit w-full gap-2">
        <input
          className="outline-none bg-slate-800 text-white p-3 md:px-3 py-2 rounded w-3/4 border-2 border-purple-400"
          readOnly
          type="url"
          value={`http://localhost:5173?char=${serializedCharacter}`}
        />
        <button
          className="w-14 md:w-10 rounded border-2 border-purple-400 p-2"
          onClick={() => {
            navigator.clipboard.writeText(
              `http://localhost:5173?char=${serializedCharacter}`,
            )
          }}
        >
          <CopyIcon />
        </button>
      </div>
    </>
  )
}

export default Export
