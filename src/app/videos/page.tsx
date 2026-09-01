import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "See NitroHeat at work — side-by-side spray comparisons and installations at Counts Kustoms, MAACO, Prestige, Burnside Collision and more.",
};

const VIDEOS = [
  {
    id: "nszv6vfIf_Y",
    title: "Nitrogen vs. compressed air — live comparison",
    body: "Live comparison between painting with NitroHeat and conventional compressed air. Kindly supplied by our distributor in Holland.",
  },
  {
    id: "4BeX827pQR8",
    title: "Counts Kustoms — Counting Cars",
    body: "Counts Kustoms from the popular TV show Counting Cars (on the History Channel) uses our NitroMax system for all of their painting requirements. Each custom vehicle built by Counts Kustoms is spray painted with NitroHeat.",
  },
  {
    id: "EYH06ZTeoCA",
    title: "Ryan Evans tries NitroHeat",
    body: "Ryan Evans, celebrity painter from the History Channel's Counting Cars — see his reaction the first time he tried out the NitroHeat system.",
  },
  {
    id: "QaFLQFILgzY",
    title: "MAACO — high production collision",
    body: "MAACO is one of the largest franchised auto collision service providers. Being a high production facility, bottlenecks in the paint shop are always a concern for owner Tim Ciri. The installation of NitroHeat has improved their productivity and finish quality.",
  },
  {
    id: "V07wZLuIkFk",
    title: "Prestige, California — NitroMax 15",
    body: "Prestige, California using NitroMax 15 in one spray booth. Pat is the official paint shop for the Wheeler Dealer TV series.",
  },
  {
    id: "cWMHVV98iXs",
    title: "Burnside Collision — one year review",
    body: "Burnside Collision — 1 year review spraying PPG Envirobase.",
  },
  {
    id: "ktIRsuPADx4",
    title: "Tacoma Technical College open day",
    body: "Ben Montoya and Ryan Evans at Tacoma Technical College Open Day.",
  },
];

export default function VideosPage() {
  return (
    <>
      <PageHero
        title="Videos"
        intro="Real installations, real paint shops, real results."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {VIDEOS.map((video) => (
            <figure key={video.id}>
              <div className="aspect-video overflow-hidden rounded-lg bg-brand-dark">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <figcaption className="mt-4">
                <h2 className="font-heading text-xl font-semibold text-brand-dark">
                  {video.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-brand-slate">
                  {video.body}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
