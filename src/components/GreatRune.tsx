import { useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'
import GridDropdown from './common/GridDropdown'
import GreatRuneData from '../data/greatRunes.json'
import { useDispatch } from 'react-redux'
import { greatRuneUpdated } from '../store/character'
import H2 from './common/H2'
function GreatRune() {
  const dispatch = useDispatch()
  const selectorFunction = (state: RootState) => state.character.greatRune
  const selectedId = useSelector(selectorFunction)

  return (
    <div className="">
      <H2 className=" ">Great Rune</H2>

      <GridDropdown
        heightClass="h-60"
        selectorFunction={selectorFunction}
        widthClass="w-auto"
        onUpdate={(id) => {
          dispatch(greatRuneUpdated(id))
        }}
        data={Object.keys(GreatRuneData).map((key) => {
          return {
            id: key,

            component: (
              <div className="w-full aspect-square p-3 flex items-center justify-center flex-col">
                <img
                  src={`/images/${
                    GreatRuneData[key as keyof typeof GreatRuneData].image
                  }`}
                />{' '}
                <div>
                  {GreatRuneData[key as keyof typeof GreatRuneData].name}
                </div>
              </div>
            ),
          }
        })}
      />
    </div>
  )
}

export default GreatRune
