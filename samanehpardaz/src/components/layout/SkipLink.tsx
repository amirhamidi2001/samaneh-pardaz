import { site } from '@/content/site'

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only rounded-control bg-navy-950 px-5 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:shadow-lifted"
    >
      {site.skipToContentLabel}
    </a>
  )
}
