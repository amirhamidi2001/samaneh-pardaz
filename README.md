# Samaneh Pardaz Iranian Javan

Official corporate website of **Samaneh Pardaz Iranian Javan**, an Iranian technology and digital services company.

🌐 **Live website:** [samanehpardaz.vercel.app](https://samanehpardaz.vercel.app/)

## About

This repository contains the source code for the company's public-facing website. It introduces the company's activities, services, and digital products, including **Hirbad**, an online learning platform.

The website is a frontend-only, statically generated application. It does not require a backend or database; site content is maintained in the frontend source.

## Repository structure

```text
.
├── README.md
└── samanehpardaz/
    ├── public/          # Static assets, brand files, sitemap and robots.txt
    ├── src/
    │   ├── components/  # Layout, page sections, UI and SEO components
    │   ├── content/     # Centralized website content and configuration
    │   ├── lib/         # Shared utilities
    │   └── pages/       # Website pages
    ├── package.json
    └── README.md        # Application setup and development guide
```

## Main sections

- Home
- About the company
- Services and areas of activity
- Products and platforms
- Product detail pages
- Contact
- Custom not-found page

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS 4
- React Router
- vite-react-ssg for static site generation and prerendering
- oxlint for linting

## Getting started

The application is located in the `samanehpardaz/` directory.

```bash
cd samanehpardaz
npm install
npm run dev
```

For production build, linting, deployment configuration, and content-management instructions, see [`samanehpardaz/README.md`](samanehpardaz/README.md).

## Deployment

The website is configured for deployment on [Vercel](https://vercel.com/). The application README contains the required build and output settings.

## Related links

- **Live website:** https://samanehpardaz.vercel.app/
- **Hirbad:** https://hirbad.com
- **GitHub repository:** https://github.com/hirbadplatform/samaneh-pardaz

## License

See the [`LICENSE`](LICENSE) file in the repository.
