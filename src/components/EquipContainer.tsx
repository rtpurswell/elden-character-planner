import { Children } from 'react'
interface EquipContainerProps {
  children: React.ReactNode
}
const EquipContainer = ({ children }: EquipContainerProps) => {
  const ColSpan = 5 - Children.count(children)
  //col-span-2 col-span-1
  return (
    <div className="grid grid-cols-5 gap-1">
      {children} <div className={`bg-red-600 col-span-${ColSpan}`}></div>
    </div>
  )
}

export default EquipContainer
