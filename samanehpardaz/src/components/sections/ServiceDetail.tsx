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
      interactive
      className="reveal group flex flex-col gap-6 p-7 md:flex-row md:items-center md:gap-9 md:p-10"
    >
      <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-navy-800 to-royal-600 text-white shadow-[0_12px_28px_-12px_rgb(31_79_216/0.7)] transition-transform duration-300 group-hover:scale-105 md:size-20">
        <Icon name={service.icon} className="size-8 md:size-9" />
      </span>
      <div className="flex-1">
        <h2 id={headingId} className="text-xl font-bold leading-snug md:text-2xl">
          {service.title}
        </h2>
        <p className="mt-3 max-w-3xl leading-8 text-muted md:text-lg">{service.description}</p>
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
