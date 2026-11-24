import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { LogoTile } from '@/components/ui/Logo'
import { about } from '@/content/about'
import { navigation } from '@/content/navigation'
import { products } from '@/content/products'
import { site } from '@/content/site'
import { formatCopyright, formatPhone, toTelHref } from '@/lib/format'
import { useEmail } from '@/lib/useEmail'

const linkClasses = 'text-mist-300 transition-colors hover:text-white'
const titleClasses = 'mb-5 text-base font-bold text-white'

export function Footer() {
  const email = useEmail()
  const hasContact = site.phones.length > 0 || site.email !== null || site.region !== null

  return (
    <footer className="on-dark relative overflow-hidden bg-navy-950 text-mist-300">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-mist-400/50 to-transparent"
      />
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="max-w-xs">
          <div className="flex items-center gap-3">
            <LogoTile src={site.logo} name={site.name} size={40} lazy tileClassName="p-2" />
            <span aria-hidden="true" className="font-extrabold leading-tight text-white">{site.name}</span>
          </div>
          <p className="mt-5 leading-8">{about.description}</p>
        </div>

        <nav aria-label={site.footer.navigationTitle}>
          <h2 className={titleClasses}>{site.footer.navigationTitle}</h2>
          <ul className="space-y-3">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClasses}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {products.length > 0 ? (
          <nav aria-label={site.footer.productsTitle}>
            <h2 className={titleClasses}>{site.footer.productsTitle}</h2>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link to={`/products/${product.slug}`} className={linkClasses}>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        {hasContact ? (
          <div>
            <h2 className={titleClasses}>{site.footer.contactTitle}</h2>
            <ul className="space-y-3.5">
              {site.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Icon name="phone" className="size-5 text-mist-400" />
                  <a href={toTelHref(phone)} className={linkClasses}>
                    {formatPhone(phone)}
                  </a>
                </li>
              ))}
              {email ? (
                <li className="flex items-center gap-3">
                  <Icon name="mail" className="size-5 text-mist-400" />
                  <a href={`mailto:${email}`} className={`${linkClasses} break-all`}>
                    {email}
                  </a>
                </li>
              ) : null}
              {site.region ? (
                <li className="flex items-center gap-3">
                  <Icon name="location" className="size-5 text-mist-400" />
                  <span>{site.region}</span>
                </li>
              ) : null}
            </ul>
          </div>
        ) : null}
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-6 text-sm text-mist-400">{formatCopyright(site.footer.copyright)}</Container>
      </div>
    </footer>
  )
}
