import { useState } from 'react'
import H2 from './common/H2'
import MenuIcon from './common/MenuIcon'

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        <MenuIcon />
      </button>
      {isOpen ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-slate-800 p-10">
          <div className="flex justify-between">
            <H2 className="flex items-center">Menu</H2>
            <button
              className="rounded bg-red-600 p-3"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default MobileMenu
