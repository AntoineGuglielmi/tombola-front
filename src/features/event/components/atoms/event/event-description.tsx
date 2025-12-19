import { cn } from '@/shared/lib/utils'

type EventDescriptionProps = {
  className?: string
  children?: React.ReactNode
}

export default function EventDescription({
  className,
  children,
}: EventDescriptionProps) {
  return (
    <p className={cn('EventDescription fz-3 fw-200', className)}>{children}</p>
  )
}
