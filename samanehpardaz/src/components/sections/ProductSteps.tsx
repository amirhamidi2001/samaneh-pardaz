import type { CSSProperties } from 'react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ProductStep } from '@/content/types'
import { toPersianDigits } from '@/lib/format'

type ProductStepsProps = {
  title: string
  steps: ProductStep[]
}

// مراحل یک توالی واقعی‌اند؛ پس شماره‌گذاری و خط اتصال معنا دارد
export function ProductSteps({ title, steps }: ProductStepsProps) {
  return (
    <Section aria-labelledby="product-steps-heading">
      <SectionHeading id="product-steps-heading" title={title} />
      <ol
        role="list"
        className="mt-12 grid gap-8 md:grid-cols-[repeat(var(--steps),minmax(0,1fr))] md:gap-6"
        style={{ '--steps': steps.length } as CSSProperties}
      >
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1
          return (
            <li key={step.title} className="relative flex items-start gap-5 md:block">
              <span
                aria-hidden="true"
                className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-navy-800 to-royal-600 text-lg font-bold text-white shadow-[0_10px_22px_-10px_rgb(31_79_216/0.7)] ring-4 ring-white"
              >
                {toPersianDigits(index + 1)}
              </span>
              {!isLast ? (
                <>
                  {/* خط عمودی در موبایل */}
                  <span aria-hidden="true" className="absolute start-6 top-12 -bottom-8 w-px bg-border md:hidden" />
                  {/* خط افقی در دسکتاپ: از دایره فعلی تا دایره بعدی */}
                  <span aria-hidden="true" className="absolute start-16 end-[-0.5rem] top-6 hidden h-px bg-border md:block" />
                </>
              ) : null}
              <div className="md:mt-6">
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-1.5 leading-8 text-muted">{step.description}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
