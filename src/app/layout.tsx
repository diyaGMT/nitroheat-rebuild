import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/site";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.website),
  title: {
    default: "NitroHeat | The Smarter Way to Apply Paint",
    template: "%s | NitroHeat",
  },
  description:
    "NitroHeat designs and manufactures membrane nitrogen generators, heater controllers and heated hoses for spray painting. 100% made in Portland, Oregon since 2010.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
