import type { CallToAction, Product, ProductStatus, SeoContent } from './types'

export const productsPage: { seo: SeoContent; title: string; description: string } = {
  seo: {
    title: 'محصولات',
    description: 'محصولات و پلتفرم‌های سامانه پرداز ایرانیان جوان.',
  },
  title: 'محصولات و پلتفرم‌ها',
  description: 'محصولات و پلتفرم‌هایی که توسط سامانه پرداز ایرانیان جوان ارائه می‌شود.',
}

/** برچسب‌ها و عنوان‌های ثابت کارت محصول و صفحه جزئیات محصول */
export const productLabels = {
  byCompany: 'محصولی از سامانه پرداز ایرانیان جوان',
  viewDetails: 'مشاهده جزئیات',
  visitSitePrefix: 'ورود به سایت',
  aboutTitle: 'درباره این محصول',
  audienceTitle: 'مخاطبان',
  featuresTitle: 'ویژگی‌ها',
  stepsTitle: 'مراحل استفاده',
  status: {
    active: 'فعال',
    'coming-soon': 'به‌زودی',
  } satisfies Record<ProductStatus, string>,
}

/** دعوت به تماس در انتهای صفحه جزئیات هر محصول */
export const productCta: { title: string; description: string; action: CallToAction } = {
  title: 'درباره این محصول سؤالی دارید؟',
  description: 'برای اطلاعات بیشتر با ما در ارتباط باشید.',
  action: { label: 'تماس با ما', to: '/contact' },
}

// برای افزودن محصول جدید فقط یک آبجکت به این آرایه اضافه کنید.
// محتوای هیربد فقط بر پایه اطلاعات رسمی hirbad.com نوشته شده است.
export const products: Product[] = [
  {
    slug: 'hirbad',
    name: 'هیربد',
    tagline: 'پلتفرم آموزش و یادگیری آنلاین',
    summary:
      'هیربد پلتفرمی برای ارتباط با معلمان متخصص و برگزاری جلسات آموزشی خصوصی و گروهی آنلاین است. معلمان تأییدشده را مقایسه کنید، زمان دلخواه خود را رزرو کنید و مسیر یادگیری را با اطمینان شروع کنید.',
    audience: ['دانش‌آموزان و علاقه‌مندان به یادگیری آنلاین'],
    features: [
      {
        title: 'معلمان متخصص و تأییدشده',
        description: 'ارتباط با معلمانی متخصص که تأیید شده‌اند.',
      },
      {
        title: 'جلسات خصوصی و گروهی آنلاین',
        description: 'امکان برگزاری جلسات آموزشی خصوصی و گروهی به‌صورت آنلاین.',
      },
      {
        title: 'مقایسه معلمان',
        description: 'مقایسه معلمان تأییدشده پیش از انتخاب.',
      },
      {
        title: 'رزرو زمان دلخواه',
        description: 'انتخاب و رزرو زمان مناسب برای جلسه.',
      },
    ],
    steps: [
      { title: 'یافتن معلم', description: 'معلم متخصص مناسب خود را پیدا کنید.' },
      { title: 'مقایسه معلمان', description: 'معلمان تأییدشده را با هم مقایسه کنید.' },
      { title: 'رزرو زمان دلخواه', description: 'زمان دلخواه خود را رزرو کنید.' },
      { title: 'شروع یادگیری', description: 'مسیر یادگیری را با اطمینان آغاز کنید.' },
    ],
    externalUrl: 'https://hirbad.com',
    // بعد از افزودن فایل به public/brand/ مقدار را به '/brand/logo-hirbad.svg' تغییر دهید
    logo: null,
    status: 'active',
    featured: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getFeaturedProduct(): Product | undefined {
  return products.find((product) => product.featured) ?? products[0]
}
