interface H1Props {
  children: React.ReactNode
}
function H1({ children }: H1Props) {
  return <h1 className="text-3xl">{children}</h1>
}

export default H1
