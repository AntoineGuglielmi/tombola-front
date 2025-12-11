import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

type MainProps = {
  className?: string
  variant?: 'center' | 'other'
  children?: React.ReactNode
}

const MainVariants = cva('Main', {
  variants: {
    variant: {
      center: 'min-h-dvh flex items-center tombola-container',
      other: '',
    },
  },
  defaultVariants: {
    variant: 'center',
  },
})

export default function Main({ className, variant, children }: MainProps) {
  return (
    <main className={cn(MainVariants({ variant, className }))}>{children}</main>
  )
}
