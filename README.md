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

## Known content issues carried over from the live site

These are reproduced as-is and need a decision from the business:

1. **Warranty period contradiction.** The Support FAQ says *2 years on nitrogen
   generators and 1 year on heaters and welders*; the Warranty policy says
   *12 months / 12 months / 6 months*. Both are reproduced verbatim.
2. **Two different addresses.** The footer and warranty use
   163 SW Freeman Avenue, Hillsboro OR 97123; the technical specification sheet
   prints 7360 SW Bonita Road, Tigard OR 97224 as the manufacturer address.
3. **Phone number.** `+1 904 655 5818` is a Jacksonville, Florida area code for
   an Oregon manufacturer — worth confirming.
4. **Privacy policy references `nitroheat.net`,** not `.com`. Kept verbatim
   rather than silently edited; see `SITE_REFERENCE` in the page.
5. **ROI spreadsheet is a dead link** on the live site (the host returns HTTP
   406). Listed on `/downloads` as "available on request" until the file is
   supplied.
6. **Balboa Capital rate quoter expired** (quotes valid 21 Aug – 19 Nov 2025).
   The widget is not reproduced; the working "Apply for Finance" link to the
   vendor portal is kept.
