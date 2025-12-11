import { create } from 'zustand'
import zukeeper from 'zukeeper'
import { User } from '../types/strapi-types'

export type UseUserState = {
  user: User | null
  setUser: (user: User) => void
}

export const UseUser = create<UseUserState>(
  zukeeper(
    (
      set: (
        partial:
          | Partial<UseUserState>
          | ((state: UseUserState) => Partial<UseUserState>),
      ) => void,
    ) => ({
      user: null,
      setUser: (user: User) => set(() => ({ user })),
    }),
  ),
)
