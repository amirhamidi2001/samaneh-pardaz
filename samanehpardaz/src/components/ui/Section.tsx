import type { ReactNode } from 'react'
import { Container } from './Container'

type SectionBackground = 'default' | 'alt' | 'brand'

type SectionProps = {
  children: ReactNode
  background?: SectionBackground
  id?: string
  className?: string
  /** برای بخش‌هایی که خودشان Container می‌خواهند false بدهید */
  contained?: boolean
  'aria-labelledby'?: string
}

const backgrounds: Record<SectionBackground, string> = {
  default: 'bg-surface text-brand',
  alt: 'bg-surface-alt text-brand',
  brand: 'bg-brand text-white',
}

export function Section({
  children,
  background = 'default',
  id,
  className = '',
  contained = true,
  'aria-labelledby': labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  )
}
