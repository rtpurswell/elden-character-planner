import ClassAndStats from './ClassAndStats'
import H1 from './common/H1'
import Equipment from './Equipment'
import IncantationsAndSorceries from './IncantationsAndSorceries'
import { useDispatch } from 'react-redux'
import { defaultStatsUpdated } from '../store/character'
function Layout() {
  const dispatch = useDispatch()
  dispatch(defaultStatsUpdated({}))
  return (
    <main className="w-full flex flex-col md:grid md:grid-cols-2  text-white gap-10 p-5">
      <div className="md:col-span-2">
        <H1>Elden Ring Character Planner</H1>{' '}
      </div>
      <div className="md:col-span-2">
        <ClassAndStats />
      </div>
      <div className=" bg-slate-800 rounded md:row-span-2">
        <Equipment />
      </div>

      <div className=" bg-slate-800 p-5 rounded"></div>
      <div className=" bg-slate-800 p-5 rounded">
        <IncantationsAndSorceries />
      </div>
    </main>
  )
}

export default Layout
