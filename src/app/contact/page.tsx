import type { Metadata } from "next";
import FormRenderer, { type Field } from "@/components/FormRenderer";
import PageHero from "@/components/PageHero";
import { COMPANY, COUNTRIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NitroHeat in Hillsboro, Oregon for a nitrogen solution that fits your spray application.",
};

const FIELDS: Field[] = [
  { kind: "text", name: "firstName", label: "First Name", required: true },
  { kind: "text", name: "lastName", label: "Last Name" },
  { kind: "email", name: "email", label: "Email", required: true },
  { kind: "tel", name: "phone", label: "Phone" },
  { kind: "select", name: "country", label: "Country", options: COUNTRIES },
  {
    kind: "textarea",
    name: "message",
    label: "Comment or Message",
    required: true,
    rows: 5,
  },
];

export default function ContactPage() {
  const { address } = COMPANY;

  return (
    <>
      <PageHero
        title="Contact"
        intro="Complete the form and we will supply you with a nitrogen solution that fits your application."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">
              Contact Us
            </h2>
            <div className="mt-8">
              <FormRenderer
                fields={FIELDS}
                formType="Contact enquiry"
                submitLabel="Send Message"
              />
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-lg bg-brand-mist p-6">
              <h3 className="eyebrow text-[0.65rem] text-brand-green-deep">
                Address
              </h3>
              <address className="mt-3 not-italic leading-relaxed text-brand-slate">
                {address.line1}
                <br />
                {address.city}, {address.state} {address.zip}
                <br />
                {address.country}
              </address>
            </div>

            <div className="rounded-lg bg-brand-mist p-6">
              <h3 className="eyebrow text-[0.65rem] text-brand-green-deep">
                Telephone
              </h3>
              <a
                href={COMPANY.phoneHref}
                className="mt-2 block font-heading text-2xl font-semibold text-brand-dark hover:text-brand-green-deep"
              >
                {COMPANY.phone}
              </a>
            </div>

            <div className="rounded-lg bg-brand-mist p-6">
              <h3 className="eyebrow text-[0.65rem] text-brand-green-deep">
                Email
              </h3>
              <a
                href={`mailto:${COMPANY.email}`}
                className="mt-2 block text-brand-dark hover:text-brand-green-deep"
              >
                {COMPANY.email}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
