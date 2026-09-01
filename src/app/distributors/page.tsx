import type { Metadata } from "next";
import Image from "next/image";
import FormRenderer, { type Field } from "@/components/FormRenderer";
import PageHero from "@/components/PageHero";
import { COUNTRIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Distributors",
  description:
    "Apply for an exclusive NitroHeat distribution territory and add American-made nitrogen generation equipment to your product line.",
};

const FIELDS: Field[] = [
  { kind: "text", name: "businessName", label: "Name of Business", required: true },
  { kind: "url", name: "website", label: "Company Website" },
  { kind: "select", name: "country", label: "Country", options: COUNTRIES },

  { kind: "heading", label: "Tell us about you" },
  { kind: "text", name: "firstName", label: "Contact First Name", required: true },
  { kind: "text", name: "lastName", label: "Contact Last Name" },
  { kind: "tel", name: "phone", label: "Phone" },
  { kind: "email", name: "email", label: "Email", required: true },
  {
    kind: "select",
    name: "industryType",
    label: "Industry Type",
    placeholder: "Select…",
    options: [
      "PBE Equipment Distributor",
      "Manufacturer",
      "Body Shop",
      "Other",
    ],
  },
  { kind: "text", name: "territory", label: "Territory" },
  { kind: "number", name: "salesPeople", label: "Number of Sales People" },
  {
    kind: "number",
    name: "estimatedUnits",
    label: "Estimated Unit Sales per Year",
  },
  { kind: "textarea", name: "notes", label: "Notes", rows: 4 },
];

export default function DistributorsPage() {
  return (
    <>
      <PageHero
        title="Distributors"
        intro="Apply for an exclusive distribution territory and enjoy the opportunities of promoting innovative NitroHeat products made in America."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">
              Work an exclusive territory
            </h2>
            <div className="prose-nh">
              <p>
                A NitroHeat distributor works in an exclusive territory.
                Distribution of the NitroHeat product range can be added to your
                current line of equipment or paint materials.
              </p>
              <p>
                We focus on manufacturing and work closely with distributors,
                agents and manufacturer representatives to take our product to
                market.
              </p>
            </div>
            <Image
              src="/img/approved-vendor.webp"
              alt="NitroHeat approved vendor"
              width={1024}
              height={577}
              className="mt-8 h-auto w-full rounded-lg border border-brand-line"
            />
          </div>

          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">
              Distributor Application
            </h2>
            <div className="mt-8">
              <FormRenderer
                fields={FIELDS}
                formType="Distributor application"
                submitLabel="Submit Application"
                successBody="Thanks for your interest — our distribution team will review your application and be in touch."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
