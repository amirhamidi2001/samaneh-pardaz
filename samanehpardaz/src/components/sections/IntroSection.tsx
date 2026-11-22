import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

type IntroSectionProps = {
  title: string
  description: string
}

export function IntroSection({ title, description }: IntroSectionProps) {
  return (
    <Section aria-labelledby="intro-heading">
      <SectionHeading id="intro-heading" title={title} description={description} />
    </Section>
  )
}
