import type { Metadata } from "next";
import FormRenderer, { type Field } from "@/components/FormRenderer";
import PageHero from "@/components/PageHero";
import { COUNTRIES, US_STATES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product Registration",
  description:
    "Register your newly installed NitroHeat nitrogen generator and HeatPro heaters to activate warranty coverage and support.",
};

const FIELDS: Field[] = [
  { kind: "heading", label: "Company" },
  { kind: "text", name: "companyName", label: "Company Name", required: true },
  { kind: "url", name: "website", label: "Company Website" },
  { kind: "text", name: "firstName", label: "Contact First Name", required: true },
  { kind: "text", name: "lastName", label: "Contact Last Name" },
  { kind: "tel", name: "phone", label: "Phone" },
  { kind: "email", name: "email", label: "Email", required: true },

  { kind: "heading", label: "Address" },
  { kind: "text", name: "address1", label: "Address Line 1" },
  { kind: "text", name: "address2", label: "Address Line 2" },
  { kind: "text", name: "city", label: "City" },
  {
    kind: "select",
    name: "state",
    label: "State",
    placeholder: "--- Select state ---",
    options: US_STATES,
  },
  { kind: "text", name: "zip", label: "Zip Code" },
  { kind: "select", name: "country", label: "Country", options: COUNTRIES },

  { kind: "heading", label: "Equipment" },
  {
    kind: "select",
    name: "generator",
    label: "N2 Generator installed at this client",
    placeholder: "Select…",
    options: ["NM15", "NM30", "NM45", "NM60"],
  },
  {
    kind: "number",
    name: "heaterCount",
    label: "HP200 (Heaters) — enter number installed",
  },
  { kind: "date", name: "datePurchased", label: "Date Purchased" },
  {
    kind: "text",
    name: "purchasedFrom",
    label: "Purchased from (Distributor Name)",
  },
  { kind: "date", name: "dateInstalled", label: "Date Installed" },
  { kind: "text", name: "installedBy", label: "Installation done by" },
  { kind: "text", name: "trainedBy", label: "Who did your training?" },
  {
    kind: "textarea",
    name: "technicians",
    label: "Names of technicians trained",
    rows: 3,
  },
  { kind: "textarea", name: "notes", label: "Comments or Notes", rows: 4 },
];

export default function ProductRegistrationPage() {
  return (
    <>
      <PageHero
        title="Product Registration"
        intro="Register your installation so we have your equipment details on file for warranty and support."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <FormRenderer
          fields={FIELDS}
          formType="Product registration"
          submitLabel="Register Product"
          successBody="Your registration has been received. Keep your invoice and serial numbers safe — you will need them for any warranty claim."
        />
      </section>
    </>
  );
}
