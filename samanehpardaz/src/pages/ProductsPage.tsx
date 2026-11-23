import { ProductCard } from '@/components/sections/ProductCard'
import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { navigation } from '@/content/navigation'
import { productLabels, products, productsPage } from '@/content/products'
import { site } from '@/content/site'

export function ProductsPage() {
  return (
    <>
      <Seo title={productsPage.seo.title} description={productsPage.seo.description} path="/products" />
      <PageHero
        title={productsPage.title}
        description={productsPage.description}
        breadcrumbLabel={site.breadcrumbLabel}
        crumbs={[{ label: navigation[0].label, to: '/' }, { label: productsPage.seo.title }]}
      />
      <Section spacing="compact">
        <div className="space-y-5 md:space-y-6">
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
