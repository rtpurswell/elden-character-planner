import { useState } from 'react'
import Modal from './components/common/Modal'
import Equipment from './components/Equipment'
import Stats from './components/Stats'
import WeaponViewer from './components/WeaponViewer'
function App() {
  const [showModal, setShowModal] = useState(false)

  const handleModalClose = () => {
    setShowModal(false)
  }
  const handleModalOpen = () => {
    setShowModal(true)
  }
  return (
    <main className="w-full grid grid-cols-2 text-white">
      <div className=" bg-zinc-700 flex flex-col">
        <Equipment />
        <button className="p-3 bg-green-600" onClick={handleModalOpen}>
          Show it!
        </button>
        {showModal ? (
          <Modal title="Select Weapon" onClose={handleModalClose}>
            <WeaponViewer />
          </Modal>
        ) : null}
      </div>

      <div className=" bg-zinc-700">
        <Stats />
      </div>
    </main>
  )
}

export default App
