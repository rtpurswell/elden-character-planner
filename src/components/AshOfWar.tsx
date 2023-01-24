import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'
import WeaponData from '../data/weapons.json'
import ShieldData from '../data/shields.json'
import AshesData from '../data/ashes.json'
import { IAsh, IShield, IWeapon } from '../data/dataTypes'
import { useState } from 'react'
import Modal from './common/Modal'
import SearchAndSelect from './common/SearchAndSelect'
import { ashOfWarUpdated } from '../store/character'
const Weapons = WeaponData as { [key: string]: IWeapon }
const Shields = ShieldData as { [key: string]: IShield }
const Ashes = AshesData as { [key: string]: IAsh }

interface AshOfWarProps {
  storeKey: string
  label: string
}
function AshOfWar({ storeKey, label }: AshOfWarProps) {
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
  if (selectedAshOfWar.id !== '') {
    selectedAsh = Ashes[selectedAshOfWar.id as keyof typeof Ashes]
  }

  const handleModalToggle = () => {
    setModalOpen(!modalOpen)
  }
  const handleAshUpdate = (ashId: string) => {
    dispatch(ashOfWarUpdated({ id: ashId, affinity: false, key: storeKey }))
  }
  const handleAffinityToggle = () => {
    dispatch(
      ashOfWarUpdated({
        id: selectedAshOfWar.id,
        affinity: !selectedAshOfWar.affinity,
        key: storeKey,
      }),
    )
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
              dispatch(
                ashOfWarUpdated({ id: '', affinity: false, key: storeKey }),
              )
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
        <div className="p-3 bg-slate-700 flex flex-col items-center rounded">
          <div className="font-bold text-center">{label}</div>
          <div className="flex flex-col gap-2 ">
            <button
              className="p-3 rounded bg-slate-600 flex flex-col items-center"
              onClick={handleModalToggle}
            >
              <span>{selectedWeapon.name}</span>
              <div>
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
                    <div>{selectedAsh.name}</div>
                  </>
                ) : (
                  'None'
                )}
              </div>
            </button>

            {selectedAshOfWar.id !== '' ? (
              <button
                className="p-3 bg-slate-600 rounded"
                onClick={handleAffinityToggle}
              >
                {selectedAshOfWar.affinity ? selectedAsh?.affinity : 'Standard'}
              </button>
            ) : (
              <div className="p-3 bg-slate-600 rounded text-center">
                Standard
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default AshOfWar
