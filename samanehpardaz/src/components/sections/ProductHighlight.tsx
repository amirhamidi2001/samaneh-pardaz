import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Product } from '@/content/types'

type ProductHighlightProps = {
  title: string
  description: string
  product: Product
  /** مثلاً «محصولی از سامانه پرداز ایرانیان جوان» */
  byCompanyLabel: string
  viewDetailsLabel: string
  /** برچسب دکمه خروج به سایت محصول */
  visitLabel: string
}

export function ProductHighlight({
  title,
  description,
  product,
  byCompanyLabel,
  viewDetailsLabel,
  visitLabel,
}: ProductHighlightProps) {
  return (
    <Section aria-labelledby="product-heading">
      <SectionHeading id="product-heading" title={title} description={description} />
      <Card className="mt-10 p-8 md:p-10">
        <div className="flex flex-wrap items-center gap-4">
          {product.logo ? (
            <span aria-hidden="true">
              <Logo src={product.logo} name={product.name} lazy />
            </span>
          ) : null}
          <Badge variant="accent">{byCompanyLabel}</Badge>
        </div>
        <h3 className="mt-6 text-2xl font-bold md:text-3xl">{product.name}</h3>
        <p className="mt-2 text-lg font-medium text-accent-strong">{product.tagline}</p>
        <p className="mt-4 max-w-3xl text-muted md:text-lg">{product.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to={`/products/${product.slug}`}>
            {viewDetailsLabel}
            <Icon name="arrow" />
          </Button>
          <Button href={product.externalUrl} external variant="secondary">
            {visitLabel}
            <Icon name="external" />
          </Button>
        </div>
      </Card>
    </Section>
  )
}
