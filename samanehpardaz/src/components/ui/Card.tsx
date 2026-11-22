import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  as?: 'div' | 'article' | 'li'
  /** افکت hover برای کارت‌های قابل‌کلیک */
  interactive?: boolean
  className?: string
  'aria-labelledby'?: string
}

export function Card({
  children,
  as: Tag = 'div',
  interactive = false,
  className = '',
  'aria-labelledby': labelledBy,
}: CardProps) {
  const hover = interactive
    ? 'transition-shadow duration-200 hover:shadow-lifted'
    : ''
  return (
    <Tag
      aria-labelledby={labelledBy}
      className={`rounded-card border border-border bg-surface p-6 shadow-soft ${hover} ${className}`}
    >
      {children}
    </Tag>
  )
}
