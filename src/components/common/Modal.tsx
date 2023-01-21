interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}
function Modal({ children, title, onClose }: ModalProps) {
  return (
    <div className="fixed w-screen h-screen bg-gray-500 bg-opacity-50 flex items-center justify-center ">
      <div className="w-3/4 bg-gray-600 rounded p-5 overflow-y-auto h-4/5">
        <div className="flex">
          <div className="text-3xl p-2">{title}</div>
          <div className="ml-auto p-2">
            <button className="p-3 bg-red-600 rounded px-10" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal
