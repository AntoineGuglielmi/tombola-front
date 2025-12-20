import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

type SectionTitleProps = {
  className?: string
  variant?: 'default' | 'other'
  children?: React.ReactNode
}

const SectionTitleVariants = cva('SectionTitle fz-8 fw-200', {
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

export default function SectionTitle({
  className,
  variant,
  children,
}: SectionTitleProps) {
  return (
    <h2 className={cn(SectionTitleVariants({ variant, className }))}>
      {children}
    </h2>
  )
}
