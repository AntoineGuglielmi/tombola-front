import Username from './username'

type HeaderProps = {
  className?: string
  children?: React.ReactNode
}

export default function Header({ className, children }: HeaderProps) {
  return (
    <header className="Header p-8">
      <p>Bonjour</p>
      <Username />
      {children}
    </header>
  )
}
