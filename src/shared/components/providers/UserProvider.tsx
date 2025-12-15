'use client'

import { UseUser } from '@/shared/store/UseUser'
import { User } from '@/shared/types/strapi-types'
import { useEffect } from 'react'

type UserProviderProps = {
  user: User
  children: React.ReactNode
}

export default function UserProvider({ user, children }: UserProviderProps) {
  const setUser = UseUser((s) => s.setUser)

  useEffect(() => {
    setUser(user)
  }, [setUser, user])

  return <>{children}</>
}
