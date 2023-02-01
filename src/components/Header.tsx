import H1 from './common/H1'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

function Header() {
  return (
    <div className="flex justify-between bg-slate-800 p-3 rounded">
      <H1>Elden Ring Character Planner</H1>
      <div className="md:hidden">
        <MobileMenu />
      </div>
      <div className="hidden md:flex md:w-1/2 justify-end">
        <DesktopMenu />
      </div>
    </div>
  )
}

export default Header
