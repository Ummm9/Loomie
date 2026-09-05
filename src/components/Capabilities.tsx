"use client";

import { Reveal } from "./Reveal";

const capabilities = [
  {
    n: "01",
    title: "Brand Identity",
    detail: "Naming, logo systems, wordmarks and the rules that hold them together.",
  },
  {
    n: "02",
    title: "Art Direction",
    detail: "Campaign concepts, photography direction and visual storytelling.",
  },
  {
    n: "03",
    title: "Packaging & Product",
    detail: "Structural and print design that carries a brand into the physical world.",
  },
  {
    n: "04",
    title: "Digital Experience",
    detail: "Web design and UI/UX systems built for e-commerce and product.",
  },
  {
    n: "05",
    title: "Visual Systems",
    detail: "Typography, colour and component libraries built to scale a brand.",
  },
];

export default function Capabilities() {
  return (
    <section className="border-t border-line px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            What We Do
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display mt-3 max-w-3xl text-[8vw] leading-[0.98] tracking-tight text-paper md:text-[3.4vw]">
            Capabilities built for brands that need to move.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col">
          {capabilities.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.05}>
              <div className="group grid grid-cols-[3rem_1fr] items-start gap-x-6 gap-y-3 border-t border-line py-7 last:border-b md:grid-cols-[4rem_1fr_1fr] md:items-center md:gap-y-0">
                <span className="font-mono text-sm text-muted">{c.n}</span>
                <h3 className="font-display text-2xl text-paper transition-transform duration-500 md:text-4xl md:group-hover:translate-x-3">
                  {c.title}
                </h3>
                <p className="col-span-2 max-w-sm text-sm leading-relaxed text-muted md:col-span-1 md:text-right">
                  {c.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
