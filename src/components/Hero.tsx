"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = scope.current?.querySelectorAll(".hero-word");
      const sub = scope.current?.querySelector(".hero-sub");
      const meta = scope.current?.querySelector(".hero-meta");

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const alreadyLoaded = (() => {
        try {
          return sessionStorage.getItem("loomie-loaded") === "1";
        } catch {
          return false;
        }
      })();
      const startDelay = reduceMotion ? 0 : alreadyLoaded ? 0.1 : 1.5;

      const tl = gsap.timeline({ delay: startDelay, defaults: { ease: "power4.out" } });

      if (words && words.length) {
        tl.fromTo(
          words,
          { yPercent: 120, rotate: 4 },
          { yPercent: 0, rotate: 0, duration: 1.1, stagger: 0.08 }
        );
      }
      if (sub) {
        tl.fromTo(sub, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
      }
      if (meta) {
        tl.fromTo(meta, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
      }
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scope}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-14 pt-32 md:px-10 md:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="hero-meta mb-8 flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span>Design &amp; Creative Studio</span>
        <span className="hidden md:inline">Est. 2026 — Based Remote</span>
      </div>

      <h1 className="font-display overflow-hidden text-[15vw] font-medium leading-[0.86] tracking-tight text-paper md:text-[9vw]">
        <span className="block overflow-hidden">
          <span className="hero-word inline-block">Identities,</span>
        </span>
        <span className="block overflow-hidden">
          <span className="hero-word inline-block">Experiences</span>
        </span>
        <span className="block overflow-hidden">
          <span className="hero-word inline-block">&amp; Visual</span>{" "}
          <span className="hero-word inline-block">Worlds.</span>
        </span>
      </h1>

      <div className="hero-sub mt-10 flex flex-col justify-between gap-8 border-t border-line pt-8 md:flex-row md:items-end">
        <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
          Loomie is a design studio building brand identities and digital
          experiences for people willing to make something interesting.
        </p>
        <Link
          href="/work"
          data-cursor="link"
          className="group flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-paper"
        >
          <span>Selected Work</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong transition-colors duration-300 group-hover:bg-paper group-hover:text-ink">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M1 13L13 1M13 1H4M13 1V10"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
