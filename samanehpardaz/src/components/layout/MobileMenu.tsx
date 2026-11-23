import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Icon } from '@/components/ui/Icon'
import type { NavItem } from '@/content/types'

type MobileMenuProps = {
  items: NavItem[]
}

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `block rounded-control px-4 py-3.5 text-base font-medium transition-colors ${
    isActive ? 'bg-mist-100 text-accent-strong' : 'text-brand hover:bg-mist-50'
  }`

export function MobileMenu({ items }: MobileMenuProps) {
  const { pathname } = useLocation()
  // منو فقط برای مسیری باز است که در آن باز شده؛ با تغییر مسیر خودکار بسته می‌شود
  const [openFor, setOpenFor] = useState<string | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const open = openFor === pathname

  // کلیک/لمس بیرون از منو آن را می‌بندد
  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpenFor(null)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && open) {
      setOpenFor(null)
      buttonRef.current?.focus()
    }
  }

  // خروج فوکوس صفحه‌کلید از منو آن را می‌بندد
  const handleBlur = (event: FocusEvent) => {
    if (open && !event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenFor(null)
  }

  return (
    <div ref={rootRef} className="md:hidden" onKeyDown={handleKeyDown} onBlur={handleBlur}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'بستن منو' : 'باز کردن منو'}
        onClick={() => setOpenFor(open ? null : pathname)}
        className="inline-flex size-11 items-center justify-center rounded-control border border-border bg-white text-brand transition-colors hover:bg-mist-50"
      >
        <Icon name={open ? 'close' : 'menu'} className="size-6" />
      </button>
      <nav
        id="mobile-menu"
        aria-label="ناوبری اصلی"
        inert={!open}
        className={`absolute inset-x-0 top-full border-b border-border bg-white px-4 pb-5 pt-3 shadow-lifted transition-[opacity,translate,visibility] duration-200 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1">
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
