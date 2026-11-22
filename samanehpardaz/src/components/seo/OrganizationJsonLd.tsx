import { Head } from 'vite-react-ssg'
import { site } from '@/content/site'

// فقط فیلدهای تأییدشده و غیر null در JSON-LD می‌آیند
function buildOrganization() {
  const address =
    site.addressRegion || site.addressCountry
      ? {
          '@type': 'PostalAddress',
          ...(site.addressRegion ? { addressRegion: site.addressRegion } : {}),
          ...(site.addressCountry ? { addressCountry: site.addressCountry } : {}),
        }
      : null

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.siteUrl,
    ...(site.email ? { email: site.email } : {}),
    ...(site.phones.length > 0
      ? { telephone: site.phones.map((phone) => `+98${phone.replace(/^0/, '')}`) }
      : {}),
    ...(address ? { address } : {}),
    ...(site.logo ? { logo: new URL(site.logo, site.siteUrl).toString() } : {}),
  }
}

export function OrganizationJsonLd() {
  // جلوگیری از بسته‌شدن زودهنگام تگ script
  const json = JSON.stringify(buildOrganization()).replace(/</g, '\\u003c')
  return (
    <Head>
      <script type="application/ld+json">{json}</script>
    </Head>
  )
}
