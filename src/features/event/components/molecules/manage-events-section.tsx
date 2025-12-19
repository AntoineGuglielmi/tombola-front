import Section from '@/shared/components/atoms/section/section'
import SectionTitle from '@/shared/components/atoms/section/section-title'
import { Event } from '@/shared/types/strapi-types'
import EventsList from './events-list'

type ManageEventsSectionProps = {
  events: Array<Event>
}

export default function ManageEventsSection({
  events,
}: ManageEventsSectionProps) {
  return (
    <Section>
      <SectionTitle>Tous les événements</SectionTitle>

      <EventsList events={events} />
    </Section>
  )
}
