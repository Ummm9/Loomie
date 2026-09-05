import type { Project } from "@/lib/projects";
import { Reveal } from "./Reveal";

export default function ProjectMeta({ project }: { project: Project }) {
  const light = project.theme === "light";
  return (
    <section className={`${light ? "theme-paper bg-paper text-ink" : "bg-ink text-paper"} px-5 py-20 md:px-10 md:py-28`}>
      <div className="mx-auto grid max-w-[1600px] gap-12 border-t border-line md:grid-cols-[1fr_1fr] md:gap-24 md:border-line-paper">
        <div className={`pt-12 ${light ? "border-line-paper" : "border-line"}`}>
          <Reveal>
            <p className={`font-mono text-xs uppercase tracking-[0.25em] ${light ? "text-muted-on-paper" : "text-muted"}`}>
              Project Overview
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 text-xl leading-relaxed md:text-2xl">{project.overview}</p>
          </Reveal>
        </div>

        <div className="pt-12">
          <Reveal>
            <p className={`font-mono text-xs uppercase tracking-[0.25em] ${light ? "text-muted-on-paper" : "text-muted"}`}>
              Role &amp; Services
            </p>
          </Reveal>
          <ul className="mt-6 flex flex-col">
            {project.services.map((s, i) => (
              <Reveal key={s} delay={0.05 + i * 0.04}>
                <li
                  className={`flex items-baseline justify-between gap-4 border-b py-4 text-lg md:text-xl ${
                    light ? "border-line-paper" : "border-line"
                  }`}
                >
                  <span>{s}</span>
                  <span className={`font-mono text-xs ${light ? "text-muted-on-paper" : "text-muted"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
