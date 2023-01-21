interface H2Props {
  children: React.ReactNode
}
function H2({ children }: H2Props) {
  return <h2 className="text-2xl">{children}</h2>
}

export default H2
