import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/configureStore'
import WeaponData from '../../data/weapons.json'
import ShieldData from '../../data/shields.json'
import AshesData from '../../data/ashes.json'
import { IAsh, IShield, IWeapon } from '../../data/dataTypes'
import { useState } from 'react'
import Modal from '.././common/Modal'
import SearchAndSelect from '.././common/SearchAndSelect'
import { ashOfWarUpdated } from '../../store/character'
const Weapons = WeaponData as { [key: string]: IWeapon }
const Shields = ShieldData as { [key: string]: IShield }
const Ashes = AshesData as { [key: string]: IAsh }

interface AshProps {
  storeKey: string
}
function Ash({ storeKey }: AshProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()
  const selectedAshOfWar = useSelector(
    (state: RootState) =>
      state.character.ashesOfWar[
        storeKey as keyof typeof state.character.ashesOfWar
      ],
  )

  const selectedWeaponId = useSelector(
    (state: RootState) =>
      state.character[storeKey as keyof typeof state.character],
  )
  let selectedAsh: null | IAsh = null
  let selectedWeapon: null | IWeapon | IShield = null
  if (selectedWeaponId !== '') {
    selectedWeapon =
      Weapons[selectedWeaponId as keyof typeof Weapons] ||
      Shields[selectedWeaponId as keyof typeof Shields]
  }
  if (selectedAshOfWar !== '') {
    selectedAsh = Ashes[selectedAshOfWar as keyof typeof Ashes]
  }

  const handleModalToggle = () => {
    setModalOpen(!modalOpen)
  }
  const handleAshUpdate = (ashId: string) => {
    dispatch(ashOfWarUpdated({ value: ashId, key: storeKey }))
  }

  return (
    <>
      {modalOpen && selectedWeapon ? (
        <Modal
          title={`${selectedWeapon.name} Ash Of War`}
          onClose={handleModalToggle}
        >
          <SearchAndSelect
            handleClear={() => {
              dispatch(ashOfWarUpdated({ id: '', key: storeKey }))
              handleModalToggle()
            }}
            data={[
              {
                label: 'Ashes of War',
                placeholder: '/images/default/item.png',
                value: Object.keys(Ashes).map((dataItemKey) => {
                  return Ashes[dataItemKey as any]
                }),
              },
            ]}
            onSelect={(id: string) => {
              handleAshUpdate(id)
              handleModalToggle()
            }}
          />
        </Modal>
      ) : null}
      {selectedWeapon ? (
        <button
          className=" rounded md:p-2 flex items-center justify-center bg-slate-700 "
          onClick={handleModalToggle}
        >
          {selectedAsh ? (
            <>
              <img
                className="w-full"
                src={
                  selectedAsh.image
                    ? `/images/${selectedAsh.image}`
                    : `/images/default/item.png`
                }
              />
            </>
          ) : (
            'Default'
          )}
        </button>
      ) : (
        <div className="bg-slate-700 rounded md:p-2 aspect-square flex items-center justify-center ">
          None
        </div>
      )}
    </>
  )
}

export default Ash
