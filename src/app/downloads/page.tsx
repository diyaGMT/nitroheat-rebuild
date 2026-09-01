import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Download NitroHeat brochures, product specification sheets, dryer documentation, booth layouts and the NW650 plastic welder user manual.",
};

type Download = {
  title: string;
  description: string;
  /** null = the source file was unavailable and must be re-supplied. */
  href: string | null;
  meta: string;
};

const DOWNLOADS: Download[] = [
  {
    title: "NitroHeat Products",
    description: "Full product and specification sheet for the NitroHeat range.",
    href: "/downloads/nitroheat-products.pdf",
    meta: "PDF · 2.3 MB",
  },
  {
    title: "NitroHeat Brochure",
    description: "Overview brochure covering the NitroMax and HeatPro systems.",
    href: "/downloads/nitroheat-brochure.pdf",
    meta: "PDF · 1.4 MB",
  },
  {
    title: "NitroHeat Dryers",
    description: "NitroDry compressed air dryer documentation.",
    href: "/downloads/nitroheat-dryers.pdf",
    meta: "PDF · 2.2 MB",
  },
  {
    title: "NitroHeat Product Dimensions",
    description: "Dimension diagram for the NitroMax and HeatPro units.",
    href: "/downloads/nitroheat-product-dimensions.webp",
    meta: "Image",
  },
  {
    title: "NitroHeat Dual Booth Layout",
    description: "Recommended piping and equipment layout for a two-booth shop.",
    href: "/downloads/dual-booth-layout.pdf",
    meta: "PDF · 145 KB",
  },
  {
    title: "ABC of NitroHeat",
    description: "Introduction to nitrogen-assisted spray application.",
    href: "/downloads/abc-of-nitroheat-application.pdf",
    meta: "PDF · 464 KB",
  },
  {
    title: "NitroHeat Plastic Welder",
    description: "NW650 plastic welder user manual.",
    href: "/downloads/nw650-plastic-welder-user-manual.pdf",
    meta: "PDF · 700 KB",
  },
  {
    title: "NitroHeat ROI Spreadsheet",
    description:
      "Return-on-investment calculator for a NitroHeat installation. Available on request.",
    href: null,
    meta: "XLSX · on request",
  },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads"
        intro="Brochures, manuals, specification sheets and shop layouts."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <ul className="divide-y divide-brand-line overflow-hidden rounded-lg border border-brand-line">
          {DOWNLOADS.map((item) => {
            const content = (
              <>
                <div className="flex-1">
                  <h2 className="font-heading text-xl font-semibold text-brand-dark">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm text-brand-slate">
                    {item.description}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-xs uppercase tracking-wide text-brand-slate">
                    {item.meta}
                  </span>
                  {item.href && (
                    <span
                      aria-hidden="true"
                      className="font-heading text-xl text-brand-green-deep"
                    >
                      ↓
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <li key={item.title} className="bg-white">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 transition-colors hover:bg-brand-mist"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5">{content}</div>
                )}
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-sm text-brand-slate">
          Need something that isn&rsquo;t listed here?{" "}
          <Link
            href="/contact"
            className="font-semibold text-brand-green-deep hover:text-brand-dark"
          >
            Contact us
          </Link>{" "}
          and we will send it over.
        </p>
      </section>
    </>
  );
}
