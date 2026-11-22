import { Head } from 'vite-react-ssg'
import fontUrl from '@/assets/fonts/Vazirmatn-Variable.woff2?url'
import { site } from '@/content/site'

type SeoProps = {
  title: string
  description: string
  /** مسیر صفحه، مثلاً /about */
  path: string
  /** مسیر یا آدرس تصویر OG؛ مسیر نسبی با siteUrl کامل می‌شود */
  image?: string
  noindex?: boolean
}

export function Seo({ title, description, path, image, noindex = false }: SeoProps) {
  const fullTitle = `${title} | ${site.name}`
  const url = new URL(path, site.siteUrl).toString()
  const ogImage = image ?? __OG_IMAGE__
  const imageUrl = ogImage ? new URL(ogImage, site.siteUrl).toString() : null

  return (
    <Head>
      <link rel="preload" href={fontUrl} as="font" type="font/woff2" crossOrigin="anonymous" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fa_IR" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      <meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}
    </Head>
  )
}
