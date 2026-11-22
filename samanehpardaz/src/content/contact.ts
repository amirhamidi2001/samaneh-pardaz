import { site } from './site'
import type { ContactInfo, SeoContent } from './types'

// راه‌های ارتباطی از site.ts می‌آیند (منبع واحد)
export const contactInfo: ContactInfo = {
  phones: site.phones,
  email: site.email,
  region: site.region,
}

export const contactPage: {
  seo: SeoContent
  title: string
  description: string
  labels: { phone: string; email: string; region: string }
  emptyMessage: string
} = {
  seo: {
    title: 'تماس با ما',
    description: 'راه‌های ارتباط با سامانه پرداز ایرانیان جوان: تلفن و ایمیل.',
  },
  title: 'تماس با ما',
  description: 'برای دریافت اطلاعات بیشتر درباره خدمات و محصولات با ما در ارتباط باشید.',
  labels: { phone: 'تلفن', email: 'ایمیل', region: 'موقعیت' },
  emptyMessage: 'راه ارتباطی به‌زودی اضافه می‌شود.',
}
