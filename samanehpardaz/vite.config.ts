import { existsSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// فقط برای فعال‌شدن تایپ ssgOptions
import type {} from 'vite-react-ssg'

const hasPublicFile = (name: string) =>
  existsSync(fileURLToPath(new URL(`./public/${name}`, import.meta.url)))

// favicon و تصویر OG را مالک فراهم می‌کند؛ فقط در صورت وجود فایل به آن‌ها ارجاع داده می‌شود
const hasFavicon = hasPublicFile('favicon.svg')
const hasOgImage = hasPublicFile('og-image.png')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'optional-favicon',
      // بدون favicon مرورگر خودکار /favicon.ico را می‌خواهد و ۴۰۴ در کنسول می‌بیند؛
      // پس تا وقتی مالک فایل را نگذاشته، یک favicon خالی (بدون درخواست شبکه) می‌گذاریم
      transformIndexHtml: () => [
        {
          tag: 'link',
          attrs: hasFavicon
            ? { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
            : { rel: 'icon', href: 'data:,' },
          injectTo: 'head',
        },
      ],
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
  },
})
