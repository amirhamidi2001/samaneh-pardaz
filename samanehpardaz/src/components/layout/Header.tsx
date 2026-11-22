import { Link, NavLink } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { navigation } from '@/content/navigation'
import { site } from '@/content/site'
import { MobileMenu } from './MobileMenu'

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `rounded-control px-3 py-2 font-medium transition-colors ${
    isActive ? 'bg-surface-alt text-brand' : 'text-muted hover:bg-surface-alt hover:text-brand'
  }`

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link to="/" className="inline-flex items-center">
          <Logo src={site.logo} name={site.name} />
        </Link>
        <nav aria-label="ناوبری اصلی" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className={linkClasses}>
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
