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
  /** فاصله عمودی: default (بخش اصلی)، compact (هدر صفحات داخلی)، none */
  spacing?: 'default' | 'compact' | 'none'
  'aria-labelledby'?: string
}

const backgrounds: Record<SectionBackground, string> = {
  default: 'bg-white text-brand',
  alt: 'bg-mist-50 text-brand',
  brand: 'bg-navy-950 text-white on-dark',
}

const spacings = {
  default: 'py-20 md:py-28',
  compact: 'py-16 md:py-24',
  none: '',
}

export function Section({
  children,
  background = 'default',
  id,
  className = '',
  contained = true,
  spacing = 'default',
  'aria-labelledby': labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${spacings[spacing]} ${backgrounds[background]} ${className}`}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  )
}
