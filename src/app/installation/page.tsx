import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Installation",
  description:
    "NitroHeat installation notes — ball valve placement, piping, generator and HeatPro 200 mounting, heated hose handling and system requirements by booth count.",
};

const SECTIONS = [
  {
    title: "Ball valves",
    intro: "Use ball valves in the following locations:",
    items: [
      "Before the pre-filters",
      "After the generator",
      "After the receiver tank",
      "Before each heater (HP200)",
    ],
  },
  {
    title: "Piping",
    items: [
      "Aluminum piping is recommended",
      "Always create a loop from and to the receiver tank",
      "Use 45 degree angles instead of 90 degree angles where possible",
    ],
  },
  {
    title: "N2 generator",
    items: [
      "Install the generator in the paint shop as close to the pre-filters as possible",
      "The generator can be either wall or floor mounted",
      "The generator will operate on both 110 / 220 VAC",
      "The current draw of the generator is 2 A",
    ],
  },
  {
    title: "HP200 heater controller",
    items: [
      "1 x HP200 is required for each spray booth or prep station",
      "Mount upright OUTSIDE the spray booth",
      "The HP200 will operate on both 110 / 220 VAC",
      "The current draw of each HP200 is 7 A",
      "Connect the regulator to the input of the heater controller",
      "Connect the heated hose, thermocouple connector and heater power cables to the top of the heater",
      "Route the heated hose through the spray booth wall and add a quick connect to attach to the spray gun(s)",
      "Connect the N2 line to the regulator",
      "Connect power and switch ON",
      "Check that the green LED, temperature controller and multimeter turn ON",
      "Set the temperature",
      "Allow air / N2 to flow through the system and monitor the temperature increase as air flows through the hose",
      "Switch off at night",
    ],
  },
  {
    title: "Hose thermocouple connector",
    items: [
      "The thermocouple plug fits in ONE way only — make sure the polarity is correct",
      "Test to ensure that temperature rises when air flows through the heater. If temperature decreases during air flow, the thermocouple connector is reversed",
    ],
  },
  {
    title: "NHH50 heated hose",
    items: [
      "The heated hose must be connected to the HP200",
      "The heated hose must not be disassembled under any circumstances",
      "DO NOT DRIVE OVER THE HEATED HOSE",
    ],
  },
];

const REQUIREMENTS_COLUMNS = ["NM15", "NM15", "NM30", "NM30", "NM30"];

const REQUIREMENTS_ROWS = [
  { label: "No. of spray booths", values: ["1", "2", "2", "3", "4"] },
  { label: "No. of painters", values: ["1", "1", "2", "2+", "2+"] },
  { label: "HeatPro 200 + 50 ft heated hose", values: ["1", "2*", "2", "3*", "4*"] },
  { label: "Min air volume cfm / lpm", values: ["20 / 566", "20 / 566", "40 / 1132", "40 / 1132", "40 / 1132"] },
  { label: "Min air pressure psi / bar", values: ["100 / 7", "100 / 7", "100 / 7", "100 / 7", "100 / 7"] },
  { label: "Min receiver tank gal / litres", values: ["Opt", "Opt", "Opt", "100 / 350", "130 / 500"] },
];

export default function InstallationPage() {
  return (
    <>
      <PageHero
        title="Installation"
        intro="Installation notes for NitroMax generators, HeatPro 200 heater controllers and NHH50 heated hoses."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-brand-dark">
                  {section.title}
                </h2>
                {section.intro && (
                  <p className="mt-2 text-brand-slate">{section.intro}</p>
                )}
                <ul className="prose-nh mt-3">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <div className="sticky top-28 space-y-4">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-brand-dark">
                Recommended layout
              </h2>
              <Image
                src="/img/install-layout.webp"
                alt="Recommended NitroHeat installation layout"
                width={1197}
                height={601}
                className="h-auto w-full rounded-lg border border-brand-line"
              />
              <a
                href="/downloads/dual-booth-layout.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-heading text-lg font-semibold text-brand-green-deep hover:text-brand-dark"
              >
                Download dual booth layout (PDF) →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
            System Requirements
          </h2>
          <div className="mt-8 overflow-x-auto rounded-lg border border-brand-line">
            <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-heading text-base font-semibold tracking-wide">
                    Configuration
                  </th>
                  {REQUIREMENTS_COLUMNS.map((col, index) => (
                    <th
                      key={`${col}-${index}`}
                      className="px-4 py-3 text-center font-heading text-base font-semibold tracking-wide"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {REQUIREMENTS_ROWS.map((row, rowIndex) => (
                  <tr
                    key={row.label}
                    className={rowIndex % 2 ? "bg-brand-mist" : "bg-white"}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-left font-semibold text-brand-dark"
                    >
                      {row.label}
                    </th>
                    {row.values.map((value, index) => (
                      <td
                        key={`${row.label}-${index}`}
                        className="px-4 py-3 text-center text-brand-slate"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="prose-nh mt-4">
            <li>NM15 includes 1 x HeatPro 200</li>
            <li>NM30 includes 2 x HeatPro 200</li>
            <li>* Additional HeatPro 200 unit(s) required</li>
          </ul>
        </div>
      </section>
    </>
  );
}
