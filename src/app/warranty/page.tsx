import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Warranty",
  description:
    "The NitroHeat warranty policy — covered products, warranty periods, what is and is not covered, the claim procedure and limitation of liability.",
};

export default function WarrantyPage() {
  const { address } = COMPANY;

  return (
    <>
      <PageHero eyebrow="Warranty" title="NitroHeat Warranty Policy" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <dl className="grid gap-4 rounded-lg bg-brand-mist p-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="eyebrow text-[0.65rem] text-brand-slate">
              Effective date
            </dt>
            <dd className="mt-1 text-brand-dark">01 January 2025</dd>
          </div>
          <div>
            <dt className="eyebrow text-[0.65rem] text-brand-slate">Company</dt>
            <dd className="mt-1 text-brand-dark">{COMPANY.legalName}</dd>
          </div>
          <div>
            <dt className="eyebrow text-[0.65rem] text-brand-slate">Address</dt>
            <dd className="mt-1 text-brand-dark">
              {address.line1}, {address.city}, {address.state} {address.zip}
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-[0.65rem] text-brand-slate">Contact</dt>
            <dd className="mt-1 text-brand-dark">
              <a href={COMPANY.phoneHref} className="hover:text-brand-green-deep">
                {COMPANY.phone}
              </a>
              <br />
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover:text-brand-green-deep"
              >
                {COMPANY.email}
              </a>
            </dd>
          </div>
        </dl>

        <div className="prose-nh mt-12">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-brand-dark">
            Covered products
          </h2>
          <p>This warranty policy applies to the following NitroHeat products:</p>
          <ul>
            <li>Nitrogen generators (e.g. NM30, NG15 models)</li>
            <li>Heater controllers (HP200)</li>
            <li>Heated hoses (NHH50)</li>
          </ul>

          <h2 className="mt-10 font-heading text-2xl font-bold uppercase tracking-wide text-brand-dark">
            Warranty period
          </h2>
          <p>
            NitroHeat warrants its products to be free from defects in material
            and workmanship for the following periods from the original date of
            delivery or installation, whichever comes first:
          </p>
          <ul>
            <li>Nitrogen generators — 12 months</li>
            <li>Heater controllers — 12 months</li>
            <li>Heated hoses — 6 months</li>
          </ul>

          <h2 className="mt-10 font-heading text-2xl font-bold uppercase tracking-wide text-brand-dark">
            What is covered
          </h2>
          <p>
            During the applicable warranty period, NitroHeat will, at its
            option, repair or replace any component found to be defective in
            material or workmanship under normal use and service. This warranty
            includes:
          </p>
          <ul>
            <li>Replacement parts</li>
            <li>Standard labor associated with warranty repairs</li>
            <li>Technical support (phone / email) related to warranty issues</li>
          </ul>

          <h2 className="mt-10 font-heading text-2xl font-bold uppercase tracking-wide text-brand-dark">
            What is not covered
          </h2>
          <p>This warranty does not cover:</p>
          <ul>
            <li>Normal wear and tear</li>
            <li>Consumables (filters, seals, etc.)</li>
            <li>
              Damage resulting from improper installation or maintenance not
              performed by authorized personnel
            </li>
            <li>Use of incompatible materials or accessories</li>
            <li>Unauthorized modification or repair</li>
            <li>Accident, misuse, or neglect</li>
            <li>
              Power surges or environmental factors (e.g. moisture, extreme
              temperatures)
            </li>
            <li>
              Transportation or shipping damage (must be reported immediately to
              the carrier)
            </li>
          </ul>

          <h2 className="mt-10 font-heading text-2xl font-bold uppercase tracking-wide text-brand-dark">
            Warranty claim procedure
          </h2>
          <p>To make a warranty claim, the customer must:</p>
          <ul>
            <li>
              Contact NitroHeat at{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="font-semibold text-brand-green-deep"
              >
                {COMPANY.email}
              </a>{" "}
              or{" "}
              <a
                href={COMPANY.phoneHref}
                className="font-semibold text-brand-green-deep"
              >
                {COMPANY.phone}
              </a>{" "}
              to report the issue
            </li>
            <li>
              Provide the product serial number, original invoice or proof of
              purchase, a description of the issue, and photos or videos if
              applicable
            </li>
            <li>
              Await written authorization or return instructions before shipping
              any items
            </li>
          </ul>
          <p>
            <strong className="text-brand-dark">Note:</strong> unauthorized
            returns may be refused and returned at the sender&rsquo;s expense.
          </p>

          <h2 className="mt-10 font-heading text-2xl font-bold uppercase tracking-wide text-brand-dark">
            Return shipping
          </h2>
          <p>
            For approved warranty repairs, NitroHeat will cover the cost of
            shipping the repaired or replacement part back to the customer
            within the continental USA. The customer is responsible for the cost
            of shipping the defective product to NitroHeat, unless otherwise
            agreed.
          </p>

          <h2 className="mt-10 font-heading text-2xl font-bold uppercase tracking-wide text-brand-dark">
            Limitation of liability
          </h2>
          <p>
            This warranty is the sole and exclusive warranty provided by
            NitroHeat. NitroHeat disclaims all other warranties, express or
            implied, including merchantability or fitness for a particular
            purpose. Under no circumstances shall NitroHeat be liable for:
          </p>
          <ul>
            <li>Indirect, incidental, or consequential damages</li>
            <li>Loss of production or downtime</li>
            <li>
              Cost of labor or installation by third parties, unless previously
              authorized
            </li>
          </ul>

          <h2 className="mt-10 font-heading text-2xl font-bold uppercase tracking-wide text-brand-dark">
            Extended warranty
          </h2>
          <p>
            Extended warranty options may be available for purchase. Please
            contact NitroHeat for details.
          </p>

          <h2 className="mt-10 font-heading text-2xl font-bold uppercase tracking-wide text-brand-dark">
            Governing law
          </h2>
          <p>
            This warranty shall be governed by the laws of the State of Oregon,
            USA.
          </p>
        </div>
      </section>
    </>
  );
}
