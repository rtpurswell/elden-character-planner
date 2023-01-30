import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getSerializedCharacter } from '../store/character'

function Export() {
  const [isOpen, setIsOpen] = useState(false)
  const serializedCharacter = useSelector(getSerializedCharacter)
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        Export
      </button>
      {isOpen ? <div>{serializedCharacter}</div> : null}
    </>
  )
}

export default Export
