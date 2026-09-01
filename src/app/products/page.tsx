import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PriceTable from "@/components/PriceTable";

export const metadata: Metadata = {
  title: "Products",
  description:
    "NitroMax nitrogen generators, HeatPro 200 heater controllers, NitroWeld plastic welders and heated hoses — with current MSRP price list.",
};

const PRODUCTS = [
  {
    href: "/nitromax",
    name: "NitroMax",
    image: "/img/skid-generator.webp",
    summary:
      "Membrane nitrogen generators that deliver an unlimited supply of heated nitrogen to your spray booths — no tanks, no logistics.",
    models: "NM15 · NM30 · NG15 · NG30",
  },
  {
    href: "/heat-pro",
    name: "HeatPro 200",
    image: "/img/hp200.webp",
    summary:
      "A compressed air and nitrogen heater controller with set-value and present-value temperature control for sealer, primer, base and clear coats.",
    models: "HP200 · NHH50 heated hose",
  },
  {
    href: "/nitro-weld",
    name: "Nitro Weld NW-650",
    image: "/img/nw650.webp",
    summary:
      "A complete plastic welding station with built-in temperature controllers and N2 / compressed air selection.",
    models: "NW650 · NW650-N2",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        intro="Turnkey nitrogen generation, heating and plastic welding equipment — designed and built in Oregon."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group flex flex-col overflow-hidden rounded-lg border border-brand-line transition-shadow hover:shadow-lg"
            >
              <div className="flex h-56 items-center justify-center bg-brand-mist p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-heading text-2xl font-bold text-brand-dark">
                  {product.name}
                </h2>
                <p className="eyebrow mt-1 text-[0.65rem] text-brand-green-deep">
                  {product.models}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-slate">
                  {product.summary}
                </p>
                <span className="mt-4 font-heading text-lg font-semibold text-brand-green-deep">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
            Price List
          </h2>
          <p className="mt-2 max-w-2xl text-brand-slate">
            Manufacturer suggested retail pricing in US dollars. Finance and
            leasing options are available.
          </p>
          <div className="mt-8">
            <PriceTable />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/rfq"
              className="rounded bg-brand-green px-6 py-3 font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:bg-brand-green-dark hover:text-white"
            >
              Request a Quote
            </Link>
            <Link
              href="/price"
              className="rounded border border-brand-line bg-white px-6 py-3 font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:border-brand-dark"
            >
              Finance Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
