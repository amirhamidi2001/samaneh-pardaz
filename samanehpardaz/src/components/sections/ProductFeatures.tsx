import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ProductFeature } from '@/content/types'

type ProductFeaturesProps = {
  title: string
  features: ProductFeature[]
}

export function ProductFeatures({ title, features }: ProductFeaturesProps) {
  return (
    <Section background="alt" aria-labelledby="product-features-heading">
      <SectionHeading id="product-features-heading" title={title} />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} as="li" interactive className="reveal">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
              <Icon name="check" className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-bold leading-snug">{feature.title}</h3>
            <p className="mt-3 leading-8 text-muted">{feature.description}</p>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
