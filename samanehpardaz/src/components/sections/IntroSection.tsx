import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { CallToAction } from '@/content/types'

type IntroSectionProps = {
  title: string
  description: string
  link?: CallToAction
}

export function IntroSection({ title, description, link }: IntroSectionProps) {
  return (
    <Section aria-labelledby="intro-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <SectionHeading id="intro-heading" title={title} />
        <div className="reveal border-s-2 border-accent/30 ps-6 md:ps-8">
          <p className="max-w-2xl text-xl leading-10 text-brand/85 md:text-2xl md:leading-[2.6rem]">{description}</p>
          {link ? (
            <Button to={link.to} variant="link" className="mt-6">
              {link.label}
              <Icon name="arrow" />
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  )
}
