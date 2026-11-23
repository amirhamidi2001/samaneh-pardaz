# Samaneh Pardaz Iranian Javan — Corporate Website

The official corporate website for **Samaneh Pardaz Iranian Javan**, an Iranian company working in information technology, education, and digital services.

- **Live website:** https://samanehpardaz.vercel.app/
- **Featured product:** [Hirbad](https://hirbad.com)

## Overview

This project is a Persian, right-to-left (RTL), responsive corporate website. It presents the company, its areas of activity, its products, and contact information.

The application is frontend-only: it has no backend or database. Website content and configuration are maintained in the `src/content/` directory.

## Website pages

| Route | Description |
|---|---|
| `/` | Company homepage |
| `/about` | About the company |
| `/services` | Services and areas of activity |
| `/products` | Products and platforms |
| `/products/hirbad` | Hirbad product details |
| `/contact` | Contact information |
| Not found | Custom 404 page |

## Company activities

The website currently presents these areas:

- Information technology education and research
- Online academic education and private tutoring
- Specialized information systems
- Information technology support

## Product

### Hirbad

[Hirbad](https://hirbad.com) is an online learning platform that connects learners with specialized, verified teachers and supports private and group online lessons.

The website's product page introduces its audience, key features, and the steps for getting started.

## Technology stack

- **React 19** — UI library
- **TypeScript** — static typing
- **Vite** — development server and build tooling
- **Tailwind CSS 4** — styling
- **React Router 6** — client-side routing
- **vite-react-ssg** — static site generation and route prerendering
- **oxlint** — code linting

## Requirements

- Node.js (use a current version compatible with the installed Vite release)
- npm

## Installation

```bash
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal.

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Run TypeScript project checks and generate the production site |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

Create a production build:

```bash
npm run build
```

The generated static website is written to `dist/`.

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project structure

```text
samanehpardaz/
├── public/
│   ├── brand/              # Company and product logos
│   ├── favicon.svg
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── fonts/          # Local font files
│   ├── components/
│   │   ├── layout/         # Header, footer and shared page layout
│   │   ├── sections/       # Page and product sections
│   │   ├── seo/            # Metadata and structured data
│   │   └── ui/             # Reusable UI components
│   ├── content/            # Centralized site text, data and configuration
│   ├── lib/                # Shared utilities
│   ├── pages/              # Route-level page components
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig*.json
├── vercel.json
└── vite.config.ts
```

## Managing website content

Most website text and business information can be updated without changing page components. The central content files are:

| File | Purpose |
|---|---|
| `src/content/site.ts` | Company name, canonical site URL, contact details, logo and shared site settings |
| `src/content/home.ts` | Homepage content |
| `src/content/about.ts` | About page content |
| `src/content/services.ts` | Services page and service descriptions |
| `src/content/products.ts` | Product listing and product details |
| `src/content/contact.ts` | Contact page content |
| `src/content/navigation.ts` | Navigation items |
| `src/content/types.ts` | Shared content types |

### Updating company information

Edit `src/content/site.ts` to update the company name, website URL, phone numbers, email address, region, or company logo.

Contact information is sourced from this central configuration and reused by the contact page and shared layout.

### Adding a product

1. Add a product object to the `products` array in `src/content/products.ts`.
2. Provide a unique `slug`, name, summary, audience, features, steps, external URL, and any applicable logo/status fields.
3. The product listing and detail route are generated from the product data.
4. Add the new public URL to `public/sitemap.xml`.

### Updating static assets

Place public assets in `public/`. Company and product brand assets belong in `public/brand/`.

When changing the canonical domain, update `siteUrl` in `src/content/site.ts`, the URLs in `public/sitemap.xml`, and the sitemap reference in `public/robots.txt`.

## Static generation and Vercel deployment

The project uses `vite-react-ssg` to prerender the website routes into static HTML files during the production build.

The repository includes `vercel.json` with the deployment configuration:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Clean URLs:** enabled
- **Trailing slash:** disabled

**Important:** Use `npm run build` as the Vercel build command. Do not replace it with `vite build`, because the project build script also runs TypeScript checks and the static-generation process.

For another static hosting provider, configure clean URL handling so routes such as `/about` resolve to their generated HTML files, and configure the generated 404 page as the not-found response.

## SEO and accessibility

The project includes:

- Page-specific title and description metadata
- Canonical URLs
- Open Graph and Twitter metadata
- Organization structured data on the homepage
- A `noindex` not-found page
- A skip-to-content link
- Persian language and RTL document direction

The sitemap and robots directives are maintained in `public/sitemap.xml` and `public/robots.txt`.

## Notes

- This is a static frontend project; there is no application backend or database.
- Website copy and company descriptions are maintained in `src/content/`.
- Review draft or owner-confirmation comments in the content files before treating those descriptions as final corporate statements.

## License

Refer to the repository's `LICENSE` file.
