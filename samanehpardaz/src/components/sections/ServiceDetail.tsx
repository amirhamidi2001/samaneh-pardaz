import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import type { Service } from '@/content/types'

type ServiceDetailProps = {
  service: Service
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const headingId = `service-${service.id}`

  return (
    <Card
      as="article"
      aria-labelledby={headingId}
      className="flex flex-col gap-5 p-8 md:flex-row md:items-start md:gap-8 md:p-10"
    >
      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-control bg-accent-soft text-accent-strong">
        <Icon name={service.icon} className="size-7" />
      </span>
      <div className="flex-1">
        <h2 id={headingId} className="text-xl font-bold leading-snug md:text-2xl">
          {service.title}
        </h2>
        <p className="mt-3 max-w-3xl text-muted md:text-lg">{service.description}</p>
        {service.link ? (
          <Button to={service.link.to} variant="link" className="mt-5">
            {service.link.label}
            <Icon name="arrow" />
          </Button>
        ) : null}
      </div>
    </Card>
  )
}
