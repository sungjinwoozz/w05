import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  color?: string
  rotate?: string
  className?: string
}

export default function Badge({
  children,
  color = '',
  rotate = '',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-md text-xl font-bold text-white shadow-sm ${color} ${rotate} ${className}`}
    >
      {children}
    </span>
  )
}
