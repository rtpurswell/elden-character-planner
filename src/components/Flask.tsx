import H2 from './common/H2'
import Tear from './Tear'
import { physique1Updated, physique2Updated } from '../store/character'
import { RootState } from '../store/configureStore'
function Flask() {
  const tear1Selector = (state: RootState) => state.character.physique1
  const tear2Selector = (state: RootState) => state.character.physique2
  return (
    <div className="px-2">
      <H2>Flask</H2>
      <div className="grid grid-cols-2 gap-2">
        <Tear
          actionCreator={physique1Updated}
          selectorFunction={tear1Selector}
        />
        <Tear
          actionCreator={physique2Updated}
          selectorFunction={tear2Selector}
        />
      </div>
    </div>
  )
}

export default Flask
