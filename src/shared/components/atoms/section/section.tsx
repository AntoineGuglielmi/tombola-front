import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

type SectionProps = {
  className?: string
  variant?: 'default' | 'other'
  children?: React.ReactNode
}

const SectionVariants = cva('Section flex flex-col gap-4', {
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

export default function Section({
  className,
  variant,
  children,
}: SectionProps) {
  return (
    <section className={cn(SectionVariants({ variant, className }))}>
      {children}
    </section>
  )
}
