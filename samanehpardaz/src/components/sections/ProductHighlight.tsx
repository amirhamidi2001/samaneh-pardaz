import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { LogoTile } from '@/components/ui/Logo'
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
      <div className="on-dark reveal relative isolate mt-12 overflow-hidden rounded-[2rem] bg-navy-950 p-8 text-white shadow-lifted md:p-14">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-br from-navy-800/80 via-navy-900 to-navy-950" />
          <div className="bg-grid-dark absolute inset-0 opacity-70" />
          <div className="absolute -top-32 start-[-6rem] size-96 rounded-full bg-royal-600/40 blur-[110px]" />
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <Badge variant="light">{byCompanyLabel}</Badge>
            <h3 className="mt-6 text-3xl font-extrabold leading-tight md:text-4xl">{product.name}</h3>
            <p className="mt-3 text-lg font-medium text-mist-300 md:text-xl">{product.tagline}</p>
            <p className="mt-5 max-w-2xl leading-9 text-mist-200/90 md:text-lg">{product.summary}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to={`/products/${product.slug}`} variant="inverse">
                {viewDetailsLabel}
                <Icon name="arrow" />
              </Button>
              <Button href={product.externalUrl} external variant="ghost">
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
                lazy
                tileClassName="rounded-[1.75rem] p-4 lg:p-5"
              />
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  )
}
