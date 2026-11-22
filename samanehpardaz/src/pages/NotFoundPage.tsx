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
      <Section background="alt">
        <div className="text-center">
          <p aria-hidden="true" className="text-7xl font-bold text-accent md:text-8xl">
            {notFound.code}
          </p>
          <div className="mt-4">
            <SectionHeading
              as="h1"
              align="center"
              title={notFound.title}
              description={notFound.description}
            />
          </div>
          <div className="mt-8">
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
