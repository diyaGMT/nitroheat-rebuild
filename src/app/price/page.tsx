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

/**
 * Balboa Capital vendor application link carried over from the previous site.
 * The old page also embedded a Balboa rate quoter widget; that widget's quotes
 * expired on 19 Nov 2025, so it is deliberately not reproduced here.
 */
const FINANCE_APPLY_URL =
  "https://www.vendorservicescenter.com/equipment-financing/apply/?aid=0014100000YIUSBAA5-095A5D5B-43ED-4199-A7B1-EC2037B270E5";

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
                Financing is provided by third-party lenders. Quoted amounts are
                subject to credit approval and do not include applicable taxes.
                Prices exclude shipping, installation and training.
              </p>
            </div>

            <div className="rounded-lg border border-brand-line bg-white p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-dark">
                Apply for finance
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                Start an equipment finance application with our finance partner,
                or contact us and we will walk you through the options for your
                facility.
              </p>
              <a
                href={FINANCE_APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded bg-brand-green px-6 py-3 text-center font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:bg-brand-green-dark hover:text-white"
              >
                Apply for Finance
              </a>
              <Link
                href="/rfq"
                className="mt-3 block rounded border border-brand-line px-6 py-3 text-center font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:border-brand-dark"
              >
                Request a Quote
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
