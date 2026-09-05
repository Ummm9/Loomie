"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/work", label: "Work" },
  { href: "/info", label: "Info" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Reset the mobile menu when the route changes (adjust state during
  // render instead of an effect, per React's recommended pattern).
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - lastY) < 8) return;
      setHidden(y > lastY && y > 160);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[900] transition-transform duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-out)" }}
      >
        <div
          className={`flex items-center justify-between px-5 py-5 md:px-10 md:py-6 transition-colors duration-300 ${
            scrolled ? "backdrop-blur-md bg-ink/70" : ""
          }`}
        >
          <Link
            href="/"
            data-cursor="link"
            className="font-display text-lg font-semibold tracking-tight text-paper"
          >
            LOOMIE
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-cursor="link"
                className="group relative font-mono text-xs uppercase tracking-[0.15em] text-paper"
              >
                <span>{l.label}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-paper transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            data-cursor="link"
            className="relative z-[950] flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-px w-6 bg-paper transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-paper transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[940] flex flex-col justify-between bg-ink px-5 pb-10 pt-28 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    className="font-display block text-5xl leading-tight text-paper"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              <a href="mailto:hello@loomie.design" className="text-paper">
                hello@loomie.design
              </a>
              <div className="mt-3 flex gap-4">
                <a href="https://www.instagram.com/byloomie/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/company/loomieofficial/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href="https://x.com/Loomieofficial" target="_blank" rel="noreferrer">
                  X
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
