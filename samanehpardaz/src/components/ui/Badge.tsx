import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  variant?: 'neutral' | 'accent' | 'light'
  className?: string
}

const variants = {
  neutral: 'bg-mist-50 text-muted ring-1 ring-inset ring-border',
  accent: 'bg-accent-soft text-accent-strong ring-1 ring-inset ring-mist-300/60',
  // روی پس‌زمینه تیره
  light: 'bg-white/10 text-mist-100 ring-1 ring-inset ring-white/20',
}

export function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1 text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
