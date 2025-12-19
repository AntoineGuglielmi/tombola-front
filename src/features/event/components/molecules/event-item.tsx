import { cn } from '@/shared/lib/utils'
import { Event } from '@/shared/types/strapi-types'
import EventName from '../atoms/event/event-name'
import EventDescription from '../atoms/event/event-description'

type EventItemProps = {
  className?: string
  children?: React.ReactNode
  event: Event
}

export default function EventItem({
  className,
  children,
  event,
}: EventItemProps) {
  const { name, description } = event
  return (
    <article
      className={cn('EventItem glass p-4 br-4', className)}
      style={{
        background:
          'linear-gradient(90deg, rgb(from #8CD4F7 r g b / 0.25) 0%, rgb(from #B48CF7 r g b / 0.25) 100%)',
      }}
    >
      <EventName>{name}</EventName>
      <EventDescription>{description}</EventDescription>
      {children}
    </article>
  )
}
