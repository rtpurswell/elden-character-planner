import { useDispatch } from 'react-redux'
import { characterLoaded } from '../store/character'
import ClassAndStats from './ClassAndStats'
import Tabs from './common/Tabs'
import Equip from './Equip'
import Flask from './Flask'
import GreatRune from './GreatRune'
import Header from './Header'
import MainHand from './MainHand'
import OffHand from './Offhand'
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
    <main className="max-w-7xl grid grid-cols-1 md:grid-cols-3  text-white gap-5 p-5 mx-auto">
      <div className="md:col-span-3">
        <Header />
        <ClassAndStats />
      </div>
      <div className="flex md:flex-row-reverse md:col-span-3 gap-3 flex-col  ">
        <div className=" bg-slate-800 rounded md:w-2/3">
          <Tabs
            options={[
              {
                title: 'Main Hand',
                shortTitle: 'Main',
                component: <MainHand />,
              },
              { title: 'Off Hand', shortTitle: 'Off', component: <OffHand /> },
              { title: 'Equip', component: <Equip /> },
              { title: 'Spells', component: <Spells /> },
            ]}
          />
          {/* <Equipment /> */}
        </div>
        <div className=" rounded md:w-1/3 grid grid-cols-1 gap-3">
          <Potions />
          <Flask />
          <GreatRune />
        </div>
      </div>
    </main>
  )
}

export default Layout
