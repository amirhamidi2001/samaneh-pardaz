import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon, type IconName } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/content/site'
import type { CallToAction } from '@/content/types'

type HeroProps = {
  title: string
  description: string
  primaryCta: CallToAction
  secondaryCta: CallToAction
  /** آیکون حوزه‌های فعالیت که دور نشان شرکت می‌چرخند (از services.ts) */
  nodes?: IconName[]
}

// موقعیت گره‌ها در بوم ۴۰۰×۴۰۰ (مرکز = ۲۰۰,۲۰۰)
const POSITIONS = [
  { x: 72, y: 84 },
  { x: 328, y: 84 },
  { x: 72, y: 316 },
  { x: 328, y: 316 },
]

// تنها لحظهٔ حرکتیِ هماهنگ‌شده در سایت: نشان شرکت، سپس خطوط و حوزه‌های فعالیت یکی‌یکی ظاهر می‌شوند
function HeroDiagram({ nodes }: { nodes: IconName[] }) {
  const items = nodes.slice(0, POSITIONS.length)

  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[26rem] lg:max-w-[32rem]">
      <svg viewBox="0 0 400 400" focusable="false" className="absolute inset-0 size-full">
        <g fill="none" className="animate-fade [animation-delay:200ms]">
          <circle cx="200" cy="200" r="92" stroke="rgb(179 211 247 / 0.16)" strokeDasharray="3 7" />
          <circle cx="200" cy="200" r="168" stroke="rgb(179 211 247 / 0.1)" />
        </g>
        {items.map((_, index) => (
          <line
            key={index}
            x1="200"
            y1="200"
            x2={POSITIONS[index].x}
            y2={POSITIONS[index].y}
            pathLength={1}
            strokeDasharray={1}
            stroke="rgb(127 180 240 / 0.55)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-draw"
            style={{ animationDelay: `${700 + index * 140}ms` }}
          />
        ))}
      </svg>

      <div
        className="animate-pop absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.75rem] bg-white shadow-[0_24px_70px_-12px_rgb(31_79_216/0.65)] ring-8 ring-white/10 [animation-delay:350ms] sm:size-32"
      >
        {site.logo ? <Logo src={site.logo} name={site.name} size={72} /> : null}
      </div>

      {items.map((icon, index) => (
        <div
          key={`${icon}-${index}`}
          className="animate-pop absolute grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-white/10 text-mist-100 ring-1 ring-white/25 backdrop-blur-sm sm:size-16"
          style={{
            left: `${(POSITIONS[index].x / 400) * 100}%`,
            top: `${(POSITIONS[index].y / 400) * 100}%`,
            animationDelay: `${1000 + index * 140}ms`,
          }}
        >
          <Icon name={icon} className="size-6 sm:size-7" />
        </div>
      ))}
    </div>
  )
}

export function Hero({ title, description, primaryCta, secondaryCta, nodes = [] }: HeroProps) {
  return (
    <section className="on-dark relative isolate overflow-hidden rounded-b-[2rem] bg-navy-950 text-white md:rounded-b-[1.5rem]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-navy-900/70 to-navy-950" />
        <div className="bg-grid-dark absolute inset-0" />
        <div className="absolute -top-48 end-[-12rem] size-[36rem] rounded-full bg-royal-600/35 blur-[130px]" />
        <div className="absolute -bottom-56 start-[-10rem] size-[30rem] rounded-full bg-mist-400/15 blur-[120px]" />
      </div>

      <Container className="grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-32">
        <div>
          <SectionHeading as="h1" title={title} description={description} inverted />
          <div className="animate-rise mt-10 flex flex-wrap gap-3 [animation-delay:150ms]">
            <Button to={primaryCta.to} variant="inverse">
              {primaryCta.label}
              <Icon name="arrow" />
            </Button>
            <Button to={secondaryCta.to} variant="ghost">
              {secondaryCta.label}
            </Button>
          </div>
        </div>
        {nodes.length > 0 ? <HeroDiagram nodes={nodes} /> : null}
      </Container>
    </section>
  )
}
