import Link from 'next/link'
import { VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import React from 'react'
import { Button, buttonVariants } from '../../ui/button'

type BaseProps = {
  className?: string
  children: React.ReactNode
} & VariantProps<typeof buttonVariants>

type NavButtonAsLink = BaseProps & {
  href: string
  onClick?: never
  type?: never
}

type NavButtonAsButton = BaseProps & {
  href?: never
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
}

export type NavButtonProps = NavButtonAsLink | NavButtonAsButton

export default function NavButton(props: NavButtonProps) {
  const { className, children, variant = 'ghost', size } = props

  const baseClass = 'flex flex-col items-center h-auto fz-3'

  // 👉 Cas lien
  if ('href' in props) {
    return (
      <Button
        asChild
        variant={variant}
        size={size}
        className={cn(baseClass, className)}
      >
        {props.href && <Link href={props.href}>{children}</Link>}
      </Button>
    )
  }

  // 👉 Cas bouton
  return (
    <Button
      variant={variant}
      size={size}
      onClick={props.onClick}
      type={props.type ?? 'button'}
      className={cn(baseClass, className)}
    >
      {children}
    </Button>
  )
}
