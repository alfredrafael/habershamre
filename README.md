# Habersham Real Estate

Website for Richard Habersham and Habersham Real Estate, serving Florida and New York with a focus on Sarasota. Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and a headless WordPress CMS.

**Website:** [habershamre.com](https://habershamre.com/)

## Homepage

The homepage introduces Richard’s experience in luxury residential, commercial, and new development sales and helps visitors explore:

- Buying a home in Sarasota and understanding its neighborhoods and lifestyle.
- Seasonal and long-term rentals, tenant searches, and investment properties.
- Connections to local professionals for property improvements and maintenance.
- Planning a Sarasota weekend and contacting Richard.

The page includes a Sarasota video hero, services, Richard’s biography, the Vineyard to Sarasota seal, and a contact form. Desktop and mobile navigation share the same logo; the favicon uses the same artwork.

## Local development

Use Node.js 20.9 or newer and pnpm. From the repository root:

```bash
pnpm install
```

Create `.env.local` using the variables below, then start the development server:

```bash
pnpm dev
```

Open [localhost:3000](http://localhost:3000).

## Environment variables

There is currently no `.env.example`; create `.env.local` manually. Use your own service configuration and keep local environment files out of version control.

```dotenv
# WordPress REST API and remote image optimization
WORDPRESS_URL=https://your-wordpress-site.com
WORDPRESS_HOSTNAME=your-wordpress-site.com
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com

# Shared secret for the WordPress revalidation webhook
WORDPRESS_WEBHOOK_SECRET=replace-with-a-random-secret

# EmailJS contact form configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key

# Optional Google Analytics measurement ID
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

`WORDPRESS_HOSTNAME` must be a hostname without a protocol or trailing slash. Configure it for the WordPress media host used by the site’s images. Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Content and branding

| File | Purpose |
| --- | --- |
| `site.config.ts` | Site name, domain, description, real estate keywords, social links, and sharing image |
| `app/page.tsx` | Homepage layout and Vineyard to Sarasota seal |
| `components/heroVideo.tsx` | Homepage video, headline, and calls to action |
| `components/layout/services.tsx` | Buying, rentals, and property service copy |
| `components/layout/about.tsx` | Richard Habersham’s biography |
| `app/data.jsx` | Contact information and retained testimonial data |
| `lib/branding.ts` | Shared desktop and mobile navigation logo |
| `app/favicon.ico` | Browser tab icon derived from the navigation logo |
| `components/layout/footer.tsx` | Footer and footer logo |
| `menu.config.ts` | Navigation links |
| `app/globals.css` | Global styles and theme colors |

The site keywords reflect the homepage’s Sarasota luxury homes, rentals, second homes, investment properties, new developments, and Florida and New York real estate services.

## Routes and integrations

- `/`: Homepage with an in-page contact section at `/#contact`.
- `/schedule`: Weekend planning inquiry form.
- `/contact`: Contact page.
- `/posts`, `/pages`, and `/projects`: WordPress-backed content routes retained in the application.
- `lib/wordpress.ts`: WordPress REST API helpers.
- `components/contactForm.tsx`: EmailJS form with React Hook Form and Zod validation.
- `app/api/revalidate/route.ts`: WordPress cache revalidation endpoint.
- `plugin/`: WordPress revalidation plugin and setup documentation.
- `app/layout.tsx`: Global metadata, navigation, footer, theme provider, and analytics.

To enable content revalidation, install the supplied WordPress plugin and configure its webhook to point to `https://your-site-domain.com/api/revalidate`, using the same secret as `WORDPRESS_WEBHOOK_SECRET`. See the documentation in `plugin/` for configuration details.

## Checks and production

```bash
# Type checking
pnpm exec tsc --noEmit

# Production build
pnpm build

# Start the production server after building
pnpm start
```

The app uses Next.js standalone output and includes a `Dockerfile` for container deployment. Configure the environment variables on the deployment platform before building, especially the browser-exposed EmailJS settings.

The existing `pnpm lint` script calls `next lint`, which is unsupported in Next.js 16; it needs migration to the ESLint CLI before use.

## License

See [LICENSE](LICENSE).
