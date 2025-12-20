import { cn } from '@/shared/lib/utils'

type NoEventProps = {
  className?: string
  children?: React.ReactNode
}

export default function NoEvent({ className, children }: NoEventProps) {
  return <p className={cn('NoEvent ', className)}>Pas d'événement trouvé</p>
}
