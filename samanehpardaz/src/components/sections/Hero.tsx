import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { CallToAction } from '@/content/types'

type HeroProps = {
  title: string
  description: string
  primaryCta: CallToAction
  secondaryCta: CallToAction
}

// گرافیک هندسی ساده و تزئینی (بدون تصویر واقعی)
function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 400 320"
      aria-hidden="true"
      focusable="false"
      className="mx-auto h-auto w-full max-w-sm lg:max-w-md"
    >
      <rect x="12" y="12" width="376" height="296" rx="32" className="fill-surface stroke-border" strokeWidth="2" />
      <rect x="44" y="44" width="92" height="232" rx="22" className="fill-brand" />
      <rect x="152" y="44" width="108" height="108" rx="22" className="fill-accent-soft" />
      <rect x="152" y="168" width="108" height="108" rx="22" className="fill-accent" />
      <circle cx="324" cy="98" r="30" className="fill-accent-soft" />
      <circle cx="324" cy="222" r="30" className="fill-brand" />
      <path
        d="M260 98h34M260 222h34M324 128v64"
        className="stroke-accent"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="324" cy="160" r="9" className="fill-accent" />
      <rect x="64" y="72" width="52" height="8" rx="4" className="fill-white/70" />
      <rect x="64" y="94" width="36" height="8" rx="4" className="fill-white/40" />
    </svg>
  )
}

export function Hero({ title, description, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="overflow-hidden bg-surface-alt">
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading as="h1" title={title} description={description} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={primaryCta.to}>
              {primaryCta.label}
              <Icon name="arrow" />
            </Button>
            <Button to={secondaryCta.to} variant="secondary">
              {secondaryCta.label}
            </Button>
          </div>
        </div>
        <HeroGraphic />
      </Container>
    </section>
  )
}
