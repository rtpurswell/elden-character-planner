interface H2Props {
  children: React.ReactNode
  className?: string
}
function H2({ children, className }: H2Props) {
  return (
    <h2 className={`text-2xl ${className ? className : ''}`}>{children}</h2>
  )
}

export default H2
