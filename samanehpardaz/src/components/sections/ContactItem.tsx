import { Icon, type IconName } from '@/components/ui/Icon'

type ContactItemProps = {
  icon: IconName
  label: string
  value: string
  /** اگر بدهید آیتم کل‌کارت‌ قابل‌کلیک است (tel: یا mailto:) */
  href?: string
  /** برای مقادیر لاتین مثل ایمیل */
  ltr?: boolean
}

const base = 'flex min-h-16 items-center gap-4 rounded-card border border-border bg-surface p-5 shadow-soft'

export function ContactItem({ icon, label, value, href, ltr = false }: ContactItemProps) {
  const content = (
    <>
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-control bg-accent-soft text-accent-strong">
        <Icon name={icon} className="size-6" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm text-muted">{label}</span>
        <span
          dir={ltr ? 'ltr' : undefined}
          className={`block break-words text-lg font-bold ${ltr ? 'text-start' : ''}`}
        >
          {value}
        </span>
      </span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={`${base} transition-shadow duration-200 hover:shadow-lifted`}
      >
        {content}
      </a>
    )
  }
  return <div className={base}>{content}</div>
}
