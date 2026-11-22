import type { RouteRecord } from 'vite-react-ssg'
import { RootLayout } from '@/components/layout/RootLayout'
import { products } from '@/content/products'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProductDetailPage } from '@/pages/ProductDetailPage'
import { ProductsPage } from '@/pages/ProductsPage'
import { ServicesPage } from '@/pages/ServicesPage'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'products', element: <ProductsPage /> },
      {
        path: 'products/:slug',
        element: <ProductDetailPage />,
        getStaticPaths: () => products.map((product) => `products/${product.slug}`),
      },
      { path: 'contact', element: <ContactPage /> },
      // wildcard prerender نمی‌شود؛ 404.html در vite.config.ts (includedRoutes/onFinished) ساخته می‌شود
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
