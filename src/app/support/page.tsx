import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Support",
  description:
    "NitroHeat support — frequently asked questions on applications, lead times, distribution, leasing, training, electrical requirements and warranty.",
};

const RESOURCES = [
  { href: "/videos", label: "Videos", body: "See NitroHeat in real paint shops." },
  { href: "/installation", label: "Installation", body: "Piping, mounting and commissioning notes." },
  { href: "/technical-specifications", label: "Technical Specifications", body: "Full spec sheets for every unit." },
  { href: "/downloads", label: "Downloads", body: "Brochures, manuals and layouts." },
  { href: "/product-registration", label: "Product Registration", body: "Register a newly installed system." },
  { href: "/warranty", label: "Warranty", body: "Coverage, periods and claim procedure." },
];

const GENERAL_FAQ = [
  {
    q: "What applications does the NITROMAX work in?",
    a: "The NITROMAX works in any facility (automotive or industrial) that uses a spray gun to atomize fluid with compressed air as a propellant, using either HVLP, LVLP, Air Assisted Airless or Electrostatic.",
  },
  {
    q: "What is your turn around time?",
    a: "All standard equipment has a seven (7) day lead from receipt of order. Custom requirements can vary depending on the application and logistics. Robotic installations require a site visit.",
  },
  {
    q: "Do you have a distributor program?",
    a: "Yes. We focus on manufacturing and work closely with distributors, agents and manufacturer representatives to take our product to market.",
  },
  {
    q: "Can the equipment be leased?",
    a: "Yes, you can lease the equipment via your financial institutions or via our leasing partners.",
  },
  {
    q: "Do you offer credit?",
    a: "Yes, we do offer credit at nominal interest rates with a 50% deposit.",
  },
  {
    q: "How long has NitroHeat been manufacturing this system?",
    a: "NitroHeat started manufacturing in 2010.",
  },
  { q: "Where is the manufacturing done?", a: "Portland, Oregon." },
  {
    q: "Do you offer training?",
    a: "Yes, training is compulsory with every installation.",
  },
];

const TECHNICAL_FAQ = [
  {
    q: "Do I need to buy nitrogen tanks?",
    a: "No. The NITROMAX system uses compressed air to separate the gases and supply nitrogen under pressure to the spray gun via the HeatPro system.",
  },
  {
    q: "How many heaters can I use with one nitrogen system?",
    a: "NitroMax 30 — 2 spray guns simultaneously; multiple guns can be added. NitroMax 15 — 1 spray gun; you can have multiple heaters but you can only use one at a time.",
  },
  {
    q: "Do I need a receiver tank?",
    a: "A receiver tank is not necessary, but is recommended if you have a low volume compressor or more than 2 spray guns being used simultaneously.",
  },
  {
    q: "What is the electrical consumption?",
    a: "NitroMax — 1.5 A. HeatPro — 6.8 A. Both units require either 110 VAC or 220 VAC.",
  },
  {
    q: "Where is the equipment located?",
    a: "The nitrogen generator and heater controllers are located outside of the spray booth. The fully insulated hose is fed into the spray booth and attached to the spray gun.",
  },
  {
    q: "Do I need a special spray gun?",
    a: "No. You do not need any special equipment.",
  },
  {
    q: "Can the heater be used without the nitrogen generator?",
    a: "Yes, the heater can be used with compressed air.",
  },
  {
    q: "What is the warranty period?",
    a: "12 months on nitrogen generators, 12 months on heater controllers and 6 months on heated hoses, from the original date of delivery or installation, whichever comes first.",
  },
  {
    q: "What is the warranty repair process?",
    a: "Any units that malfunction under warranty will be swapped out to minimize loss of production.",
  },
];

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-6 divide-y divide-brand-line overflow-hidden rounded-lg border border-brand-line">
      {items.map((item) => (
        <details key={item.q} className="group bg-white">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-heading text-lg font-semibold text-brand-dark hover:bg-brand-mist">
            {item.q}
            <span
              aria-hidden="true"
              className="shrink-0 text-brand-green-deep transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="px-5 pb-5 leading-relaxed text-brand-slate">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export default function SupportPage() {
  return (
    <>
      <PageHero
        title="Support"
        intro="Answers to the questions we are asked most often — plus manuals, specifications and installation guidance."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-brand-line p-5 transition-colors hover:border-brand-green hover:bg-brand-mist"
            >
              <h2 className="font-heading text-xl font-semibold text-brand-dark">
                {item.label}
              </h2>
              <p className="mt-1 text-sm text-brand-slate">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <FaqList items={GENERAL_FAQ} />

        <h2 className="mt-14 font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
          Technical
        </h2>
        <FaqList items={TECHNICAL_FAQ} />
      </section>
    </>
  );
}
