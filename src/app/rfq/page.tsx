import type { Metadata } from "next";
import FormRenderer, { type Field } from "@/components/FormRenderer";
import PageHero from "@/components/PageHero";
import { COUNTRIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote for a NitroHeat nitrogen generation and heating system. Tell us about your facility, spray equipment and materials.",
};

const FIELDS: Field[] = [
  { kind: "heading", label: "Tell us about your company / business" },
  { kind: "text", name: "companyName", label: "Company Name", required: true },
  { kind: "text", name: "city", label: "City", required: true },
  { kind: "select", name: "country", label: "Country", options: COUNTRIES },

  { kind: "heading", label: "Tell us about you" },
  { kind: "text", name: "firstName", label: "Contact First Name", required: true },
  { kind: "text", name: "lastName", label: "Contact Last Name" },
  { kind: "tel", name: "phone", label: "Phone" },
  { kind: "email", name: "email", label: "Email", required: true },

  { kind: "heading", label: "Tell us about your project" },
  {
    kind: "select",
    name: "facilityType",
    label: "Type of Facility",
    placeholder: "Select…",
    options: [
      "Auto Manufacturer",
      "Auto Collision",
      "Aerospace",
      "Wood",
      "Steel",
      "Industrial / Other",
    ],
  },
  {
    kind: "text",
    name: "facilityOther",
    label: "If other — please describe your spray painting method",
  },
  {
    kind: "checkboxes",
    name: "sprayGunType",
    label: "Spray Gun Type(s)",
    options: ["HVLP", "RP", "Rotary Bell", "Electrostatic", "Other"],
  },
  {
    kind: "text",
    name: "sprayGunOther",
    label: "If other — please list spray gun type(s)",
  },
  {
    kind: "checkboxes",
    name: "feedSystem",
    label: "Paint Liquid Feed System",
    options: ["Gravity Cup", "Paint Kitchen (pump)", "Pressure Pot", "Other"],
  },
  {
    kind: "text",
    name: "feedSystemOther",
    label: "If other — please list liquid feed system",
  },
  {
    kind: "checkboxes",
    name: "material",
    label: "Type of Material Being Applied",
    options: ["Water Borne", "Solvent", "Gel Coat", "PUR", "Varnish", "Other"],
  },
  {
    kind: "text",
    name: "substrateOther",
    label: "If other — please list substrates",
  },
  {
    kind: "textarea",
    name: "notes",
    label: "General info that you feel is necessary to share with us",
    rows: 5,
  },
];

export default function RfqPage() {
  return (
    <>
      <PageHero
        title="Request a Quote"
        intro="The more we know about your facility and process, the more accurately we can specify your system."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <FormRenderer
          fields={FIELDS}
          formType="Request for Quote"
          submitLabel="Submit Request"
          successBody="Thanks for the detail — we will review your requirements and come back to you with a specification and quote."
        />
      </section>
    </>
  );
}
