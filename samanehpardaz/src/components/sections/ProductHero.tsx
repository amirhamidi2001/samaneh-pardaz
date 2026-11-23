import { Badge } from '@/components/ui/Badge'
import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { LogoTile } from '@/components/ui/Logo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Product } from '@/content/types'

type ProductHeroProps = {
  product: Product
  byCompanyLabel: string
  statusLabel: string
  visitLabel: string
  breadcrumbLabel: string
  crumbs: Crumb[]
}

export function ProductHero({
  product,
  byCompanyLabel,
  statusLabel,
  visitLabel,
  breadcrumbLabel,
  crumbs,
}: ProductHeroProps) {
  return (
    <section className="on-dark relative isolate overflow-hidden rounded-b-[2rem] bg-navy-950 text-white md:rounded-b-[3rem]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-navy-800/80 via-navy-900 to-navy-950" />
        <div className="bg-grid-dark absolute inset-0" />
        <div className="absolute -top-40 end-[-8rem] size-[30rem] rounded-full bg-royal-600/35 blur-[120px]" />
      </div>
      <Container className="py-14 md:py-20">
        <Breadcrumbs label={breadcrumbLabel} items={crumbs} inverted />
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="animate-rise">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge variant="light">{byCompanyLabel}</Badge>
              <Badge variant="light">{statusLabel}</Badge>
            </div>
            <SectionHeading as="h1" title={product.name} description={product.tagline} inverted />
            <div className="mt-9">
              <Button href={product.externalUrl} external variant="inverse">
                {visitLabel}
                <Icon name="external" />
              </Button>
            </div>
          </div>
          {product.logo ? (
            <div aria-hidden="true" className="order-first lg:order-none">
              <LogoTile
                src={product.logo}
                name={product.name}
                size={96}
                tileClassName="rounded-[2rem] p-5 lg:p-6"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
