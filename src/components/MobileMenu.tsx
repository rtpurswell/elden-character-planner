import { useState } from 'react'
import H2 from './common/H2'
import MenuIcon from './common/MenuIcon'
import Export from './Export'

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [animationClass, setAnimationClass] = useState<
    'mobile-menu-enter-active' | 'mobile-menu-leave-active'
  >('mobile-menu-enter-active')
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true)
          setAnimationClass('mobile-menu-enter-active')
        }}
      >
        <MenuIcon />
      </button>
      {isOpen ? (
        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-slate-800 p-10  ${animationClass}`}
        >
          <div className="flex justify-between">
            <H2 className="flex items-center">Menu</H2>
            <button
              className="rounded font-bold text-xl p-3 text-slate-300"
              onClick={() => {
                setAnimationClass('mobile-menu-leave-active')
                setTimeout(() => {
                  setIsOpen(false)
                }, 400)
              }}
            >
              X
            </button>
          </div>
          <div className="pt-10">
            <H2>Build Link:</H2>
            <Export />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default MobileMenu
