import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PriceTable from "@/components/PriceTable";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Price & Finance",
  description:
    "NitroHeat MSRP price list for nitrogen generators, heater controllers, heated hoses and plastic welders, plus equipment finance and leasing options.",
};

const FINANCE_POINTS = [
  {
    title: "Lease through our partners",
    body: "Equipment can be leased via your own financial institution or through our leasing partners.",
  },
  {
    title: "In-house credit",
    body: "We offer credit at nominal interest rates with a 50% deposit.",
  },
  {
    title: "Section 179",
    body: "Qualifying equipment purchases may be eligible for a Section 179 deduction and bonus depreciation. Speak to your tax advisor about your first-year deduction.",
  },
];

export default function PricePage() {
  return (
    <>
      <PageHero
        title="Price & Finance"
        intro="Manufacturer suggested retail pricing, plus leasing and finance options to spread the cost."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
          Price List
        </h2>
        <div className="mt-8">
          <PriceTable />
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
                Finance Options
              </h2>
              <p className="mt-4 leading-relaxed text-brand-slate">
                NitroHeat equipment can be financed so you can put a system to
                work immediately and pay for it out of the productivity it
                creates. A full NitroMax single spray gun setup is available for
                under $600 per month, and an in-line HeatPro 200 heating system
                from $124 per month.
              </p>

              <div className="mt-8 space-y-5">
                {FINANCE_POINTS.map((point) => (
                  <div
                    key={point.title}
                    className="border-l-4 border-brand-green bg-white p-5"
                  >
                    <h3 className="font-heading text-xl font-semibold text-brand-dark">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-slate">
                      {point.body}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs leading-relaxed text-brand-slate">
                All finance and leasing is subject to credit approval and does
                not include applicable taxes. Prices exclude shipping,
                installation and training.
              </p>
            </div>

            <div className="rounded-lg border border-brand-line bg-white p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-dark">
                Talk to us about finance
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                Tell us about your facility and we will put together a quote and
                walk you through the leasing and credit options available for
                your system.
              </p>
              <Link
                href="/rfq"
                className="mt-6 block rounded bg-brand-green px-6 py-3 text-center font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:bg-brand-green-dark hover:text-white"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="mt-3 block rounded border border-brand-line px-6 py-3 text-center font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:border-brand-dark"
              >
                Contact Us
              </Link>

              <div className="mt-8 border-t border-brand-line pt-6 text-sm text-brand-slate">
                <p className="eyebrow text-[0.65rem] text-brand-green-deep">
                  Prefer to talk?
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="mt-2 block font-heading text-2xl font-semibold text-brand-dark hover:text-brand-green-deep"
                >
                  {COMPANY.phone}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="mt-1 block hover:text-brand-green-deep"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
