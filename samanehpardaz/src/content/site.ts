import type { SiteConfig } from './types'

export const site: SiteConfig = {
  name: 'سامانه پرداز ایرانیان جوان',
  siteUrl: 'https://samanehpardaz.vercel.app',
  phones: ['09021944825', '09102441937'],
  // به‌صورت base64 نگه‌داری می‌شود تا آدرس به‌شکل متن ساده در باندل جاوااسکریپت نباشد (ضد جمع‌آوری ایمیل)
  email: atob('aGlyYmFkcGxhdGZvcm1AZ21haWwuY29t'),
  region: 'استان تهران',
  addressRegion: 'تهران',
  addressCountry: 'IR',
  logo: '/brand/logo-company.webp',
  social: null,
  skipToContentLabel: 'پرش به محتوا',
  breadcrumbLabel: 'مسیر صفحه',
  footer: {
    copyright: '© {year} سامانه پرداز ایرانیان جوان',
    navigationTitle: 'دسترسی سریع',
    productsTitle: 'محصولات',
    contactTitle: 'تماس با ما',
  },
  notFound: {
    seo: {
      title: 'صفحه پیدا نشد',
      description: 'صفحه‌ای که به دنبال آن بودید وجود ندارد.',
    },
    code: '۴۰۴',
    title: 'صفحه پیدا نشد',
    description: 'آدرس واردشده معتبر نیست یا صفحه جابه‌جا شده است.',
    backLabel: 'بازگشت به صفحه اصلی',
  },
}
