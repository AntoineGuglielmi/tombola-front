'use client'

import { actionLogout } from '@/features/login/actions/actionLogin'
import { Button } from '@/shared/components/ui/button'

type LogoutButtonProps = object

export default function LogoutButton({}: LogoutButtonProps) {
  const handleLogout = async () => {
    await actionLogout()
  }
  return (
    <Button
      variant="default"
      onClick={handleLogout}
    >
      Se déconnecter
    </Button>
  )
}
