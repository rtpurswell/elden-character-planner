import { useState } from 'react'
import ClassSelector from './ClassSelector'
import H1 from './common/H1'
import Modal from './common/Modal'
import Equipment from './Equipment'
import Stats from './Stats'

function Layout() {
  const [showModal, setShowModal] = useState(false)

  const handleModalClose = () => {
    setShowModal(false)
  }
  const handleModalOpen = () => {
    setShowModal(true)
  }

  return (
    <main className="w-full flex flex-col md:grid md:grid-cols-2  text-white gap-10 p-5">
      <div className="md:col-span-2">
        <H1>Elden Ring Character Planner</H1>{' '}
      </div>
      <div className="md:col-span-2">
        <ClassSelector />
      </div>
      <div className=" bg-slate-800 flex flex-col p-5 rounded">
        <Equipment />
        <button className="p-3 bg-green-600" onClick={handleModalOpen}>
          Show it!
        </button>
        {showModal ? (
          <Modal title="Select Weapon" onClose={handleModalClose}></Modal>
        ) : null}
      </div>

      <div className=" bg-slate-800 p-5 rounded">
        <Stats />
      </div>
    </main>
  )
}

export default Layout
