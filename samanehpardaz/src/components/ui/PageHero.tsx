import type { ReactNode } from 'react'
import { Breadcrumbs, type Crumb } from './Breadcrumbs'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

type PageHeroProps = {
  title: string
  description?: string
  breadcrumbLabel: string
  crumbs: Crumb[]
  /** محتوای اضافه زیر توضیح (مثلاً موقعیت یا دکمه) */
  children?: ReactNode
}

/** هدر مشترک صفحات داخلی: پس‌زمینه روشن با بافت شبکه‌ای و گرادیان آبی ملایم */
export function PageHero({ title, description, breadcrumbLabel, crumbs, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-linear-to-b from-mist-100 via-mist-50 to-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid-light absolute inset-0" />
        <div className="absolute -top-32 end-[-6rem] size-96 rounded-full bg-mist-300/40 blur-3xl" />
      </div>
      <Container className="py-14 md:py-20">
        <Breadcrumbs label={breadcrumbLabel} items={crumbs} />
        <SectionHeading as="h1" title={title} description={description} />
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  )
}
