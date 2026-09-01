import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nitro Weld NW-650",
  description:
    "The NitroWeld NW-650 is a complete plastic welding station with built-in temperature controllers and N2 / compressed air selection.",
};

const WELDER_SPECS = [
  { label: "Volume output", value: "1 cfm" },
  { label: "Maximum outlet pressure", value: "15 psi" },
  { label: "Purity", value: "98%" },
  { label: "Nitrogen outlet", value: "¼”" },
  { label: "Supply voltage", value: "110 VAC" },
  { label: "Max current draw", value: "8.5 A" },
  { label: "Fuse", value: "10 A" },
  { label: "Noise", value: "< 65 dB(A)" },
];

export default function NitroWeldPage() {
  return (
    <>
      <PageHero
        title="Nitro Weld"
        intro="A complete plastic welding station with built-in temperature controllers and nitrogen / compressed air selection."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="prose-nh">
            <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
              NW-650
            </h2>
            <p>
              The NitroWeld NW-650 is a complete plastic welding station with
              built-in temperature controllers including N2 and compressed air
              selection.
            </p>
            <p>
              This unit can be used with an external nitrogen supply (tank) or
              can be attached to a nitrogen generator.
            </p>
            <p>
              If used with a nitrogen cylinder, the built-in selector allows the
              user to pre-heat and cool down with compressed air and ONLY use the
              N2 supply for the direct welding process.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/rfq"
                className="rounded bg-brand-green px-6 py-3 font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:bg-brand-green-dark hover:text-white"
              >
                Request a Quote
              </Link>
              <a
                href="/downloads/nw650-plastic-welder-user-manual.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-brand-line px-6 py-3 font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:border-brand-dark"
              >
                User Manual (PDF)
              </a>
            </div>
          </div>

          <div className="flex justify-center rounded-lg bg-brand-mist p-10">
            <Image
              src="/img/nw650.webp"
              alt="NitroWeld NW-650 plastic welding station"
              width={400}
              height={400}
              className="h-auto w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.5fr]">
            <div>
              <div className="flex justify-center rounded-lg bg-white p-8">
                <Image
                  src="/img/nw650-n2.webp"
                  alt="NW650-N2 nitrogen generator"
                  width={185}
                  height={316}
                  className="h-auto w-auto max-h-64 object-contain"
                />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold text-brand-dark">
                NW650-N2
              </h2>
              <p className="mt-2 text-brand-slate">
                The NW650-N2 generator eliminates the need for tanked nitrogen.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold text-brand-dark">
                Plastic welder &amp; N2 generator specifications
              </h3>
              <dl className="mt-6 grid gap-px overflow-hidden rounded-lg border border-brand-line bg-brand-line sm:grid-cols-2">
                {WELDER_SPECS.map((spec) => (
                  <div key={spec.label} className="bg-white p-5">
                    <dt className="eyebrow text-[0.65rem] text-brand-slate">
                      {spec.label}
                    </dt>
                    <dd className="mt-1.5 font-heading text-xl font-semibold text-brand-dark">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
