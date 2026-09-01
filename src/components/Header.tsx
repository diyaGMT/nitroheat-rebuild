"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { COMPANY, NAV } from "@/lib/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMenuOpen(false);

  function isActive(href: string, children?: { href: string }[]) {
    if (href === "/") return pathname === "/";
    if (pathname === href) return true;
    return children?.some((child) => child.href === pathname) ?? false;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0" onClick={closeMenu}>
          <Image
            src="/img/logo.webp"
            alt="NitroHeat — The Smarter Way to Apply Paint"
            width={600}
            height={141}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((link) => (
            <div key={link.href} className="group relative">
              <Link
                href={link.href}
                className={`flex items-center gap-1 px-3 py-2 font-heading text-lg font-medium tracking-wide transition-colors ${
                  isActive(link.href, link.children)
                    ? "text-brand-green-deep"
                    : "text-brand-dark hover:text-brand-green-deep"
                }`}
              >
                {link.label}
                {link.children && (
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180"
                  >
                    <path d="M5 7l5 6 5-6z" />
                  </svg>
                )}
              </Link>

              {link.children && (
                <div className="invisible absolute left-0 top-full z-50 min-w-[15rem] translate-y-1 rounded-md border border-brand-line bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-4 py-2 text-sm transition-colors hover:bg-brand-mist ${
                        pathname === child.href
                          ? "text-brand-green-deep"
                          : "text-brand-slate hover:text-brand-dark"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={COMPANY.phoneHref}
            className="hidden font-heading text-lg font-semibold text-brand-dark transition-colors hover:text-brand-green-deep xl:block"
          >
            {COMPANY.phone}
          </a>
          <Link
            href="/rfq"
            className="rounded bg-brand-green px-4 py-2 font-heading text-base font-semibold tracking-wide text-brand-dark transition-colors hover:bg-brand-green-dark hover:text-white sm:px-5 sm:text-lg"
          >
            Request a Quote
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded text-brand-dark hover:bg-brand-mist lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-brand-line bg-brand-mist lg:hidden"
        >
          <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {NAV.map((link) => (
              <div key={link.href} className="border-b border-black/5 py-1 last:border-b-0">
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-2 font-heading text-lg font-semibold tracking-wide text-brand-dark"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mb-2 ml-3 flex flex-col border-l border-brand-line pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMenu}
                        className="py-1.5 text-sm text-brand-slate"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={COMPANY.phoneHref}
              onClick={closeMenu}
              className="block py-3 font-heading text-lg font-semibold text-brand-dark"
            >
              {COMPANY.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
