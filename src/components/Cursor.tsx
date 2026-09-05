"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "view" | "link" | "drag";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>("default");
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client capability detection needed before first paint
    setIsTouch(coarse);
    if (coarse) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      setVisible(true);

      const target = e.target as HTMLElement;
      const trigger = target.closest("[data-cursor]") as HTMLElement | null;
      if (trigger) {
        const type = (trigger.dataset.cursor as CursorState) || "default";
        setState(type);
        setLabel(trigger.dataset.cursorLabel || "");
      } else {
        setState("default");
        setLabel("");
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch) return null;

  const ringSize = state === "default" ? 16 : state === "link" ? 40 : 88;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[999] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s ease" }}
    >
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-paper mix-blend-difference"
        style={{ transform: "translate3d(-50%,-50%,0)", marginLeft: "-3px", marginTop: "-3px" }}
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 flex items-center justify-center rounded-full border border-paper mix-blend-difference transition-[width,height] duration-300 ease-out"
        style={{
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          transitionTimingFunction: "var(--ease-out)",
        }}
      >
        {label && (
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper text-center px-1 leading-tight">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
