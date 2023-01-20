import EquipContainer from './components/EquipContainer'
import EquipItem from './components/EquipItem'
import Stats from './components/Stats'
import WeaponViewer from './components/WeaponViewer'
function App() {
  return (
    <main className="w-full grid grid-cols-2 text-white">
      <div className=" bg-zinc-700 flex flex-col p-2">
        <h1>Equipment</h1>
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
      <div className=" bg-zinc-700">
        <Stats />
      </div>
      <WeaponViewer />
    </main>
  )
}

export default App
