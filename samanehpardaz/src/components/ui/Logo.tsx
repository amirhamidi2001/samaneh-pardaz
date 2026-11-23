type LogoSize = 40 | 56 | 72 | 96

type LogoProps = {
  /** مسیر فایل لوگو (مثلاً /brand/logo-company.webp)؛ اگر null بود نام به‌صورت متن نمایش داده می‌شود */
  src: string | null
  name: string
  className?: string
  /** برای لوگوهای پایین صفحه (فوتر، کارت‌ها)؛ لوگوی هدر eager می‌ماند */
  lazy?: boolean
  /** اندازه نمایش به پیکسل */
  size?: LogoSize
  /** وقتی کنار لوگو نام به‌صورت متن آمده، alt خالی می‌شود تا دوبار خوانده نشود */
  decorative?: boolean
}

const heights: Record<LogoSize, string> = {
  40: 'h-10',
  56: 'h-14',
  72: 'h-[4.5rem]',
  96: 'h-24',
}

export function Logo({ src, name, className = '', lazy = false, size = 40, decorative = false }: LogoProps) {
  if (src) {
    // نسخه‌های ۴۰/۸۰/۱۲۰ پیکسلی کنار فایل اصلی ساخته شده‌اند (logo-x-40.webp و ...)
    // تا مرورگر به‌جای تصویر بزرگ، اندازهٔ متناسب با نمایش را دانلود کند
    const base = src.replace(/\.webp$/, '')
    return (
      <img
        src={`${base}-${size > 40 ? 120 : 80}.webp`}
        srcSet={`${base}-40.webp 40w, ${base}-80.webp 80w, ${base}-120.webp 120w`}
        sizes={`${size}px`}
        alt={decorative ? '' : name}
        width={size}
        height={size}
        decoding="async"
        loading={lazy ? 'lazy' : 'eager'}
        className={`${heights[size]} w-auto ${className}`}
      />
    )
  }
  return (
    <span className={`text-lg font-bold leading-tight text-brand ${className}`}>
      {name}
    </span>
  )
}

type LogoTileProps = LogoProps & { tileClassName?: string }

/** لوگو روی کاشی روشن؛ برای نمایش روی پس‌زمینه تیره (لوگوی شرکت بخش سرمه‌ای دارد) */
export function LogoTile({ tileClassName = '', size = 56, ...logo }: LogoTileProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-2xl bg-white p-2.5 shadow-[0_8px_24px_-8px_rgb(6_20_46/0.45)] ring-1 ring-white/60 ${tileClassName}`}
    >
      <Logo {...logo} size={size} decorative />
    </span>
  )
}
