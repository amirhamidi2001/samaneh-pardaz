import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
// فقط برای فعال‌شدن تایپ ssgOptions
import type {} from 'vite-react-ssg'
import type { HtmlTagDescriptor } from 'vite'

const hasPublicFile = (name: string) =>
  existsSync(fileURLToPath(new URL(`./public/${name}`, import.meta.url)))

// favicon و تصویر OG را مالک فراهم می‌کند؛ فقط در صورت وجود فایل به آن‌ها ارجاع داده می‌شود
const hasFavicon = hasPublicFile('favicon.svg')
const hasOgImage = hasPublicFile('og-image.png')

const gaId = loadEnv('production', process.cwd(), 'VITE_').VITE_GA_MEASUREMENT_ID || process.env.VITE_GA_MEASUREMENT_ID

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'head-assets',
      // favicon: ico (سازگار با همه ابزارها) + svg + apple-touch-icon
      // GA: فقط اگر VITE_GA_MEASUREMENT_ID تنظیم شده باشد (async، بدون مسدودکردن رندر)
      transformIndexHtml: () => {
        const tags: HtmlTagDescriptor[] = hasFavicon
          ? [
              { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '32x32' }, injectTo: 'head-prepend' },
              { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }, injectTo: 'head-prepend' },
              { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }, injectTo: 'head-prepend' },
            ]
          : [{ tag: 'link', attrs: { rel: 'icon', href: 'data:,' }, injectTo: 'head' }]
        if (gaId) {
          tags.push(
            { tag: 'script', attrs: { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${gaId}` }, injectTo: 'head' },
            {
              tag: 'script',
              children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`,
              injectTo: 'head',
            },
          )
        }
        return tags
      },
    },
  ],
  define: {
    __OG_IMAGE__: JSON.stringify(hasOgImage ? '/og-image.png' : null),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // تنظیمات prerender (vite-react-ssg)
  ssgOptions: {
    entry: 'src/main.tsx',
    // خروجی flat (about.html): با canonical بدون اسلش پایانی هم‌خوان است و
    // vite preview و Vercel (cleanUrls) مسیر /about را مستقیم و بدون ریدایرکت سرو می‌کنند
    dirStyle: 'flat',
    // مسیر wildcard به‌صورت پیش‌فرض prerender نمی‌شود؛ /404 را دستی اضافه می‌کنیم تا 404.html ساخته شود
    includedRoutes: (paths) => [...new Set([...paths, '/404'])],
    // CSS (~۲۰KB) داخل HTML قرار می‌گیرد تا فایل stylesheet خارجیِ مسدودکنندهٔ رندر وجود نداشته باشد
    onPageRendered: (_route, html) =>
      html.replace(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/g, (_m, href: string) => {
        const css = readFileSync(fileURLToPath(new URL(`./dist${href}`, import.meta.url)), 'utf8')
        // Tailwind v4 از سینتکس range می‌نویسد؛ به فرم کلاسیک min-width برمی‌گردانیم (سازگاری بیشتر با ابزارها)
        const compat = css.replace(/\(width\s*>=\s*([\d.]+(?:rem|px|em))\)/g, '(min-width:$1)')
        return `<style>${compat}</style>`
      }),
  },
})
