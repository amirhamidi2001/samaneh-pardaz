type LogoProps = {
  /** مسیر فایل لوگو (مثلاً /brand/logo-company.svg)؛ اگر null بود نام به‌صورت متن نمایش داده می‌شود */
  src: string | null
  name: string
  className?: string
  /** برای لوگوهای پایین صفحه (فوتر، کارت‌ها)؛ لوگوی هدر eager می‌ماند */
  lazy?: boolean
}

export function Logo({ src, name, className = '', lazy = false }: LogoProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        height={40}
        decoding="async"
        loading={lazy ? 'lazy' : 'eager'}
        className={`h-10 w-auto ${className}`}
      />
    )
  }
  return (
    <span className={`text-lg font-bold leading-tight text-brand ${className}`}>
      {name}
    </span>
  )
}
