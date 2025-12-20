import NavButton from './nav-button'
import { Home, UserRound } from 'lucide-react'

type NavProps = {
  children?: React.ReactNode
}

export default function Nav({ children }: NavProps) {
  return (
    <nav className="Nav bg-global-background/75 backdrop-blur-[3px] sticky bottom-0">
      <ul className="py-4 flex gap-4 justify-center items-center">
        <li>
          <NavButton href="/tombola">
            <Home className="size-6" />
            <p>Accueil</p>
          </NavButton>
        </li>

        <li>
          <NavButton href="/user">
            <UserRound className="size-6" />
            <p>Compte</p>
          </NavButton>
        </li>
      </ul>
    </nav>
  )
}
