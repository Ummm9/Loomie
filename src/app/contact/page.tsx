import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Contact — Loomie",
  description: "Get in touch with Loomie — hello@loomie.design",
};

const links = [
  { label: "Email", value: "hello@loomie.design", href: "mailto:hello@loomie.design" },
  { label: "Instagram", value: "@byloomie", href: "https://www.instagram.com/byloomie/" },
  { label: "LinkedIn", value: "loomieofficial", href: "https://www.linkedin.com/company/loomieofficial/" },
  { label: "X", value: "@Loomieofficial", href: "https://x.com/Loomieofficial" },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-ink px-5 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto w-full max-w-[1600px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Contact</p>
        </Reveal>

        <MagneticButton className="mt-6 inline-block" strength={0.15}>
          <a
            href="mailto:hello@loomie.design"
            data-cursor="link"
            className="font-display block text-[13vw] leading-[0.92] tracking-tight text-paper md:text-[7.5vw]"
          >
            Let&rsquo;s make
            <br />
            something
            <br />
            interesting.
          </a>
        </MagneticButton>

        <Reveal delay={0.1} className="mt-14 max-w-md text-base leading-relaxed text-muted md:text-lg">
          <p>
            Have a brand, product or story that needs a real design system
            behind it? Tell us about it — we read every note.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-10 md:mt-24 md:grid-cols-4 md:gap-10">
          {links.map((l, i) => (
            <Reveal key={l.href} delay={0.05 + i * 0.05}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                data-cursor="link"
                className="group flex flex-col gap-2"
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {l.label}
                </span>
                <span className="text-lg text-paper underline decoration-1 underline-offset-4 decoration-line-strong group-hover:decoration-paper md:text-xl">
                  {l.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24 pb-16 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
        Based remote — working with brands worldwide.
      </div>
    </div>
  );
}
