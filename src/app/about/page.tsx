import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { COMPANY, STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2010, NitroHeat designs and manufactures nitrogen generation systems for spray painting in Portland, Oregon, and distributes internationally.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
              The Smarter Way to Apply Paint
            </h2>
            <div className="prose-nh mt-6">
              <p>
                Founded in {COMPANY.foundedYear} by Derek Naidoo, the company
                has seen consistent growth over the past years in both the
                automotive and industrial sectors. Our systems are used in paint
                and other sprayable liquid applications.
              </p>
              <p>Sales are conducted via a distributor channel internationally.</p>
              <p>
                Made in Portland, Oregon, NitroHeat distributes its products
                internationally from this location.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-brand-line pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-bold text-brand-green-deep sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="eyebrow mt-1 text-[0.65rem] text-brand-slate">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/distributors"
                className="rounded bg-brand-green px-6 py-3 font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:bg-brand-green-dark hover:text-white"
              >
                Become a Distributor
              </Link>
              <Link
                href="/contact"
                className="rounded border border-brand-line px-6 py-3 font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:border-brand-dark"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center rounded-lg bg-brand-mist p-8">
              <Image
                src="/img/nitroheat-v2.webp"
                alt="NitroHeat nitrogen generation system"
                width={300}
                height={533}
                className="h-auto w-auto max-h-96 object-contain"
              />
            </div>
            <div className="rounded-lg border border-brand-line p-6">
              <h3 className="eyebrow text-xs text-brand-green-deep">
                Certifications
              </h3>
              <p className="mt-2 text-sm text-brand-slate">
                UL, CSA, ETL and CE certified. 100% Made in America.
              </p>
              <Image
                src="/img/approvals.webp"
                alt="UL, CSA, ETL and CE approval marks"
                width={1024}
                height={657}
                className="mt-4 h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
