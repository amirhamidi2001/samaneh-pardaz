import type { IconName } from '@/components/ui/Icon'

export type SeoContent = {
  title: string
  description: string
}

export type CallToAction = {
  label: string
  to: string
}

export type SocialLink = {
  label: string
  url: string
}

export type SiteConfig = {
  name: string
  siteUrl: string
  /** شماره‌ها به‌صورت لاتین (مثلاً 09021944825)؛ خالی یعنی نمایش داده نشود */
  phones: string[]
  email: string | null
  /** آدرس نمایشی (فقط نام استان) */
  region: string | null
  /** نام استان برای JSON-LD (بدون «استان»)، و کد کشور */
  addressRegion: string | null
  addressCountry: string | null
  /** مسیر لوگو مثلاً /brand/logo-company.svg؛ null یعنی نمایش متنی نام */
  logo: string | null
  social: SocialLink[] | null
  skipToContentLabel: string
  /** برچسب دسترسی‌پذیری برای مسیر صفحه (breadcrumb) */
  breadcrumbLabel: string
  footer: {
    /** از {year} برای سال شمسی استفاده کنید */
    copyright: string
    navigationTitle: string
    productsTitle: string
    contactTitle: string
  }
  notFound: {
    seo: SeoContent
    /** عدد تزئینی بالای عنوان صفحه ۴۰۴ */
    code: string
    title: string
    description: string
    backLabel: string
  }
}

export type NavItem = {
  label: string
  to: string
}

export type Service = {
  id: string
  title: string
  description: string
  icon: IconName
  link?: CallToAction
}

export type ProductStatus = 'active' | 'coming-soon'

export type ProductFeature = {
  title: string
  description: string
}

export type ProductStep = {
  title: string
  description: string
}

export type Product = {
  slug: string
  name: string
  tagline: string
  summary: string
  audience: string[]
  features: ProductFeature[]
  steps?: ProductStep[]
  externalUrl: string
  /** مسیر لوگو مثلاً /brand/logo-hirbad.svg؛ null یعنی نمایش متنی نام */
  logo: string | null
  status: ProductStatus
  /** محصول شاخص در صفحه اصلی؛ اگر هیچ‌کدام نبود اولین محصول */
  featured?: boolean
}

export type ContactInfo = {
  phones: string[]
  email: string | null
  region: string | null
}
