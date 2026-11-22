import { useRef, useState, type KeyboardEvent } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Icon } from '@/components/ui/Icon'
import type { NavItem } from '@/content/types'

type MobileMenuProps = {
  items: NavItem[]
}

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `block rounded-control px-4 py-3 font-medium ${
    isActive ? 'bg-surface-alt text-brand' : 'text-muted hover:bg-surface-alt hover:text-brand'
  }`

export function MobileMenu({ items }: MobileMenuProps) {
  const { pathname } = useLocation()
  // منو فقط برای مسیری باز است که در آن باز شده؛ با تغییر مسیر خودکار بسته می‌شود
  const [openFor, setOpenFor] = useState<string | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const open = openFor === pathname

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && open) {
      setOpenFor(null)
      buttonRef.current?.focus()
    }
  }

  return (
    <div className="md:hidden" onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'بستن منو' : 'باز کردن منو'}
        onClick={() => setOpenFor(open ? null : pathname)}
        className="inline-flex size-11 items-center justify-center rounded-control text-brand hover:bg-surface-alt"
      >
        <Icon name={open ? 'close' : 'menu'} className="size-6" />
      </button>
      <nav
        id="mobile-menu"
        aria-label="ناوبری اصلی"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-border bg-surface px-4 pb-4 shadow-soft"
      >
        <ul className="flex flex-col gap-1 pt-2">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === '/'} className={linkClasses}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
