import { strapiClientAuthenticated } from '@/shared/strapi/strapi-client-authenticated'
import { Event } from '@/shared/types/strapi-types'
import { cookies } from 'next/headers'

export const serviceGetEvents = async (): Promise<Array<Event>> => {
  const jwt = (await cookies()).get('auth')?.value
  const eventsCollection = strapiClientAuthenticated(jwt!).collection('events')
  const events = (await eventsCollection.find()).data
  return events as Array<Event>
}
