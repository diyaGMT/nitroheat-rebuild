import type { NextConfig } from "next";

/**
 * The WordPress site used long, keyword-stuffed slugs. The rebuild uses short
 * clean paths, so every old URL is permanently redirected to preserve links
 * and search ranking.
 */
const LEGACY_SUFFIX = "-nitroheat-the-smarter-way-to-apply-spray-paint";

const LEGACY_SLUGS: Record<string, string> = {
  about: "/about",
  contact: "/contact",
  rfq: "/rfq",
  distributors: "/distributors",
  products: "/products",
  nitromax: "/nitromax",
  "nitro-weld": "/nitro-weld",
  "heat-pro": "/heat-pro",
  support: "/support",
  videos: "/videos",
  installation: "/installation",
  "technical-specifications": "/technical-specifications",
  downloads: "/downloads",
  "product-registration": "/product-registration",
};

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...Object.entries(LEGACY_SLUGS).map(([slug, destination]) => ({
        source: `/${slug}${LEGACY_SUFFIX}`,
        destination,
        permanent: true,
      })),
      { source: "/finance", destination: "/price", permanent: true },
      { source: "/quote", destination: "/rfq", permanent: true },
      { source: "/warranty-2", destination: "/warranty", permanent: true },
      { source: "/policy", destination: "/privacy-policy", permanent: true },
      {
        source: "/nitroheat-website-policies",
        destination: "/privacy-policy",
        permanent: true,
      },
      // Retired WooCommerce storefront — the shortcodes no longer rendered.
      { source: "/shop", destination: "/products", permanent: true },
      { source: "/cart", destination: "/products", permanent: true },
      { source: "/checkout", destination: "/products", permanent: true },
      { source: "/online-order", destination: "/products", permanent: true },
      { source: "/my-account", destination: "/contact", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
