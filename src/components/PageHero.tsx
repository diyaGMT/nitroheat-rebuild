import { COMPANY } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

/** Compact dark banner used at the top of every interior page. */
export default function PageHero({ eyebrow, title, intro }: Props) {
  return (
    <section className="border-b border-white/5 bg-brand-dark">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="eyebrow text-xs text-brand-green">
          {eyebrow ?? COMPANY.tagline}
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold leading-none text-white sm:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
