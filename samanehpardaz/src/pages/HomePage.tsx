import { CtaBand } from '@/components/sections/CtaBand'
import { Hero } from '@/components/sections/Hero'
import { IntroSection } from '@/components/sections/IntroSection'
import { ProductHighlight } from '@/components/sections/ProductHighlight'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd'
import { Seo } from '@/components/seo/Seo'
import { home } from '@/content/home'
import { navigation } from '@/content/navigation'
import { getFeaturedProduct, productLabels } from '@/content/products'
import { services } from '@/content/services'

export function HomePage() {
  const product = getFeaturedProduct()
  const aboutLink = navigation.find((item) => item.to === '/about')

  return (
    <>
      <Seo title={home.seo.title} description={home.seo.description} path="/" />
      <OrganizationJsonLd />
      <Hero {...home.hero} nodes={services.map((service) => service.icon)} />
      <IntroSection {...home.intro} link={aboutLink} />
      <ServicesGrid {...home.servicesSection} services={services} />
      {product ? (
        <ProductHighlight
          {...home.productSection}
          product={product}
          byCompanyLabel={productLabels.byCompany}
          viewDetailsLabel={productLabels.viewDetails}
          visitLabel={`${productLabels.visitSitePrefix} ${product.name}`}
        />
      ) : null}
      <CtaBand {...home.cta} />
    </>
  )
}
