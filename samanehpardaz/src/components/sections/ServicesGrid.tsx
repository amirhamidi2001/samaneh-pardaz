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
      <ul className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
        {services.map((service) => (
          <Card key={service.id} as="li" interactive className="reveal group flex flex-col p-7 md:p-8">
            <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-navy-800 to-royal-600 text-white shadow-[0_10px_24px_-10px_rgb(31_79_216/0.7)] transition-transform duration-300 group-hover:scale-105">
              <Icon name={service.icon} className="size-7" />
            </span>
            <h3 className="mt-6 text-xl font-bold leading-snug">{service.title}</h3>
            <p className="mt-3 flex-1 leading-8 text-muted">{service.description}</p>
            {service.link ? (
              <Button to={service.link.to} variant="link" className="mt-6 self-start">
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
