import Image from "next/image";
import Link from "next/link";
import { COMPANY, NAV, SISTER_SITES } from "@/lib/site";

export default function Footer() {
  const { address } = COMPANY;

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/img/logo.webp"
              alt="NitroHeat"
              width={600}
              height={141}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Custom membrane nitrogen generators, heater controllers and heated
              hoses for spray painting — designed and built in Oregon since{" "}
              {COMPANY.foundedYear}.
            </p>

            <address className="mt-6 not-italic text-sm text-white/70">
              <p>{address.line1}</p>
              <p>
                {address.city}, {address.state} {address.zip}
              </p>
              <p className="mt-3">
                <a
                  href={COMPANY.phoneHref}
                  className="transition-colors hover:text-brand-green"
                >
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-brand-green"
                >
                  {COMPANY.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="eyebrow text-xs text-brand-green">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {NAV.filter((link) => link.href !== "/").map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-brand-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-brand-green"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-xs text-brand-green">Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {SISTER_SITES.map((site) => (
                <li key={site.href}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand-green"
                  >
                    {site.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          100% Made in America.
        </div>
      </div>
    </footer>
  );
}
