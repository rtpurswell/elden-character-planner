import H1 from './common/H1'
import MobileMenu from './MobileMenu'

function Header() {
  return (
    <div className="flex justify-between">
      <H1>Elden Ring Character Planner</H1>
      <div className="md:hidden">
        <MobileMenu />
      </div>
      <div className="hidden md:flex">Desktop Menu</div>
    </div>
  )
}

export default Header
