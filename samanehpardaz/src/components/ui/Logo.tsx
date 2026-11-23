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
    // نسخه‌های ۴۰/۸۰/۱۲۰ پیکسلی کنار فایل اصلی ساخته شده‌اند (logo-x-40.webp و ...)
    // تا مرورگر به‌جای تصویر بزرگ، اندازهٔ متناسب با نمایش را دانلود کند
    const base = src.replace(/\.webp$/, '')
    return (
      <img
        src={`${base}-80.webp`}
        srcSet={`${base}-40.webp 40w, ${base}-80.webp 80w, ${base}-120.webp 120w`}
        sizes="40px"
        alt={name}
        width={40}
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
