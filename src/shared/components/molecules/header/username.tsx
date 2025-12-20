'use client'

import { UseUser } from '@/shared/store/UseUser'
import { Skeleton } from '../../ui/skeleton'

type UsernameProps = object

export default function Username({}: UsernameProps) {
  const user = UseUser((s) => s.user)

  if (!user) {
    return <Skeleton className="h-6 w-32 my-0.5" />
  }

  return <p className="fw-700 fz-5">{user?.username}</p>
}
