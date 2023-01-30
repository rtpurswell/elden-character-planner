import { useState } from 'react'
import Export from './Export'

function DesktopMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {menuOpen ? (
        <div className="flex items-center w-full justify-end gap-2">
          <Export />
          <button
            className="bg-green-500 rounded p-3"
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-white w-4 h-4"
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </svg>
          </button>
        </div>
      ) : (
        <button
          className="border-2 p-3 border-purple-400 text-purple-400 rounded"
          onClick={() => {
            setMenuOpen(true)
          }}
        >
          Get Build Link
        </button>
      )}
    </>
  )
}

export default DesktopMenu
