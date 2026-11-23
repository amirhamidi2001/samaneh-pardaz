// پیش‌نویس، نیازمند تأیید مالک
import type { CallToAction, SeoContent } from './types'

export const home: {
  seo: SeoContent
  hero: {
    title: string
    description: string
    primaryCta: CallToAction
    secondaryCta: CallToAction
  }
  intro: { title: string; description: string }
  servicesSection: { title: string; description: string }
  productSection: { title: string; description: string }
  cta: { title: string; description: string; action: CallToAction }
} = {
  seo: {
    title: 'صفحه اصلی',
    description:
      'سامانه پرداز ایرانیان جوان؛ آموزش و پژوهش در فناوری اطلاعات، آموزش تحصیلی در محل، خدمات سامانه ویژه و پشتیبانی فناوری اطلاعات.',
  },
  hero: {
    title: 'سامانه پرداز ایرانیان جوان',
    description:
      'حوزه‌های فعالیت سامانه پرداز ایرانیان جوان شامل آموزش و پژوهش در فناوری اطلاعات، آموزش تحصیلی در محل، خدمات سامانه ویژه و پشتیبانی فناوری اطلاعات است.',
    primaryCta: { label: 'خدمات ما', to: '/services' },
    secondaryCta: { label: 'محصولات', to: '/products' },
  },
  intro: {
    title: 'درباره ما',
    description:
      'سامانه پرداز ایرانیان جوان در حوزه فناوری اطلاعات و آموزش فعالیت دارد. هیربد، پلتفرم آموزش و یادگیری آنلاین، یکی از محصولات ماست.',
  },
  servicesSection: {
    title: 'حوزه‌های فعالیت',
    description: 'خدمات ما در چهار گروه ارائه می‌شود.',
  },
  productSection: {
    title: 'محصول شاخص',
    description: 'با پلتفرم آموزشی هیربد آشنا شوید.',
  },
  cta: {
    title: 'با ما در ارتباط باشید',
    description: 'برای اطلاعات بیشتر درباره خدمات و محصولات با ما تماس بگیرید.',
    action: { label: 'تماس با ما', to: '/contact' },
  },
}
