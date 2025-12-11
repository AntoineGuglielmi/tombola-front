'use client'

import { UseUser } from '@/shared/store/UseUser'
import { User } from '@/shared/types/strapi-types'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

type UserProviderProps = {
  user: User
  children: React.ReactNode
}

export default function UserProvider({ user, children }: UserProviderProps) {
  const pathname = usePathname()
  const setUser = UseUser((s) => s.setUser)

  useEffect(() => {
    setUser(user)
  }, [pathname, setUser, user])

  return <>{children}</>
}
