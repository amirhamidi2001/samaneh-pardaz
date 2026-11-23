import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'

type ProductOverviewProps = {
  aboutTitle: string
  summary: string
  audienceTitle: string
  audience: string[]
}

export function ProductOverview({ aboutTitle, summary, audienceTitle, audience }: ProductOverviewProps) {
  const hasAudience = audience.length > 0

  return (
    <Section aria-labelledby="product-about-heading">
      <div className={hasAudience ? 'grid gap-10 lg:grid-cols-3 lg:gap-14' : ''}>
        <div className="lg:col-span-2">
          <h2 id="product-about-heading" className="text-3xl font-extrabold leading-[1.4] md:text-4xl">
            {aboutTitle}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-muted md:text-xl md:leading-10">{summary}</p>
        </div>
        {hasAudience ? (
          <Card as="div" tone="tint" aria-labelledby="product-audience-heading" className="reveal self-start">
            <h2 id="product-audience-heading" className="text-xl font-bold">
              {audienceTitle}
            </h2>
            <ul className="mt-5 space-y-4">
              {audience.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-8 text-muted">
                  <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ) : null}
      </div>
    </Section>
  )
}
