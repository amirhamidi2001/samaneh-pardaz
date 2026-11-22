import { Card } from '@/components/ui/Card'
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
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} as="li">
            <span aria-hidden="true" className="block h-1 w-10 rounded-full bg-accent" />
            <h3 className="mt-5 text-lg font-bold leading-snug">{feature.title}</h3>
            <p className="mt-3 text-muted">{feature.description}</p>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
