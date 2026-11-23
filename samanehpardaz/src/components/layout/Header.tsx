import { Link, NavLink } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { navigation } from '@/content/navigation'
import { site } from '@/content/site'
import { MobileMenu } from './MobileMenu'

const CONTACT_PATH = '/contact'

// آیتم «تماس» به‌شکل دکمه نمایش داده می‌شود؛ بقیه به‌صورت لینک ساده
const linkClasses =
  (to: string) =>
  ({ isActive }: { isActive: boolean }) => {
    if (to === CONTACT_PATH) {
      return `ms-2 inline-flex min-h-10 items-center rounded-control px-5 font-bold text-white transition-colors ${
        isActive ? 'bg-accent-strong' : 'bg-accent hover:bg-accent-strong'
      }`
    }
    return `relative rounded-control px-3.5 py-2 font-medium transition-colors ${
      isActive ? 'bg-mist-100 text-accent-strong' : 'text-muted hover:bg-mist-50 hover:text-brand'
    }`
  }

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-white/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75">
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <Link to="/" className="inline-flex items-center gap-3">
          <Logo src={site.logo} name={site.name} size={40} decorative />
          {site.logo ? (
            <span className="text-[0.95rem] font-extrabold leading-tight text-brand sm:text-base">{site.name}</span>
          ) : null}
        </Link>
        <nav aria-label="ناوبری اصلی" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className={linkClasses(item.to)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu items={navigation} />
      </Container>
    </header>
  )
}
