import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Reveal } from "./Reveal";

export default function NextProject({ project }: { project: Project }) {
  return (
    <section className="border-t border-line bg-ink px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Next Project
          </p>
        </Reveal>
        <Link
          href={`/work/${project.slug}`}
          data-cursor="view"
          data-cursor-label="View"
          className="group mt-8 flex flex-col gap-8 md:flex-row md:items-center md:gap-16"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden md:w-1/2">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
            />
          </div>
          <div className="md:w-1/2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {project.index} — {project.category}
            </span>
            <h3 className="font-display mt-4 text-[14vw] leading-[0.9] tracking-tight text-paper transition-transform duration-500 md:text-[5.5vw] md:group-hover:translate-x-4">
              {project.title}
            </h3>
            <span className="mt-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-paper">
              View Project
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
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
