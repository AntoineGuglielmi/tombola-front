import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

type MainProps = {
  className?: string
  layout?: 'center' | 'default'
  height?: 'screen' | 'full'
  container?: true
  children?: React.ReactNode
}

const MainVariants = cva('Main', {
  variants: {
    layout: {
      center: 'flex items-center justify-center',
      default: '',
    },

    height: {
      screen: 'min-h-dvh',
      full: 'h-full',
    },

    container: {
      true: 'tombola-container',
    },
  },

  defaultVariants: {
    layout: 'default',
    height: 'full',
  },
})

export default function Main({
  className,
  layout,
  children,
  height,
  container,
}: MainProps) {
  return (
    <main
      className={cn(MainVariants({ layout, height, container }), className)}
    >
      {children}
    </main>
  )
}
