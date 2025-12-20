import ManageEventsSection from '@/features/event/components/molecules/manage-events-section'
import { serviceGetEvents } from '@/features/event/services/services-events'

type TombolaPageProps = {
  params: Promise<void>
}

export default async function TombolaPage({}: TombolaPageProps) {
  const events = await serviceGetEvents()
  console.log({
    events,
  })
  return (
    <>
      <ManageEventsSection events={events} />
    </>
  )
}
