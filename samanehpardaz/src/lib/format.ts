const PERSIAN_ZERO = 0x06f0 // ۰

/** تبدیل ارقام لاتین به ارقام فارسی؛ سایر کاراکترها دست‌نخورده می‌مانند. */
export function toPersianDigits(value: string | number): string {
  return String(value).replace(/\d/g, (digit) =>
    String.fromCharCode(PERSIAN_ZERO + Number(digit)),
  )
}

/** قالب نمایش شماره تلفن با ارقام فارسی، مثلاً 09021944825 ← ۰۹۰۲۱۹۴۴۸۲۵ */
export function formatPhone(phone: string): string {
  return toPersianDigits(phone)
}

/** سال شمسی جاری با ارقام فارسی (مثلاً ۱۴۰۵) */
export function getCurrentYearFa(date: Date = new Date()): string {
  return toPersianDigits(
    new Intl.DateTimeFormat('en-u-ca-persian-nu-latn', { year: 'numeric' })
      .format(date)
      .replace(/\D/g, ''),
  )
}

/** جایگزینی {year} در متن قالب (مثلاً متن حقوق محفوظ فوتر) */
export function formatCopyright(template: string, year: string = getCurrentYearFa()): string {
  return template.replace('{year}', year)
}

/** لینک tel: بین‌المللی، مثلاً 09021944825 ← tel:+989021944825 */
export function toTelHref(phone: string): string {
  return `tel:+98${phone.replace(/^0/, '')}`
}
