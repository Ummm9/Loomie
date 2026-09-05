"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Reveal } from "./Reveal";

export default function ProjectRow({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="view"
      data-cursor-label="View"
      className="group relative block border-t border-line py-14 md:py-20"
    >
      <div
        className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-7/12">
          <Reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-paper-dim">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                priority={project.index === "01"}
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
            </div>
          </Reveal>
        </div>

        <div className="md:w-5/12">
          <Reveal delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {project.index} — {project.category}
            </span>
            <h3 className="font-display mt-4 text-[13vw] leading-[0.9] tracking-tight text-paper transition-transform duration-500 md:text-[4.2vw] md:group-hover:translate-x-3">
              {project.title}
            </h3>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
              {project.description}
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-paper">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-paper transition-transform duration-500 group-hover:scale-150" />
              <span>View Project</span>
              <span className="text-muted">— {project.year}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </Link>
  );
}
