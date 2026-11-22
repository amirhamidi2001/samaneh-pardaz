import { ProductCard } from '@/components/sections/ProductCard'
import { Seo } from '@/components/seo/Seo'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { productLabels, products, productsPage } from '@/content/products'

export function ProductsPage() {
  return (
    <>
      <Seo title={productsPage.seo.title} description={productsPage.seo.description} path="/products" />
      <Section background="alt">
        <SectionHeading as="h1" title={productsPage.title} description={productsPage.description} />
        <div className="mt-10 space-y-6">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              statusLabel={productLabels.status[product.status]}
              viewDetailsLabel={productLabels.viewDetails}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
