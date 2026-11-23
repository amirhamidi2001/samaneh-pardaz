import type { SeoContent, Service } from './types'

export const servicesPage: { seo: SeoContent; title: string; description: string } = {
  seo: {
    title: 'خدمات',
    description:
      'حوزه‌های فعالیت سامانه پرداز ایرانیان جوان: آموزش و پژوهش در فناوری اطلاعات، آموزش تحصیلی در محل، خدمات سامانه ویژه و پشتیبانی فناوری اطلاعات.',
  },
  title: 'خدمات و حوزه‌های فعالیت',
  description: 'حوزه‌های فعالیت ما در چهار گروه خدمات معرفی شده است.',
}

export const services: Service[] = [
  {
    id: 'it-education-research',
    title: 'خدمات آموزش و پژوهش در زمینه فناوری اطلاعات',
    description:
      'خدمات آموزشی و پژوهشی در حوزه فناوری اطلاعات برای علاقه‌مندان و سازمان‌ها.',
    icon: 'book',
  },
  {
    id: 'in-person-tutoring',
    title: 'خدمات آموزش تحصیلی آنلاین (معلم خصوصی)',
    description:
      'آموزش تحصیلی آنلاین و معلم خصوصی. نسخه آنلاین این حوزه در پلتفرم هیربد ارائه می‌شود.',
    icon: 'location',
    link: { label: 'آشنایی با هیربد', to: '/products/hirbad' },
  },
  // نیازمند تأیید مالک: توضیح این گروه عمداً بسیار کلی است.
  {
    id: 'special-systems',
    title: 'خدمات سامانه ویژه',
    description: 'خدمات مرتبط با سامانه‌های ویژه در حوزه فناوری اطلاعات.',
    icon: 'system',
  },
  {
    id: 'it-support',
    title: 'خدمات پشتیبانی فناوری اطلاعات',
    description: 'خدمات پشتیبانی در زمینه فناوری اطلاعات.',
    icon: 'support',
  },
]
