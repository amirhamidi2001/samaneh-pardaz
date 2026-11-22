import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Product } from '@/content/types'

type ProductHeroProps = {
  product: Product
  byCompanyLabel: string
  statusLabel: string
  visitLabel: string
}

export function ProductHero({ product, byCompanyLabel, statusLabel, visitLabel }: ProductHeroProps) {
  return (
    <Section background="alt">
      {product.logo ? (
        <div aria-hidden="true" className="mb-6">
          <Logo src={product.logo} name={product.name} />
        </div>
      ) : null}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <Badge variant="accent">{byCompanyLabel}</Badge>
        <Badge>{statusLabel}</Badge>
      </div>
      <SectionHeading as="h1" title={product.name} description={product.tagline} />
      <div className="mt-8">
        <Button href={product.externalUrl} external>
          {visitLabel}
          <Icon name="external" />
        </Button>
      </div>
    </Section>
  )
}
