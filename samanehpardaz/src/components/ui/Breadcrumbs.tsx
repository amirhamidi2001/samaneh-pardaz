import { Link } from 'react-router-dom'
import { Icon } from './Icon'

export type Crumb = { label: string; to?: string }

type BreadcrumbsProps = {
  label: string
  items: Crumb[]
  /** روی پس‌زمینه تیره */
  inverted?: boolean
}

export function Breadcrumbs({ label, items, inverted = false }: BreadcrumbsProps) {
  const link = inverted ? 'text-mist-300 hover:text-white' : 'text-muted hover:text-accent'
  const current = inverted ? 'text-white' : 'text-brand'

  return (
    <nav aria-label={label} className="mb-8 text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.to && !isLast ? (
                <Link to={item.to} className={`inline-block py-1 transition-colors ${link}`}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className={`font-medium ${current}`}>
                  {item.label}
                </span>
              )}
              {!isLast ? <Icon name="chevron" className={`size-3.5 ${inverted ? 'text-mist-400' : 'text-mist-300'}`} /> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
