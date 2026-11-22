import { useParams } from 'react-router-dom'
import { CtaBand } from '@/components/sections/CtaBand'
import { ProductFeatures } from '@/components/sections/ProductFeatures'
import { ProductHero } from '@/components/sections/ProductHero'
import { ProductOverview } from '@/components/sections/ProductOverview'
import { ProductSteps } from '@/components/sections/ProductSteps'
import { Seo } from '@/components/seo/Seo'
import { getProductBySlug, productCta, productLabels } from '@/content/products'
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
