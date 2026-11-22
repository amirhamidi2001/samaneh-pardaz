import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Service } from '@/content/types'

type ServicesGridProps = {
  title: string
  description: string
  services: Service[]
}

export function ServicesGrid({ title, description, services }: ServicesGridProps) {
  return (
    <Section background="alt" aria-labelledby="services-heading">
      <SectionHeading id="services-heading" title={title} description={description} />
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card key={service.id} as="li" className="flex flex-col">
            <span className="inline-flex size-12 items-center justify-center rounded-control bg-accent-soft text-accent-strong">
              <Icon name={service.icon} className="size-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold leading-snug">{service.title}</h3>
            <p className="mt-3 flex-1 text-muted">{service.description}</p>
            {service.link ? (
              <Button to={service.link.to} variant="link" className="mt-5 self-start">
                {service.link.label}
                <Icon name="arrow" />
              </Button>
            ) : null}
          </Card>
        ))}
      </ul>
    </Section>
  )
}
