import { CtaBand } from '@/components/sections/CtaBand'
import { Seo } from '@/components/seo/Seo'
import { Icon } from '@/components/ui/Icon'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { about } from '@/content/about'
import { navigation } from '@/content/navigation'
import { site } from '@/content/site'

export function AboutPage() {
  return (
    <>
      <Seo title={about.seo.title} description={about.seo.description} path="/about" />
      <PageHero
        title={about.title}
        description={about.description}
        breadcrumbLabel={site.breadcrumbLabel}
        crumbs={[{ label: navigation[0].label, to: '/' }, { label: about.seo.title }]}
      >
        {site.region ? (
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-muted shadow-soft ring-1 ring-inset ring-border">
            <Icon name="location" className="size-5 text-accent" />
            <span className="font-medium text-brand">{about.locationLabel}:</span>
            <span>{site.region}</span>
          </p>
        ) : null}
      </PageHero>
      <Section>
        {/* ردیف‌های ویرایشی: عنوان در یک ستون و متن در ستون دیگر، با خط جداکننده */}
        <div className="divide-y divide-border border-y border-border">
          {about.sections.map((section, index) => (
            <article
              key={section.title}
              aria-labelledby={`about-section-${index}`}
              className="reveal grid gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-16 md:py-14"
            >
              <h2 id={`about-section-${index}`} className="text-2xl font-extrabold leading-snug md:text-3xl">
                {section.title}
              </h2>
              <p className="max-w-2xl text-lg leading-9 text-muted md:text-xl md:leading-10">{section.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand {...about.cta} />
    </>
  )
}
