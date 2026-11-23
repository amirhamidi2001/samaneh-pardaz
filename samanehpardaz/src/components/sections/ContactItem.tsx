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

const base =
  'group flex min-h-24 items-center gap-5 rounded-card border border-border bg-white p-5 shadow-soft md:p-6'

export function ContactItem({ icon, label, value, href, ltr = false }: ContactItemProps) {
  const content = (
    <>
      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-navy-800 to-royal-600 text-white shadow-[0_10px_24px_-10px_rgb(31_79_216/0.7)]">
        <Icon name={icon} className="size-6" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm text-muted">{label}</span>
        <span dir={ltr ? 'ltr' : undefined} className={`block text-lg [overflow-wrap:anywhere] font-bold md:text-xl ${ltr ? 'text-start' : ''}`}>
          {value}
        </span>
      </span>
      {href ? <Icon name="arrow" className="size-5 text-accent" /> : null}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={`${base} reveal transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lifted`}
      >
        {content}
      </a>
    )
  }
  return <div className={`${base} reveal`}>{content}</div>
}
