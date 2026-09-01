import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "NitroMax",
  description:
    "Spray painting with heated nitrogen. The NitroMax system provides an unlimited supply of heated nitrogen for improved transfer efficiency, flash time, finish quality and cycle time.",
};

const BENEFITS = [
  {
    title: "Transfer Efficiency",
    body: "Spraying with a single gas (N2) minimizes overspray, wasting less material and improving your transfer efficiency. A higher volume of paint is transferred to the part being painted and less material is wasted into the atmosphere.",
  },
  {
    title: "Flash Time",
    body: "The nitrogen supplied by the NitroMax system is inert and dry. The introduction of heat via the heated hose to the spray gun promotes paint flash time and consequently productivity.",
  },
  {
    title: "Finish Quality",
    body: "The absence of moisture ensures a higher finish quality. Minimize buffing and sanding.",
  },
  {
    title: "Cycle Time",
    body: "Faster flash times, better transfer efficiency and cleaner finish quality result in improved cycle times.",
  },
];

export default function NitroMaxPage() {
  return (
    <>
      <PageHero
        title="NitroMax"
        intro="Spray painting with heated nitrogen — the cleanest, driest medium available for spray applications."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-[1.5fr_1fr]">
          <div className="prose-nh">
            <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
              Spray Painting with Heated Nitrogen
            </h2>
            <p>
              Liquid material application using spray gun technology has relied
              on compressed air since the early 1900s. The presence of moisture
              in the compressed air has always been a challenge during liquid
              and powder applications. Inline filtration and refrigerated drying
              do remove some of the moisture created during the condensation
              process. Point-of-use compressed air filters further assist in the
              removal of moisture, but with minimal benefits to the application
              of spray paint.
            </p>
            <p>
              Moisture in the compressed air lines affects the quality of
              application when spraying paint or other liquids that do not react
              well with moisture. When spraying paint with compressed air, you
              are atomizing the paint with multiple gases that make up our
              atmosphere. The ideal requirement for a propellant should be one
              without moisture present — hence, the use of nitrogen.
            </p>
            <p>
              Nitrogen is the most abundant gas in our atmosphere and, obviously,
              the same in compressed air. The inert qualities of nitrogen allow
              the addition of heat without any effects, but the benefits of
              heated nitrogen raise the quality and efficiency of spray paint
              application. The process of using heated nitrogen through the
              separation of oxygen and hydrogen from the compressed air results
              in the cleanest, dry medium available for spray applications.
            </p>
            <p>
              The addition of heat to the nitrogen further enhances efficiency
              and productivity in the promotion of the curing and drying time of
              the liquid being applied. The atomization process using a single
              gas (nitrogen) is far more efficient than the atomization of paint
              with multiple gases in compressed air. Atomization can now occur at
              lower pressures, thereby minimizing overspray and wasted material,
              with significantly fewer VOCs being exhausted into the atmosphere.
              This subsequently increases the lifespan of spray booth exhaust
              filters and, most importantly, does not harm the environment.
            </p>
            <p>
              Use of this technology results in benefits in material savings,
              improved cycle times (due to faster curing) and a higher quality
              finish. The spray painting process requires large volumes of
              nitrogen and can be addressed with an in-house &ldquo;nitrogen
              on-demand&rdquo; generator solution that eliminates the need for
              high-pressure tanks and adherence to hazardous requirements.
            </p>
            <p className="text-brand-dark">
              The NitroMax systems will provide an unlimited supply of heated
              nitrogen — spray with nitrogen.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center rounded-lg bg-brand-mist p-8">
              <Image
                src="/img/skid-generator.webp"
                alt="NitroMax skid-mounted nitrogen generator"
                width={400}
                height={403}
                className="h-auto w-full max-w-xs object-contain"
              />
            </div>
            <div className="flex justify-center rounded-lg bg-brand-mist p-8">
              <Image
                src="/img/spray-pattern.webp"
                alt="Spray pattern achieved with heated nitrogen"
                width={334}
                height={192}
                className="h-auto w-full max-w-xs object-contain"
              />
            </div>
            <div className="rounded-lg border border-brand-line p-6">
              <h3 className="font-heading text-xl font-semibold text-brand-dark">
                Available models
              </h3>
              <p className="mt-2 text-sm text-brand-slate">
                NM15 (single booth) and NM30 (dual booth) systems ship with
                HeatPro 200 heater controllers and NHH50 heated hoses. NG15 and
                NG30 are generator-only.
              </p>
              <Link
                href="/price"
                className="mt-4 inline-block font-heading text-lg font-semibold text-brand-green-deep hover:text-brand-dark"
              >
                See pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
            Benefits of Heated Nitrogen
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-lg border-t-4 border-brand-green bg-white p-6"
              >
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-brand-dark">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
