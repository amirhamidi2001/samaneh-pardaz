import { Card } from '@/components/ui/Card'
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
      <div className={hasAudience ? 'grid gap-8 md:grid-cols-3' : ''}>
        <div className="md:col-span-2">
          <h2 id="product-about-heading" className="text-2xl font-bold md:text-3xl">
            {aboutTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-muted md:text-lg">{summary}</p>
        </div>
        {hasAudience ? (
          <Card as="div" aria-labelledby="product-audience-heading">
            <h2 id="product-audience-heading" className="text-xl font-bold">
              {audienceTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {audience.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span aria-hidden="true" className="mt-3 size-2 shrink-0 rounded-full bg-accent" />
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
