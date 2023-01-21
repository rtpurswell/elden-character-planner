import H2 from './common/H2'
import EquipContainer from './EquipContainer'
import EquipItem from './EquipItem'

function Equipment() {
  return (
    <div className="w-fit flex flex-col gap-2 p-3 rounded">
      <H2>Equipment</H2>
      <EquipContainer>
        <EquipItem type="weapon" />
        <EquipItem type="weapon" />
        <EquipItem type="weapon" />
      </EquipContainer>
      <EquipContainer>
        <EquipItem type="off-hand" />
        <EquipItem type="off-hand" />
        <EquipItem type="off-hand" />
      </EquipContainer>
      <EquipContainer>
        <EquipItem type="helmet" />
        <EquipItem type="armor" />
        <EquipItem type="hands" />
        <EquipItem type="legs" />
      </EquipContainer>
      <EquipContainer>
        <EquipItem type="relic" />
        <EquipItem type="relic" />
        <EquipItem type="relic" />
        <EquipItem type="relic" />
      </EquipContainer>
      <EquipContainer>
        <EquipItem type="item" />
        <EquipItem type="item" />
        <EquipItem type="item" />
        <EquipItem type="item" />
        <EquipItem type="item" />
      </EquipContainer>
    </div>
  )
}

export default Equipment
