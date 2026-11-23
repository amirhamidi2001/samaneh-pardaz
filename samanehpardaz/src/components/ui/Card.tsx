import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  as?: 'div' | 'article' | 'li'
  /** افکت hover برای کارت‌های قابل‌کلیک */
  interactive?: boolean
  /** سطح روشن‌تر (mist) برای کارت‌های داخل بخش سفید */
  tone?: 'white' | 'tint'
  className?: string
  'aria-labelledby'?: string
}

const tones = {
  white: 'bg-white',
  tint: 'bg-mist-50',
}

export function Card({
  children,
  as: Tag = 'div',
  interactive = false,
  tone = 'white',
  className = '',
  'aria-labelledby': labelledBy,
}: CardProps) {
  const hover = interactive
    ? 'transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lifted'
    : ''
  return (
    <Tag
      aria-labelledby={labelledBy}
      className={`rounded-card border border-border p-6 shadow-soft md:p-7 ${tones[tone]} ${hover} ${className}`}
    >
      {children}
    </Tag>
  )
}
