import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'
import type { Product } from '@/content/types'

type ProductCardProps = {
  product: Product
  statusLabel: string
  viewDetailsLabel: string
}

// کارت افقی تمام‌عرض؛ با یک یا چند محصول متعادل دیده می‌شود
export function ProductCard({ product, statusLabel, viewDetailsLabel }: ProductCardProps) {
  const headingId = `product-${product.slug}`

  return (
    <Card
      as="article"
      aria-labelledby={headingId}
      interactive
      className="reveal flex flex-col gap-8 p-7 md:flex-row md:items-center md:gap-10 md:p-10"
    >
      {product.logo ? (
        <span
          aria-hidden="true"
          className="inline-flex size-28 shrink-0 items-center justify-center self-start rounded-[1.5rem] bg-mist-50 p-3 ring-1 ring-inset ring-border md:size-32"
        >
          <Logo src={product.logo} name={product.name} size={96} lazy decorative />
        </span>
      ) : null}
      <div className="flex-1">
        <Badge variant={product.status === 'active' ? 'accent' : 'neutral'}>{statusLabel}</Badge>
        <h2 id={headingId} className="mt-4 text-2xl font-extrabold md:text-3xl">
          {product.name}
        </h2>
        <p className="mt-2 text-lg font-medium text-accent-strong">{product.tagline}</p>
        <p className="mt-4 max-w-3xl leading-8 text-muted md:text-lg">{product.summary}</p>
      </div>
      <div className="md:shrink-0">
        <Button to={`/products/${product.slug}`}>
          {viewDetailsLabel} <span className="sr-only">{product.name}</span>
          <Icon name="arrow" />
        </Button>
      </div>
    </Card>
  )
}
