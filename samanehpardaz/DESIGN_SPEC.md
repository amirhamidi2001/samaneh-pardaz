# Design Spec — Samaneh Pardaz (source of truth)

All agents/contributors work from this file. Tokens live in `src/index.css` (`@theme`).

## Identity
Premium, quiet corporate-tech. Navy depth + white space + one royal-blue accent taken from the company logo.
Boldness is spent in ONE place: the homepage hero diagram (4 service icons orbiting the company mark, drawn in once on load).

## Color
| Token | Hex | Use |
|---|---|---|
| navy-950 | #06142e | hero/footer/CTA base, primary text |
| navy-900 / 800 / 700 | #0a1f47 / #0e2c63 / #123b82 | gradients, dark surfaces |
| accent (royal-600) | #1f4fd8 | links, primary buttons, icons (matches logo) |
| accent-strong | #173fae | hover/pressed |
| mist-50 / 100 / 200 | #f6faff / #eaf3ff / #d9e6f7 | alt sections, tiles, borders |
| mist-300 / 400 | #b3d3f7 / #7fb4f0 | text/lines on navy |
| muted | #51627d | secondary text (>=5.9:1 on white/mist-50) |

Legacy aliases kept: brand, accent, accent-strong, accent-soft, surface, surface-alt, muted, border.

## Type (Vazirmatn only, no tracking on Persian)
- Display h1: 4xl → 6xl, weight 800, leading 1.35
- h2: 3xl → 4xl, weight 800, leading 1.4
- h3: lg → xl, weight 700, leading snug
- Body: base/lg, leading 1.9, muted color; line length capped (max-w-2xl/3xl)

## Shape & depth
Radius hierarchy: controls xl (0.875rem) · tiles 2xl · cards 1.5rem · feature panels 2rem. Shadows: `shadow-soft` (resting), `shadow-lifted` (hover). No decorative shadows on navy.

## Spacing
Sections py-20 md:py-28 (internal-page heroes py-16 md:py-24). Container max-w-7xl, px-4/6/8.

## Motion
1. Hero load sequence (rise + line draw + pop) — the single orchestrated moment.
2. Scroll reveal for card groups via CSS `animation-timeline: view()` (progressive enhancement, no JS, content always visible without it).
3. Hover/press on interactive elements (lift, arrow nudge), mobile menu open/close.
All motion is disabled under `prefers-reduced-motion`.

## Components (ownership)
- Design system (ui/): Button, Card, Badge, Icon, Logo/LogoMark, Section, SectionHeading, Container, Breadcrumbs, PageHero
- Layout: Header, MobileMenu, Footer, RootLayout, SkipLink
- Home sections: Hero, IntroSection, ServicesGrid, ProductHighlight, CtaBand
- Internal sections: ServiceDetail, ProductCard, ProductHero, ProductOverview, ProductFeatures, ProductSteps, ContactItem
- Not touched: routes.tsx, content/*, seo/*, lib/*, vite.config.ts, public/*
