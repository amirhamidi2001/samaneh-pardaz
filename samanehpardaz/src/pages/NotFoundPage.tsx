import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/content/site'

export function NotFoundPage() {
  const { notFound } = site
  return (
    <>
      <Seo title={notFound.seo.title} description={notFound.seo.description} path="/404" noindex />
      <Section background="alt" className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid-light absolute inset-0" />
        </div>
        <div className="text-center">
          <p
            aria-hidden="true"
            className="bg-linear-to-b from-royal-600 to-navy-800 bg-clip-text text-8xl font-extrabold leading-tight text-transparent md:text-9xl"
          >
            {notFound.code}
          </p>
          <div className="mt-4">
            <SectionHeading as="h1" align="center" title={notFound.title} description={notFound.description} />
          </div>
          <div className="mt-9">
            <Button to="/">
              {notFound.backLabel}
              <Icon name="arrow" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
