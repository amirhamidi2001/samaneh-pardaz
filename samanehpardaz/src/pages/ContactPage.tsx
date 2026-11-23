import { ContactItem } from '@/components/sections/ContactItem'
import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { contactInfo, contactPage } from '@/content/contact'
import { navigation } from '@/content/navigation'
import { site } from '@/content/site'
import { formatPhone, toTelHref } from '@/lib/format'
import { useEmail } from '@/lib/useEmail'

export function ContactPage() {
  const { phones, region } = contactInfo
  const email = useEmail()
  const { labels } = contactPage
  const hasAny = phones.length > 0 || contactInfo.email !== null || region !== null

  return (
    <>
      <Seo title={contactPage.seo.title} description={contactPage.seo.description} path="/contact" />
      <PageHero
        title={contactPage.title}
        description={contactPage.description}
        breadcrumbLabel={site.breadcrumbLabel}
        crumbs={[{ label: navigation[0].label, to: '/' }, { label: contactPage.seo.title }]}
      />
      <Section spacing="compact">
        {hasAny ? (
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {phones.map((phone) => (
              <li key={phone}>
                <ContactItem icon="phone" label={labels.phone} value={formatPhone(phone)} href={toTelHref(phone)} />
              </li>
            ))}
            {contactInfo.email ? (
              <li>
                <ContactItem
                  icon="mail"
                  label={labels.email}
                  value={email ?? '…'}
                  href={email ? `mailto:${email}` : undefined}
                  ltr
                />
              </li>
            ) : null}
            {region ? (
              <li>
                <ContactItem icon="location" label={labels.region} value={region} />
              </li>
            ) : null}
          </ul>
        ) : (
          <p className="text-lg text-muted">{contactPage.emptyMessage}</p>
        )}
      </Section>
    </>
  )
}
