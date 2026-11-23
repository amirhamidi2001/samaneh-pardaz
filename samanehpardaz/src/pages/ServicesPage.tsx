import { ServiceDetail } from '@/components/sections/ServiceDetail'
import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { navigation } from '@/content/navigation'
import { services, servicesPage } from '@/content/services'
import { site } from '@/content/site'

export function ServicesPage() {
  return (
    <>
      <Seo title={servicesPage.seo.title} description={servicesPage.seo.description} path="/services" />
      <PageHero
        title={servicesPage.title}
        description={servicesPage.description}
        breadcrumbLabel={site.breadcrumbLabel}
        crumbs={[{ label: navigation[0].label, to: '/' }, { label: servicesPage.seo.title }]}
      />
      <Section spacing="compact">
        <div className="space-y-5 md:space-y-6">
          {services.map((service) => (
            <ServiceDetail key={service.id} service={service} />
          ))}
        </div>
      </Section>
    </>
  )
}
