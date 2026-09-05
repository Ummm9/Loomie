import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Marquee from "@/components/Marquee";
import Capabilities from "@/components/Capabilities";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-ink">
      <Hero />
      <Marquee
        items={["BRAND IDENTITY", "ART DIRECTION", "PACKAGING", "DIGITAL EXPERIENCE", "VISUAL SYSTEMS"]}
      />
      <SelectedWork />
      <Capabilities />

      <section className="border-t border-line px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Studio
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-3 max-w-4xl text-[9vw] leading-[0.98] tracking-tight text-paper md:text-[4.5vw]">
              A design studio for brands with a point of view.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              We work in small, dedicated teams across identity, packaging and
              digital experience — building brands that feel intentional at
              every scale, from a shoebox to a homepage.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <Link
              href="/info"
              data-cursor="link"
              className="mt-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-paper"
            >
              <span>More About Loomie</span>
              <span className="h-px w-10 bg-paper transition-all duration-300" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
