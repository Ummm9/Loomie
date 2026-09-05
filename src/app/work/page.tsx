import type { Metadata } from "next";
import SelectedWork from "@/components/SelectedWork";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work — Loomie",
  description: "Selected work from Loomie: Vanta, Mellow and Ping.",
};

export default function WorkPage() {
  return (
    <div className="bg-ink px-5 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Archive
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="font-display mt-3 text-[15vw] leading-[0.88] tracking-tight text-paper md:text-[7vw]">
            Selected Work.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            A small, growing archive of identity, product and digital work.
            Every project below is real client work by Loomie.
          </p>
        </Reveal>
      </div>
      <SelectedWork showHeading={false} />
    </div>
  );
}
