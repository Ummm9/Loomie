import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealImage } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Info — Loomie",
  description: "Loomie is a design studio building brand identities, digital experiences and visual systems.",
};

const values = [
  {
    n: "01",
    title: "Clarity over decoration",
    body: "Every choice earns its place. If it doesn't carry meaning, it doesn't ship.",
  },
  {
    n: "02",
    title: "Systems, not one-offs",
    body: "A logo is a starting point. We build the rules that let a brand hold together at any scale.",
  },
  {
    n: "03",
    title: "Craft is the pitch",
    body: "We'd rather show the work than talk about it. Every deck, sketch and file is treated like final output.",
  },
];

const approach = [
  { step: "Research", body: "Understand the market, the audience and what the brand actually needs to say." },
  { step: "Concept", body: "Sketch fast, explore wide — logos, silhouettes, colour and voice tested in parallel." },
  { step: "Iteration", body: "Narrow toward the direction that's most true to the brand, not just the loudest." },
  { step: "Systemise", body: "Turn the winning direction into a real system — type, colour, components, rules." },
  { step: "Ship", body: "Apply the system across every real surface: product, packaging, campaign, screen." },
];

export default function InfoPage() {
  return (
    <div className="bg-ink px-5 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Info</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="font-display mt-3 max-w-4xl text-[13vw] leading-[0.9] tracking-tight text-paper md:text-[6.5vw]">
            Design that connects.
          </h1>
        </Reveal>
        <Reveal delay={0.14} className="mt-10 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-16">
          <p className="text-xl leading-relaxed text-paper md:text-2xl">
            Loomie is a design studio building brand identities, digital
            experiences and visual systems for people who want their work to
            feel considered, not templated.
          </p>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            We work across strategy, identity, packaging and digital product —
            usually all at once, because a brand doesn&rsquo;t stop being a
            brand the moment it hits a screen or a shelf. Founded in 2026, the
            studio takes on a small number of projects at a time, by design.
          </p>
        </Reveal>
      </div>

      <RevealImage className="relative mt-20 aspect-[16/8] w-full overflow-hidden md:mt-28">
        <Image
          src="/work/vanta/social-campaign-grid.webp"
          alt="A grid of recent Loomie campaign work across footwear and apparel"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </RevealImage>

      <section className="mx-auto max-w-[1600px] border-t border-line px-0 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              What We Believe
            </p>
          </Reveal>
          <div className="flex flex-col">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.06}>
                <div className="grid grid-cols-[3rem_1fr] gap-6 border-t border-line py-8 last:border-b md:grid-cols-[4rem_1fr]">
                  <span className="font-mono text-sm text-muted">{v.n}</span>
                  <div>
                    <h3 className="font-display text-2xl text-paper md:text-3xl">{v.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted md:text-base">
                      {v.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] border-t border-line px-0 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              How We Work
            </p>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display max-w-2xl text-[8vw] leading-[1] tracking-tight text-paper md:text-[3vw]">
                Five steps, one honest process.
              </h2>
            </Reveal>
            <ol className="mt-10 flex flex-col">
              {approach.map((a, i) => (
                <Reveal key={a.step} delay={0.05 + i * 0.05}>
                  <li className="flex flex-col gap-2 border-t border-line py-6 last:border-b sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="font-display text-xl text-paper md:text-2xl">
                      {String(i + 1).padStart(2, "0")} — {a.step}
                    </span>
                    <span className="max-w-md text-sm leading-relaxed text-muted md:text-base">
                      {a.body}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] border-t border-line px-0 py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Selected Clients
          </p>
        </Reveal>
        <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          <span className="font-display text-3xl text-paper md:text-5xl">Vanta</span>
          <span className="font-display text-3xl text-muted md:text-5xl">Mellow</span>
          <span className="font-display text-3xl text-muted md:text-5xl">Ping</span>
        </Reveal>
        <Reveal delay={0.14} className="mt-10">
          <Link
            href="/work"
            data-cursor="link"
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-paper"
          >
            <span>See the Work</span>
            <span className="h-px w-10 bg-paper" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
