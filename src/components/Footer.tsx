"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/info", label: "Info" },
  { href: "/contact", label: "Contact" },
];

const social = [
  { href: "https://www.instagram.com/byloomie/", label: "Instagram" },
  { href: "https://www.linkedin.com/company/loomieofficial/", label: "LinkedIn" },
  { href: "https://x.com/Loomieofficial", label: "X" },
];

export default function Footer() {
  const pathname = usePathname();
  const onContact = pathname === "/contact";

  return (
    <footer className="border-t border-line bg-ink px-5 pb-8 pt-16 md:px-10 md:pt-24">
      <div className="mx-auto max-w-[1600px]">
        {!onContact && (
          <div className="flex flex-col justify-between gap-12 border-b border-line pb-16 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Let&rsquo;s make something
              </p>
              <Link
                href="/contact"
                data-cursor="link"
                className="font-display mt-2 block text-[13vw] leading-[0.95] text-paper md:text-[6vw]"
              >
                Interesting.
              </Link>
            </div>
            <a
              href="mailto:hello@loomie.design"
              data-cursor="link"
              className="font-display shrink-0 text-2xl text-paper underline decoration-1 underline-offset-8 md:text-3xl"
            >
              hello@loomie.design
            </a>
          </div>
        )}

        <div className={`flex flex-col gap-10 md:flex-row md:items-start md:justify-between ${onContact ? "pt-0" : "pt-10"}`}>
          <div className="flex flex-col gap-1">
            <span className="font-display text-2xl text-paper">LOOMIE</span>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
              Design &amp; Creative Studio
            </span>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.15em] text-muted"
          >
            {nav.map((l) => (
              <Link key={l.href} href={l.href} data-cursor="link" className="hover:text-paper">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.15em] text-muted">
            {social.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="hover:text-paper"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Loomie. All rights reserved.</span>
          <span>Est. 2026 — Design that connects.</span>
        </div>
      </div>
    </footer>
  );
}
