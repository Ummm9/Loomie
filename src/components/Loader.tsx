"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function Loader() {
  const [shown, setShown] = useState(false);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let already = false;
    try {
      already = sessionStorage.getItem("loomie-loaded") === "1";
    } catch {
      already = false;
    }

    if (already || reduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only check (sessionStorage / matchMedia) before first paint
      setDone(true);
      return;
    }

    setShown(true);
    document.body.style.overflow = "hidden";

    const duration = 1400;
    const start = performance.now();
    let raf = 0;

    const tick = (t: number) => {
      const elapsed = t - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        try {
          sessionStorage.setItem("loomie-loaded", "1");
        } catch {}
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = "";
        }, 350);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [reduceMotion]);

  if (!shown || done) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <span className="font-display text-[13vw] leading-none tracking-tight text-paper md:text-[8rem]">
              LOOMIE
            </span>
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted">
              <span>LOADING</span>
              <span className="text-paper">{progress}%</span>
            </div>
            <div className="h-px w-40 overflow-hidden bg-line">
              <motion.div
                className="h-full bg-paper"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
