import { CtaBand } from '@/components/sections/CtaBand'
import { Seo } from '@/components/seo/Seo'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { about } from '@/content/about'
import { site } from '@/content/site'

export function AboutPage() {
  return (
    <>
      <Seo title={about.seo.title} description={about.seo.description} path="/about" />
      <Section background="alt">
        <SectionHeading as="h1" title={about.title} description={about.description} />
        {site.region ? (
          <p className="mt-6 inline-flex items-center gap-2 text-muted">
            <Icon name="location" className="size-5 text-accent" />
            <span className="font-medium text-brand">{about.locationLabel}:</span>
            <span>{site.region}</span>
          </p>
        ) : null}
      </Section>
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {about.sections.map((section, index) => (
            <Card
              key={section.title}
              as="article"
              aria-labelledby={`about-section-${index}`}
              className="p-8"
            >
              <h2 id={`about-section-${index}`} className="text-xl font-bold md:text-2xl">
                {section.title}
              </h2>
              <p className="mt-4 text-muted md:text-lg">{section.body}</p>
            </Card>
          ))}
        </div>
      </Section>
      <CtaBand {...about.cta} />
    </>
  )
}
