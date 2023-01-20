interface EquipContainerProps {
  children: React.ReactNode
}
const EquipContainer = ({ children }: EquipContainerProps) => {
  return <div className="grid grid-cols-5 gap-1">{children}</div>
}

export default EquipContainer
