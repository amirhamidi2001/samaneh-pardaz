import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ProductStep } from '@/content/types'
import { toPersianDigits } from '@/lib/format'

type ProductStepsProps = {
  title: string
  steps: ProductStep[]
}

export function ProductSteps({ title, steps }: ProductStepsProps) {
  return (
    <Section aria-labelledby="product-steps-heading">
      <SectionHeading id="product-steps-heading" title={title} />
      <ol role="list" className="mt-10 space-y-6">
        {steps.map((step, index) => (
          <li key={step.title} className="flex items-start gap-5">
            <span
              aria-hidden="true"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white"
            >
              {toPersianDigits(index + 1)}
            </span>
            <div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-1 text-muted">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
