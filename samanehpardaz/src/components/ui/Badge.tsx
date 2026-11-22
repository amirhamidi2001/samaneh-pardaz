import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  variant?: 'neutral' | 'accent'
  className?: string
}

const variants = {
  neutral: 'bg-slate-100 text-muted',
  accent: 'bg-accent-soft text-accent-strong',
}

export function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
