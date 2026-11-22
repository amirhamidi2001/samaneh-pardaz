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
    <Section background="brand" aria-labelledby="cta-heading">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <SectionHeading id="cta-heading" title={title} description={description} inverted />
        <Button to={action.to} className="self-start md:self-auto">
          {action.label}
          <Icon name="arrow" />
        </Button>
      </div>
    </Section>
  )
}
