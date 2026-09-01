import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technical Specifications",
  description:
    "Full technical specifications for the NitroMax 30 nitrogen generator, HeatPro 200 heater controller and the NW650 plastic welder with N2 generator.",
};

const MAIN_SPECS: { label: string; nm30: string; hp200: string }[] = [
  { label: "Product code", nm30: "NM30", hp200: "HP200" },
  { label: "Product name", nm30: "Nitromax 30", hp200: "HeatPro 200" },
  { label: "Product description", nm30: "Nitrogen Generator", hp200: "N2 Heater Controller" },
  { label: "Heater wattage (W)", nm30: "—", hp200: "500" },
  { label: "Heater operating temperature", nm30: "—", hp200: "100°F – 180°F" },
  { label: "Electrical requirements", nm30: "110 / 220 VAC, 50–60 Hz", hp200: "110 / 220 VAC, 50–60 Hz" },
  { label: "Current draw (A)", nm30: "1.5", hp200: "7.5" },
  { label: "Max inlet pressure psi (bar)", nm30: "145 (10)", hp200: "120 (8.2)" },
  { label: "Pressure drop psi (bar)", nm30: "10 (0.6)", hp200: "< 5 (0.3)" },
  { label: "Max flow rate cfm (LPM)", nm30: "30 (850)", hp200: "16 (450)" },
  { label: "Enclosure", nm30: "Aluminium", hp200: "ABS" },
  { label: "Dimensions (H x W x D) in / mm", nm30: "44 x 24 x 18 / 1117 x 609 x 457", hp200: "16 x 10 x 6 / 406 x 254 x 152" },
  { label: "Inlet connection", nm30: "½” FNPT", hp200: "½” FNPT" },
  { label: "Outlet connection", nm30: "½” FNPT", hp200: "½” MNPT" },
  { label: "Filtration", nm30: "5 stage", hp200: "Optional" },
  { label: "Shipping weight lbs (kg)", nm30: "180 (95)", hp200: "17 (7.7)" },
  { label: "Country of manufacture", nm30: "USA", hp200: "USA" },
  { label: "Certifications", nm30: "UL, CSA, ETL, CE", hp200: "UL, CSA, ETL, CE" },
];

const WELDER_SPECS = [
  { label: "Volume output (cfm)", value: "1" },
  { label: "Maximum outlet pressure (psi)", value: "15" },
  { label: "Purity (%)", value: "98" },
  { label: "Nitrogen outlet", value: "¼”" },
  { label: "Power connection type", value: "IEC 320" },
  { label: "Supply voltage", value: "110 VAC" },
  { label: "Max current draw", value: "8.5 A" },
  { label: "Fuse", value: "10 A" },
  { label: "Temperature °F (°C)", value: "36 – 122 (2 – 50)" },
  { label: "Humidity", value: "80% max ≤ 31°C" },
  { label: "Pollution degree", value: "2" },
  { label: "Noise dB(A)", value: "< 65" },
];

export default function TechnicalSpecificationsPage() {
  return (
    <>
      <PageHero
        title="Technical Specifications"
        intro="Detailed specifications for NitroMax generators, HeatPro 200 heater controllers and the NW650 plastic welder."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
          NitroMax &amp; HeatPro 200
        </h2>
        <div className="mt-8 overflow-x-auto rounded-lg border border-brand-line">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-brand-dark text-white">
                <th className="px-4 py-3 font-heading text-base font-semibold tracking-wide">
                  Specification
                </th>
                <th className="px-4 py-3 font-heading text-base font-semibold tracking-wide">
                  NitroMax
                </th>
                <th className="px-4 py-3 font-heading text-base font-semibold tracking-wide">
                  HeatPro 200
                </th>
              </tr>
            </thead>
            <tbody>
              {MAIN_SPECS.map((row, index) => (
                <tr key={row.label} className={index % 2 ? "bg-brand-mist" : "bg-white"}>
                  <th
                    scope="row"
                    className="px-4 py-3 text-left font-semibold text-brand-dark"
                  >
                    {row.label}
                  </th>
                  <td className="px-4 py-3 text-brand-slate">{row.nm30}</td>
                  <td className="px-4 py-3 text-brand-slate">{row.hp200}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="font-heading text-xl font-semibold text-brand-dark">
              Product dimensions
            </h3>
            <Image
              src="/img/dims.webp"
              alt="NitroHeat product dimension diagram"
              width={389}
              height={143}
              className="mt-4 h-auto w-full rounded border border-brand-line bg-white p-4"
            />
          </div>
          <div className="rounded-lg bg-brand-mist p-6 text-sm text-brand-slate">
            <p className="eyebrow text-[0.65rem] text-brand-green-deep">
              Manufacturer
            </p>
            <p className="mt-2">{COMPANY.manufacturingAddress}</p>
            <p className="mt-2">
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover:text-brand-green-deep"
              >
                {COMPANY.email}
              </a>
            </p>
            <a
              href="/downloads/nitroheat-products.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-heading text-lg font-semibold text-brand-green-deep hover:text-brand-dark"
            >
              Download full spec sheet (PDF) →
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
            Plastic Welder &amp; N2 Generator
          </h2>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-brand-line bg-brand-line sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </>
  );
}
