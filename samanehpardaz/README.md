# وب‌سایت شرکتی سامانه پرداز ایرانیان جوان

React + Vite + TypeScript + Tailwind CSS 4 + react-router-dom 6 + vite-react-ssg (prerender).
بدون Backend و دیتابیس؛ تمام محتوا در `src/content/`.

## دستورها

- `npm install` نصب وابستگی‌ها
- `npm run dev` اجرای محیط توسعه
- `npm run build` ساخت نسخه نهایی با prerender در پوشه `dist/`
- `npm run preview` پیش‌نمایش خروجی ساخته‌شده
- `npm run lint` بررسی کد (oxlint)

## دیپلوی روی Vercel

پروژه یک سایت کاملاً استاتیک است؛ هر مسیر هنگام build به یک فایل HTML جدا تبدیل می‌شود
(`about.html`، `products/hirbad.html`، `404.html` و ...). تنظیمات در `vercel.json` است:

- **Framework Preset:** Vite
- **Build Command:** `npm run build` ← **حتماً این، نه `vite build`**. دستور پیش‌فرض preset ویت prerender ندارد
  و فقط یک `index.html` خالی می‌سازد. `vercel.json` این مقدار را تنظیم کرده است.
- **Output Directory:** `dist`
- `cleanUrls: true` و `trailingSlash: false` مسیر `/about` را از `about.html` سرو می‌کنند
  (هم‌خوان با canonical بدون اسلش پایانی) و مسیر ناشناخته `404.html` را برمی‌گرداند.
- فایل‌های `/assets/*` هدر کش `immutable` می‌گیرند (نام‌شان hash دارد).

اگر بعداً به‌جای Vercel از هاست استاتیک دیگری استفاده کردید، باید همین رفتار را تنظیم کنید:
`/about` ← `about.html` و صفحه `404.html` برای مسیرهای ناشناخته.

## فایل‌هایی که مالک باید اضافه کند

تا وقتی این فایل‌ها نیستند، سایت به آن‌ها ارجاع نمی‌دهد (و نام شرکت به‌صورت متنی نمایش داده می‌شود):

| فایل | توضیح |
|---|---|
| `public/favicon.svg` | وقتی اضافه شود، لینک favicon خودکار در `<head>` همه صفحات می‌آید. بدون آن مرورگر `/favicon.ico` را می‌خواهد و ۴۰۴ می‌گیرد (امتیاز Best Practices لایت‌هاوس ۹۶ می‌ماند، با favicon برابر ۱۰۰ است). |
| `public/og-image.png` | تصویر پیش‌نمایش اشتراک‌گذاری، ۱۲۰۰×۶۳۰. وقتی اضافه شود `og:image` و `twitter:image` خودکار ساخته می‌شود. |
| `public/brand/logo-company.svg` | سپس در `src/content/site.ts` مقدار `logo` را به `'/brand/logo-company.svg'` تغییر دهید. |
| `public/brand/logo-hirbad.svg` | سپس در `src/content/products.ts` برای هیربد `logo: '/brand/logo-hirbad.svg'` بگذارید. |

برای لوگو بهتر است SVG با `viewBox` درست بدهید تا ابعاد آن بدون پرش چیدمان محاسبه شود.

## افزودن محصول جدید

۱. یک آبجکت به آرایه `products` در `src/content/products.ts` اضافه کنید.
   کارت محصول، صفحه `/products/<slug>`، لینک فوتر و فایل HTML prerender خودکار ساخته می‌شود.
۲. آدرس صفحه جدید را **دستی** به `public/sitemap.xml` اضافه کنید.

## تغییر دامنه

اگر دامنه اختصاصی گرفتید، این‌ها را عوض کنید: `siteUrl` در `src/content/site.ts`،
همه `<loc>`ها در `public/sitemap.xml` و خط `Sitemap:` در `public/robots.txt`.
canonicalها، `og:url` و JSON-LD از `siteUrl` ساخته می‌شوند.

## سئو

- هر صفحه title، description، canonical و تگ‌های Open Graph/Twitter اختصاصی دارد (کامپوننت `Seo`).
- JSON-LD نوع `Organization` فقط در صفحه اصلی است و فقط فیلدهای غیر `null` را می‌گذارد.
- صفحه ۴۰۴ `noindex` است و canonical ندارد.
