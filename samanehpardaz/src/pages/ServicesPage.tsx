import { ServiceDetail } from '@/components/sections/ServiceDetail'
import { Seo } from '@/components/seo/Seo'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services, servicesPage } from '@/content/services'

export function ServicesPage() {
  return (
    <>
      <Seo title={servicesPage.seo.title} description={servicesPage.seo.description} path="/services" />
      <Section background="alt">
        <SectionHeading as="h1" title={servicesPage.title} description={servicesPage.description} />
        <div className="mt-10 space-y-6">
          {services.map((service) => (
            <ServiceDetail key={service.id} service={service} />
          ))}
        </div>
      </Section>
    </>
  )
}
