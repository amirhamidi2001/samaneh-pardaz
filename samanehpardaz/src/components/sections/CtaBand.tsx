import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { CallToAction } from '@/content/types'

type CtaBandProps = {
  title: string
  description: string
  action: CallToAction
}

export function CtaBand({ title, description, action }: CtaBandProps) {
  return (
    <Section aria-labelledby="cta-heading" spacing="compact">
      <div className="on-dark reveal relative isolate overflow-hidden rounded-[2rem] bg-navy-900 px-7 py-12 text-white md:px-14 md:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-br from-royal-700 via-navy-800 to-navy-950" />
          <div className="bg-grid-dark absolute inset-0 opacity-60" />
          <div className="absolute -bottom-24 end-[-4rem] size-80 rounded-full bg-mist-400/25 blur-[90px]" />
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          <SectionHeading id="cta-heading" title={title} description={description} inverted />
          <Button to={action.to} variant="inverse" className="self-start md:shrink-0 md:self-auto">
            {action.label}
            <Icon name="arrow" />
          </Button>
        </div>
      </div>
    </Section>
  )
}
