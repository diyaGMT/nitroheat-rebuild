# nitroheat-rebuild

A rebuild of [nitroheat.com](https://nitroheat.com) on Next.js, following the
same stack and conventions as `usagomobile-rebuild`.

The live site is WordPress + Divi. This project reproduces its content and
information architecture on a static-first Next.js app with a modernised
design.

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4
- SendGrid for form delivery
- All 18 content pages prerendered as static HTML; only `/api/contact` is dynamic

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the SendGrid values
npm run dev                  # http://localhost:3000
```

`npm run build` produces the production build, `npm run lint` runs ESLint.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `SENDGRID_API_KEY` | yes | API key used to deliver form submissions |
| `SENDGRID_FROM_EMAIL` | yes | Verified sender address |
| `CONTACT_RECIPIENT` | no | Where submissions are delivered (defaults to `COMPANY.email`) |

Without the two required variables every form returns
`"Email is not configured on the server."` — the pages still render.

## Structure

```
src/
  app/
    api/contact/route.ts    Shared endpoint for all four forms
    <page>/page.tsx         One directory per route
  components/
    Header.tsx              Sticky nav with dropdowns + mobile drawer
    Footer.tsx
    PageHero.tsx            Dark banner used on interior pages
    PriceTable.tsx          MSRP table, shared by /products and /price
    FormRenderer.tsx        Schema-driven form renderer
  lib/site.ts               Company details, nav, price list, country/state lists
public/
  img/                      Site imagery (converted to WebP)
  downloads/                Brochures, manuals and layouts
```

### Content is data, not markup

Company details, navigation and the price list live in `src/lib/site.ts`.
Updating a price or a phone number is a one-line change that propagates to
every page that uses it.

### Forms

All four forms (Contact, RFQ, Distributor Application, Product Registration)
are declared as field schemas and rendered by `FormRenderer`, then posted to the
single `/api/contact` endpoint, which emails a labelled table of the responses.

## URLs

The WordPress site used long keyword-stuffed slugs such as
`/nitromax-nitroheat-the-smarter-way-to-apply-spray-paint/`. The rebuild uses
short paths and permanently redirects every legacy URL — see `next.config.ts`.

The retired WooCommerce pages (`/shop`, `/cart`, `/checkout`, `/online-order`,
`/my-account`) redirect to `/products`; on the live site they render nothing or
a raw `[woocommerce_cart]` shortcode.

## Content decisions

The live site contained several contradictions. These were resolved by the
business on 2026-08-31 and the resolutions are baked in:

1. **Warranty period** — the Warranty policy is authoritative. The Support FAQ
   previously said *2 years on generators / 1 year on heaters*; it now states
   12 months on generators, 12 months on heater controllers and 6 months on
   heated hoses, matching `/warranty`.
2. **Address** — 163 SW Freeman Avenue, Ste D, Hillsboro OR 97123 everywhere.
   The Tigard OR 97224 address that appeared on the technical specification
   sheet is no longer used.
3. **Phone** — (503) 999-3647, replacing the Florida `+1 904 655 5818` number.
4. **Domain** — the business owns both `nitroheat.com` and `nitroheat.net`; the
   privacy and publishing policies name the `.com` site.
5. **ROI spreadsheet** — the source file is a dead link on the live site (HTTP
   406). The entry is kept on `/downloads` marked "available on request" until
   a replacement ROI tool is built. **Follow-up: build the ROI calculator.**
6. **Finance applications** — the Balboa Capital rate quoter (expired
   2025-11-19) and the Balboa vendor application link are both dropped.
   `/price` now routes finance enquiries to `/rfq` and `/contact`.

Company details, the price list and navigation all live in `src/lib/site.ts`,
so items 2 and 3 are a one-line change if they ever move again.
