// پس از ساخت اجرا می‌شود: اسکریپت‌های inline که vite-react-ssg (و در صورت فعال بودن GA، gtag) در HTML
// می‌گذارد را به فایل‌های هش‌دار در /assets منتقل می‌کند تا CSP بتواند بدون 'unsafe-inline' برای script
// (فقط script-src 'self') اعمال شود. JSON-LD دادهٔ غیرقابل‌اجراست و دست‌نخورده می‌ماند.
import { createHash } from 'node:crypto'
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const DIST = 'dist'
const INLINE_SCRIPT = /<script(?![^>]*\bsrc=)(?![^>]*type="application\/ld\+json")[^>]*>([\s\S]*?)<\/script>/g
const APP_MODULE = /<script type="module"[^>]*\bsrc="[^"]+"[^>]*><\/script>/

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(path)
    else if (entry.name.endsWith('.html')) yield path
  }
}

await mkdir(join(DIST, 'assets'), { recursive: true })
let pages = 0
let files = 0

for await (const file of walk(DIST)) {
  let html = await readFile(file, 'utf8')
  const refs = []

  html = html.replace(INLINE_SCRIPT, (_match, code) => {
    if (!code.trim()) return ''
    const name = `inline-${createHash('sha256').update(code).digest('hex').slice(0, 10)}.js`
    refs.push({ name, code })
    return ''
  })
  if (refs.length === 0) continue

  // defer-اسکریپت‌ها به ترتیب سند اجرا می‌شوند؛ باید قبل از ماژول اصلی اپ بیایند
  // (قبلاً inline بودند و پیش از ماژول deferred اجرا می‌شدند)
  const tags = refs.map((r) => `<script defer src="/assets/${r.name}"></script>`).join('')
  if (!APP_MODULE.test(html)) throw new Error(`${file}: app module script not found`)
  html = html.replace(APP_MODULE, (app) => tags + app)

  for (const r of refs) {
    await writeFile(join(DIST, 'assets', r.name), r.code)
    files++
  }
  await writeFile(file, html)
  pages++
}

console.log(`externalize-inline-scripts: ${pages} pages, ${files} script files`)
