import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NitroHeat collects, uses and protects your information, together with our website content publishing policy.",
};

/**
 * Legal copy is reproduced from the previous site. The source text referred to
 * "nitroheat.net"; the business owns both domains and confirmed this policy
 * should name the .com site.
 */
const SITE_REFERENCE = "nitroheat.com";

export default function PrivacyPolicyPage() {
  const { address } = COMPANY;

  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="prose-nh">
          <p className="text-brand-dark">
            <strong>Effective Date:</strong> 01 January 2025
          </p>
          <p>
            NitroHeat values your privacy. This Privacy Policy explains how we
            collect, use, and protect your information when you visit our
            website {SITE_REFERENCE}. By using our site, you agree to the terms
            described below.
          </p>

          <h3>1. Information We Collect</h3>
          <p>When you visit our website, we may collect:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> name, email address, phone
              number, company name, and other details you provide through
              contact forms or inquiries.
            </li>
            <li>
              <strong>Usage Data:</strong> information about how you use our
              website, including IP address, browser type, pages visited, and
              time spent on the site.
            </li>
            <li>
              <strong>Cookies &amp; Tracking:</strong> we use cookies and similar
              technologies to improve site performance, analyze traffic, and
              personalize your experience.
            </li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>We may use collected information to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Process orders, service requests, or partnership inquiries.</li>
            <li>Improve our website, products, and services.</li>
            <li>
              Send relevant updates, promotions, or product information (if you
              opt in).
            </li>
          </ul>

          <h3>3. How We Share Information</h3>
          <ul>
            <li>
              NitroHeat does not sell or rent your personal information.
            </li>
            <li>
              We may share data with trusted service providers (such as web
              hosting, analytics, or email services) who help us operate our
              website.
            </li>
            <li>
              We may disclose information if required by law or to protect our
              legal rights.
            </li>
          </ul>

          <h3>4. Data Security</h3>
          <p>
            We take appropriate measures to safeguard your information from
            unauthorized access, use, or disclosure. However, no method of
            transmission over the internet is 100% secure, and we cannot
            guarantee absolute protection.
          </p>

          <h3>5. Your Choices</h3>
          <ul>
            <li>
              You may opt out of marketing emails at any time by following the
              unsubscribe link included in our communications.
            </li>
            <li>
              You may disable cookies in your browser settings, though this may
              affect site functionality.
            </li>
            <li>
              You may contact us to request access, correction, or deletion of
              your personal data.
            </li>
          </ul>

          <h3>6. Third-Party Links</h3>
          <p>
            Our website may contain links to external sites. NitroHeat is not
            responsible for the privacy practices or content of third-party
            websites.
          </p>

          <h3>7. Children&rsquo;s Privacy</h3>
          <p>
            Our website is not directed to children under 13, and we do not
            knowingly collect information from them.
          </p>

          <h3>8. Policy Updates</h3>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date.
          </p>

          <h3>9. Contact Us</h3>
          <p>
            If you have questions about this Privacy Policy or how we handle
            your information, please contact us:
          </p>
          <address className="mt-3 not-italic leading-relaxed text-brand-slate">
            {COMPANY.legalName}
            <br />
            {address.line1}
            <br />
            {address.city}, {address.state} {address.zip}
            <br />
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
          </address>
        </div>

        <hr className="my-14 border-brand-line" />

        <div className="prose-nh">
          <h2 className="font-heading text-3xl font-bold text-brand-dark">
            Website Content Publishing Policy
          </h2>
          <p>
            At NitroHeat, we are committed to maintaining a professional,
            accurate, and user-friendly online presence. This Website Publishing
            Policy outlines the standards and practices we follow when creating,
            publishing, and maintaining content on {SITE_REFERENCE}.
          </p>

          <h3>1. Ownership &amp; Responsibility</h3>
          <ul>
            <li>
              All content published on {SITE_REFERENCE} is owned by NitroHeat
              unless otherwise noted.
            </li>
            <li>
              The NitroHeat marketing and communications team is responsible for
              ensuring that all content reflects the company&rsquo;s mission,
              brand, and standards.
            </li>
          </ul>

          <h3>2. Content Standards</h3>
          <ul>
            <li>
              Content must be accurate, clear, and aligned with NitroHeat&rsquo;s
              brand voice.
            </li>
            <li>
              Technical product information must be verified by the engineering
              or product management team before publishing.
            </li>
            <li>
              No confidential or proprietary information will be published
              without explicit approval.
            </li>
            <li>
              All media (images, videos, graphics) must be properly licensed,
              owned, or credited.
            </li>
          </ul>

          <h3>3. Publishing Process</h3>
          <ul>
            <li>
              New content (pages, product updates, blog posts, press releases)
              will undergo an internal review for accuracy and compliance before
              publishing.
            </li>
            <li>
              Updates and edits are tracked to ensure transparency and
              accountability.
            </li>
            <li>
              Outdated or inaccurate content will be promptly corrected or
              removed.
            </li>
          </ul>

          <h3>4. Compliance &amp; Legal</h3>
          <ul>
            <li>
              The NitroHeat website complies with applicable laws, including
              copyright, privacy, and data protection regulations.
            </li>
            <li>
              We follow accessibility best practices to ensure content is usable
              for all visitors.
            </li>
            <li>
              Any third-party references or links are vetted for reliability and
              relevance.
            </li>
          </ul>

          <h3>5. User Interaction</h3>
          <ul>
            <li>
              Contact forms, inquiry submissions, and other interactive features
              will be monitored to ensure timely and professional responses.
            </li>
            <li>
              User data submitted through the site will be handled in accordance
              with NitroHeat&rsquo;s Privacy Policy.
            </li>
          </ul>

          <h3>6. Policy Review</h3>
          <p>
            This policy will be reviewed annually and updated as needed to
            reflect changes in technology, legal requirements, or NitroHeat&rsquo;s
            business operations.
          </p>
        </div>
      </section>
    </>
  );
}
