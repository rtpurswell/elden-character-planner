import ClassAndStats from './ClassAndStats'
import H1 from './common/H1'
import Equipment from './Equipment'
import Flask from './Flask'
import GreatRune from './GreatRune'
import Potions from './Potions'

import Spells from './Spells'
function Layout() {
  return (
    <main className="w-full flex flex-col md:grid md:grid-cols-2  text-white gap-10 p-5">
      <div className="md:col-span-2">
        <H1>Elden Ring Character Planner</H1>{' '}
      </div>
      <div className="md:col-span-2">
        <ClassAndStats />
      </div>
      <div className=" bg-slate-800 rounded ">
        <Equipment />
      </div>

      <div className=" bg-slate-800 p-5 rounded">
        <Spells />
        <div className="grid grid-cols-2">
          <GreatRune />
          <div>
            <Potions />
            <Flask />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Layout
