import type { ReactNode } from 'react'

export type IconName =
  | 'arrow'
  | 'menu'
  | 'close'
  | 'phone'
  | 'mail'
  | 'location'
  | 'book'
  | 'system'
  | 'support'
  | 'external'
  | 'check'
  | 'chevron'

type IconProps = {
  name: IconName
  className?: string
  /** اگر آیکون معنا دارد، برچسب بدهید؛ در غیر این صورت تزئینی است */
  label?: string
}

// آیکون‌های جهت‌دار با نمای راست ترسیم شده‌اند و در RTL برعکس می‌شوند.
// داخل عنصر والدِ `group` در hover کمی به جهت خود حرکت می‌کنند.
const directional: Partial<Record<IconName, string>> = {
  arrow: 'rtl:-scale-x-100 transition-transform duration-200 group-hover:-translate-x-1',
  external:
    'rtl:-scale-x-100 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5',
  chevron: 'rtl:-scale-x-100',
}

const paths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </>
  ),
  book: (
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H20v14H5.5A1.5 1.5 0 0 0 4 19.5v-14zM4 19.5A1.5 1.5 0 0 0 5.5 21H20" />
  ),
  system: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  support: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13h3v5H5a1 1 0 0 1-1-1v-4zM20 13h-3v5h2a1 1 0 0 0 1-1v-4z" />
      <path d="M17 18c0 2-2 3-5 3" />
    </>
  ),
  external: (
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  chevron: <path d="M9 5l7 7-7 7" />,
}

export function Icon({ name, className = 'size-5', label }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${directional[name] ?? ''} ${className}`}
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true, focusable: 'false' })}
    >
      {paths[name]}
    </svg>
  )
}
