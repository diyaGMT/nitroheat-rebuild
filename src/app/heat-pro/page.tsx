import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "HeatPro 200",
  description:
    "The HeatPro 200 compressed air and nitrogen heater controller increases productivity and efficiency for waterborne and solvent-based spray painting.",
};

const SPECS = [
  { label: "Heater wattage", value: "500 W" },
  { label: "Operating temperature", value: "100°F – 180°F" },
  { label: "Electrical", value: "110 / 220 VAC, 50–60 Hz" },
  { label: "Current draw", value: "7.5 A" },
  { label: "Max inlet pressure", value: "120 psi (8.2 bar)" },
  { label: "Max flow rate", value: "16 cfm (450 LPM)" },
];

export default function HeatProPage() {
  return (
    <>
      <PageHero
        title="HeatPro 200"
        intro="A compressed air heater used to increase productivity and efficiency — from $124 per month."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center rounded-lg bg-brand-mist p-10">
            <Image
              src="/img/hp200.webp"
              alt="HeatPro 200 heater controller"
              width={400}
              height={349}
              className="h-auto w-full max-w-sm object-contain"
            />
          </div>

          <div className="prose-nh">
            <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
              Precise heat, at the gun
            </h2>
            <p>
              HeatPro 200 is a compressed air heater used to increase
              productivity and efficiency.
            </p>
            <p>
              It is ideal for spray-painting of both waterborne and
              solvent-based materials. The built-in set value and present value
              temperature controller allows maximum user control.
            </p>
            <p>
              Temperatures are adjustable for application of different liquid
              materials. Ideal temperatures can be achieved for sealer, primer,
              base, and clear coats.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/rfq"
                className="rounded bg-brand-green px-6 py-3 font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:bg-brand-green-dark hover:text-white"
              >
                Request a Quote
              </Link>
              <Link
                href="/technical-specifications"
                className="rounded border border-brand-line px-6 py-3 font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:border-brand-dark"
              >
                Full Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-brand-dark">
            At a glance
          </h2>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-brand-line bg-brand-line sm:grid-cols-2 lg:grid-cols-3">
            {SPECS.map((spec) => (
              <div key={spec.label} className="bg-white p-6">
                <dt className="eyebrow text-[0.65rem] text-brand-slate">
                  {spec.label}
                </dt>
                <dd className="mt-2 font-heading text-2xl font-semibold text-brand-dark">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-brand-slate">
            The HeatPro 200 can be used with compressed air alone, or paired
            with a NitroMax nitrogen generator. One HP200 is required per spray
            booth or prep station.
          </p>
        </div>
      </section>
    </>
  );
}
