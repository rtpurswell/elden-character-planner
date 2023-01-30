import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'
import H2 from './common/H2'
import { crimsonFlaskUpdated, manaFlaskUpdated } from '../store/character'
function Potions() {
  const dispatch = useDispatch()
  const crimsonFlask = useSelector(
    (state: RootState) => state.character.crimsonFlask,
  )
  const ceruleanFlask = useSelector(
    (state: RootState) => state.character.manaFlask,
  )
  const handleCrimsonIncrease = () => {
    if (crimsonFlask <= 13) {
      dispatch(crimsonFlaskUpdated(crimsonFlask + 1))
      dispatch(manaFlaskUpdated(ceruleanFlask - 1))
    }
  }
  const handleManaIncrease = () => {
    if (ceruleanFlask <= 13) {
      dispatch(manaFlaskUpdated(ceruleanFlask + 1))
      dispatch(crimsonFlaskUpdated(crimsonFlask - 1))
    }
  }
  return (
    <div className="px-2">
      <H2>Potions</H2>
      <div className="grid grid-cols-2 gap-2">
        <button
          className="w-full aspect-square bg-slate-700 rounded p-3 relative border-2 border-purple-400"
          onClick={handleCrimsonIncrease}
        >
          <img
            src="\images\default\flask_of_crimson_tears.png"
            alt="FLASK OF CRIMSON TEARS"
          />
          <div className="absolute bottom-0 z-0 font-bold">{crimsonFlask}</div>
        </button>
        <button
          className="w-full aspect-square bg-slate-700 rounded p-3 relative border-2 border-purple-400"
          onClick={handleManaIncrease}
        >
          <img
            src="\images\default\flask_of_cerulean_tears.png"
            alt="FLASK OF CERULEAN TEARS"
          />
          <div className="absolute bottom-0 z-0 font-bold">{ceruleanFlask}</div>
        </button>
      </div>
    </div>
  )
}

export default Potions
