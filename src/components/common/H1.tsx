interface H1Props {
  children: React.ReactNode
  className: string
}
function H1({ children, className }: H1Props) {
  return <h1 className={`text-xl md:text-2xl ${className}`}>{children}</h1>
}

export default H1
