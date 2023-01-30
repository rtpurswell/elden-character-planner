import { useDispatch } from 'react-redux'
import { characterLoaded } from '../store/character'
import ClassAndStats from './ClassAndStats'
import H1 from './common/H1'
import Equipment from './Equipment'
import Export from './Export'
import Flask from './Flask'
import GreatRune from './GreatRune'
import Header from './Header'
import Potions from './Potions'

import Spells from './Spells'
function Layout() {
  const dispatch = useDispatch()
  const serializedCharacter = new URLSearchParams(window.location.search).get(
    'char',
  )
  if (serializedCharacter) {
    dispatch(characterLoaded(serializedCharacter))
  }

  return (
    <main className="w-full flex flex-col md:grid md:grid-cols-2  text-white gap-10 p-5">
      <div className="md:col-span-2">
        <Header />
      </div>
      <div className="md:col-span-2">
        <ClassAndStats />
      </div>
      <div className=" bg-slate-800 rounded ">
        <Equipment />
      </div>

      <div className=" bg-slate-800 p-5 rounded ">
        <Spells />
        <div className="grid grid-cols-2 mt-5">
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
