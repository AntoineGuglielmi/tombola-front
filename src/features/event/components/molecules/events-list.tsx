import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { Event } from '@/shared/types/strapi-types'
import NoEvent from '../atoms/no-event'
import EventItem from './event-item'

type EventsListProps = {
  className?: string
  variant?: 'default' | 'other'
  children?: React.ReactNode
  events: Array<Event>
}

const EventsListVariants = cva('EventsList', {
  variants: {
    variant: {
      default: '',
      other: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export default function EventsList({
  className,
  variant,
  children,
  events,
}: EventsListProps) {
  return (
    <ul className={cn(EventsListVariants({ variant, className }))}>
      {events.length > 0 ? (
        events.map((event) => {
          return (
            <EventItem
              key={event.documentId}
              event={event}
            />
          )
        })
      ) : (
        <li>
          <NoEvent />
        </li>
      )}
    </ul>
  )
}
