import { projects } from "@/lib/projects";
import ProjectRow from "./ProjectRow";
import { Reveal } from "./Reveal";

export default function SelectedWork({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="work" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        {showHeading && (
          <>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                Selected Work
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-3 text-[9vw] leading-[0.95] tracking-tight text-paper md:text-[4.5vw]">
                Three brands. Three worlds.
              </h2>
            </Reveal>
          </>
        )}

        <div className="mt-6">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
