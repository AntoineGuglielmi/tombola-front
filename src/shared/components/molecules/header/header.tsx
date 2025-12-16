import Username from './username'

type HeaderProps = {
  children?: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="Header p-8">
      <p>Bonjour</p>
      <Username />
      {children}
    </header>
  )
}
