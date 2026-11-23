import { useParams } from 'react-router-dom'
import { CtaBand } from '@/components/sections/CtaBand'
import { ProductFeatures } from '@/components/sections/ProductFeatures'
import { ProductHero } from '@/components/sections/ProductHero'
import { ProductOverview } from '@/components/sections/ProductOverview'
import { ProductSteps } from '@/components/sections/ProductSteps'
import { Seo } from '@/components/seo/Seo'
import { navigation } from '@/content/navigation'
import { getProductBySlug, productCta, productLabels, productsPage } from '@/content/products'
import { site } from '@/content/site'
import { NotFoundPage } from './NotFoundPage'

export function ProductDetailPage() {
  const { slug = '' } = useParams()
  const product = getProductBySlug(slug)

  if (!product) return <NotFoundPage />

  return (
    <>
      <Seo title={product.name} description={product.summary} path={`/products/${product.slug}`} />
      <ProductHero
        product={product}
        byCompanyLabel={productLabels.byCompany}
        statusLabel={productLabels.status[product.status]}
        visitLabel={`${productLabels.visitSitePrefix} ${product.name}`}
        breadcrumbLabel={site.breadcrumbLabel}
        crumbs={[
          { label: navigation[0].label, to: '/' },
          { label: productsPage.seo.title, to: '/products' },
          { label: product.name },
        ]}
      />
      <ProductOverview
        aboutTitle={productLabels.aboutTitle}
        summary={product.summary}
        audienceTitle={productLabels.audienceTitle}
        audience={product.audience}
      />
      {product.features.length > 0 ? (
        <ProductFeatures title={productLabels.featuresTitle} features={product.features} />
      ) : null}
      {product.steps && product.steps.length > 0 ? (
        <ProductSteps title={productLabels.stepsTitle} steps={product.steps} />
      ) : null}
      <CtaBand {...productCta} />
    </>
  )
}
