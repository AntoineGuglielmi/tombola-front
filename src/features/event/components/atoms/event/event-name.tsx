import { cn } from '@/shared/lib/utils'

type EventNameProps = {
  className?: string
  children?: React.ReactNode
}

export default function EventName({ className, children }: EventNameProps) {
  return (
    <h3 className={cn('EventTitle fz-4 uppercase fw-700 ls-1', className)}>
      {children}
    </h3>
  )
}
