import Image from "next/image";
import Link from "next/link";
import { COMPANY, STATS } from "@/lib/site";

const CAPABILITIES = [
  {
    eyebrow: "Nitrogen Generators",
    title: "Nitrogen Generators for Spray Painting",
    image: "/img/skid-generator.webp",
    href: "/nitromax",
    body: [
      "Decrease cycle time with an improvement of efficiency in your spray painting environment.",
      "Minimize paint wastage and improve finish quality with a product that is specifically designed to improve your paint shop performance.",
      "These units are commonly used in automotive collision facilities. They can also be used for paint applications on wood, fiberglass and other substrates that are spray painted.",
    ],
  },
  {
    eyebrow: "Nitrogen Heaters",
    title: "Compressed Air & Nitrogen Heaters",
    image: "/img/hp200.webp",
    href: "/heat-pro",
    body: [
      "The HeatPro 200 is a compressed air heater used to increase productivity and efficiency.",
      "It is ideal for the spray-painting of both waterborne and solvent-based materials. The built-in set value and present value temperature controller allows maximum user control.",
      "Temperatures are adjustable for the application of different liquid materials. Ideal temperatures can be achieved for sealer, primer, base, and clear coats.",
    ],
  },
  {
    eyebrow: "Custom",
    title: "Custom Nitrogen Generators",
    image: "/img/nm80.webp",
    href: "/rfq",
    body: [
      "Whatever your nitrogen requirements, we can supply a solution.",
      "From 1cfm plastic welders to 500cfm industrial plants, from 90% purity to 99.9% purity — we are your turnkey solution provider for your nitrogen requirements.",
      "Eliminate the usage of nitrogen tanks and the consequential inconvenience of the logistics attached to their transportation and storage.",
    ],
  },
  {
    eyebrow: "Nitrogen Plastic Welder",
    title: "Nitrogen Plastic Welder",
    image: "/img/nw650.webp",
    href: "/nitro-weld",
    body: [
      "The Nitroweld NW-650 is a complete plastic welding station with built-in temperature controllers including N2 and compressed air selection.",
      "This unit can be used with an external nitrogen supply (tank) or can be attached to a nitrogen generator.",
      "If used with a nitrogen cylinder, the built-in selector allows the user to pre-heat and cool down with compressed air and ONLY use the N2 supply for the direct welding process.",
    ],
  },
  {
    eyebrow: "Nitrogen Generator for Tire Filling",
    title: "Nitrogen Generators for Tire Filling",
    image: "/img/tire-filler.webp",
    href: "/contact",
    body: [
      "Need nitrogen for your tire filling stations? Don't use expensive nitrogen tanks — our Nitrogen on Demand system will give you all the nitrogen you need 24 hours a day.",
      "Just connect to your compressed air and you have nitrogen available for all your tire filling needs.",
    ],
  },
];

const OFFERS = [
  {
    title: "All-in-One NitroMax Single Spray Gun Setup",
    price: "Less than $600/month",
    body: "Upgrade to the full NitroMax system and streamline your single spray setup — all for under $600 per month.",
    cta: { href: "/nitromax", label: "See NitroMax" },
  },
  {
    title: "In-Line Compressed Air & Nitrogen Heaters",
    price: "From $124/month",
    body: "Achieve consistent heat and reduce material waste with in-line compressed air and nitrogen heaters. Get the precision and performance of NitroHeat's in-line single spray gun heating system for only $124 per month.",
    cta: { href: "/heat-pro", label: "See HP200" },
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/img/nm80-john-deere.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/40" />

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="eyebrow text-xs text-brand-green">
            Since {COMPANY.foundedYear} · 100% Made in America
          </p>
          <h1 className="mt-4 font-heading text-5xl font-bold leading-[0.95] text-white sm:text-7xl">
            NitroHeat
            <span className="mt-2 block text-brand-green">
              The Smarter Way to Apply Paint
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Since {COMPANY.foundedYear} we have been designing and developing
            custom membrane nitrogen generators with heater controllers and
            heated hoses for automotive and industrial applications.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
            Manufactured in Portland, Oregon, we are the leaders in nitrogen
            generation for spray painting, with an international distribution
            network to support your needs.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/rfq"
              className="rounded bg-brand-green px-8 py-4 font-heading text-xl font-semibold tracking-wide text-brand-dark transition-colors hover:bg-white"
            >
              Request a Quote
            </Link>
            <Link
              href="/products"
              className="rounded border border-white/25 px-8 py-4 font-heading text-xl font-semibold tracking-wide text-white transition-colors hover:border-white hover:bg-white/5"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-brand-line bg-brand-mist">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-brand-line px-4 sm:px-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-2 py-10 text-center">
              <p className="font-heading text-4xl font-bold text-brand-green-deep sm:text-6xl">
                {stat.value}
              </p>
              <p className="eyebrow mt-2 text-[0.65rem] text-brand-slate sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Positioning statement */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <p className="text-xl leading-relaxed text-brand-slate">
          With over{" "}
          <strong className="font-semibold text-brand-dark">3,000 units</strong>{" "}
          in operation internationally, we continue to supply a product that
          will increase efficiency and productivity, decrease costs and promote
          a cleaner environment.
        </p>
      </section>

      {/* Financed offers */}
      <section className="bg-brand-charcoal">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {OFFERS.map((offer) => (
              <div
                key={offer.title}
                className="flex flex-col rounded-lg border border-white/10 bg-white/5 p-8"
              >
                <p className="font-heading text-2xl font-semibold text-brand-green">
                  {offer.price}
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-white">
                  {offer.title}
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-white/70">
                  {offer.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={offer.cta.href}
                    className="rounded bg-brand-green px-5 py-2.5 font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:bg-white"
                  >
                    {offer.cta.label}
                  </Link>
                  <Link
                    href="/price"
                    className="rounded border border-white/25 px-5 py-2.5 font-heading text-lg font-semibold tracking-wide text-white transition-colors hover:border-white"
                  >
                    Apply for Finance
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability blocks */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="space-y-16">
          {CAPABILITIES.map((item, index) => (
            <article
              key={item.title}
              className="grid items-center gap-10 md:grid-cols-2"
            >
              <div
                className={`flex items-center justify-center rounded-lg bg-brand-mist p-8 ${
                  index % 2 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={420}
                  height={420}
                  className="h-auto max-h-72 w-auto object-contain"
                />
              </div>
              <div>
                <p className="eyebrow text-xs text-brand-green-deep">
                  {item.eyebrow}
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
                  {item.title}
                </h2>
                {item.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 leading-relaxed text-brand-slate"
                  >
                    {paragraph}
                  </p>
                ))}
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 font-heading text-lg font-semibold text-brand-green-deep transition-colors hover:text-brand-dark"
                >
                  Learn more
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-brand-green">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-heading text-4xl font-bold text-brand-dark sm:text-5xl">
            Contact us for a quote now
          </h2>
          <p className="mt-4 text-lg text-brand-dark/75">
            Complete the contact form and we will supply you with a nitrogen
            solution that fits your application.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rfq"
              className="rounded bg-brand-dark px-8 py-4 font-heading text-xl font-semibold tracking-wide text-white transition-colors hover:bg-brand-charcoal"
            >
              Request a Quote
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="rounded border border-brand-dark/30 px-8 py-4 font-heading text-xl font-semibold tracking-wide text-brand-dark transition-colors hover:border-brand-dark"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
