// پیش‌نویس، نیازمند تأیید مالک
import type { CallToAction, SeoContent } from './types'

export const about: {
  seo: SeoContent
  title: string
  description: string
  sections: { title: string; body: string }[]
  locationLabel: string
  cta: { title: string; description: string; action: CallToAction }
} = {
  seo: {
    title: 'درباره ما',
    description:
      'معرفی سامانه پرداز ایرانیان جوان و حوزه‌های تمرکز آن در فناوری اطلاعات و آموزش.',
  },
  title: 'درباره سامانه پرداز ایرانیان جوان',
  description: 'شرکتی در حوزه فناوری اطلاعات و آموزش.',
  sections: [
    {
      title: 'حوزه‌های تمرکز',
      body: 'تمرکز ما بر آموزش و پژوهش در زمینه فناوری اطلاعات، آموزش تحصیلی در محل، خدمات سامانه ویژه و پشتیبانی فناوری اطلاعات است.',
    },
    {
      title: 'محصولات',
      body: 'هیربد، پلتفرم آموزش و یادگیری آنلاین، یکی از محصولات این شرکت است.',
    },
    {
      title: 'رویکرد',
      body: 'می‌کوشیم خدمات و محصولات خود را ساده، شفاف و قابل‌اعتماد ارائه کنیم.',
    },
  ],
  locationLabel: 'موقعیت',
  cta: {
    title: 'با ما در ارتباط باشید',
    description: 'برای اطلاعات بیشتر با ما تماس بگیرید.',
    action: { label: 'تماس با ما', to: '/contact' },
  },
}
