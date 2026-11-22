import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'
import { navigation } from '@/content/navigation'
import { products } from '@/content/products'
import { site } from '@/content/site'
import { formatCopyright, formatPhone, toTelHref } from '@/lib/format'

const linkClasses = 'text-slate-300 transition-colors hover:text-white'
const titleClasses = 'mb-4 text-base font-bold text-white'

export function Footer() {
  const hasContact = site.phones.length > 0 || site.email !== null || site.region !== null

  return (
    <footer className="bg-brand text-slate-300">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo src={site.logo} name={site.name} className="text-white!" lazy />
        </div>

        <nav aria-label={site.footer.navigationTitle}>
          <h2 className={titleClasses}>{site.footer.navigationTitle}</h2>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClasses}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {products.length > 0 ? (
            <>
              <h2 className={`${titleClasses} mt-8`}>{site.footer.productsTitle}</h2>
              <ul className="space-y-2">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link to={`/products/${product.slug}`} className={linkClasses}>
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </nav>

        {hasContact ? (
          <div>
            <h2 className={titleClasses}>{site.footer.contactTitle}</h2>
            <ul className="space-y-3">
              {site.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2">
                  <Icon name="phone" />
                  <a href={toTelHref(phone)} className={linkClasses}>
                    {formatPhone(phone)}
                  </a>
                </li>
              ))}
              {site.email ? (
                <li className="flex items-center gap-2">
                  <Icon name="mail" />
                  <a href={`mailto:${site.email}`} className={linkClasses}>
                    {site.email}
                  </a>
                </li>
              ) : null}
              {site.region ? (
                <li className="flex items-center gap-2">
                  <Icon name="location" />
                  <span>{site.region}</span>
                </li>
              ) : null}
            </ul>
          </div>
        ) : null}
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 text-sm">{formatCopyright(site.footer.copyright)}</Container>
      </div>
    </footer>
  )
}
