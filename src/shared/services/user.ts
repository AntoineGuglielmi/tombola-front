import { cookies } from 'next/headers'
import { strapiClientAuthenticated } from '../strapi/strapi-client-authenticated'

export const serviceGetLoggedInUser = async () => {
  const cookieStore = await cookies()
  const jwt = cookieStore.get('auth')?.value
  const user_documentId = cookieStore.get('user')?.value

  if (!jwt || !user_documentId) return null

  try {
    const user = await (
      await strapiClientAuthenticated(jwt).fetch(`/users/me`)
    ).json()
    return user
  } catch (err) {
    console.error('Error fetching user', err)
    return null
  }
}
