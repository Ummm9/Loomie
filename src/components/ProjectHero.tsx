import Image from "next/image";
import type { Project } from "@/lib/projects";
import { Reveal, RevealImage } from "./Reveal";

export default function ProjectHero({ project }: { project: Project }) {
  const light = project.theme === "light";
  return (
    <section
      className={`${light ? "theme-paper bg-paper text-ink" : "bg-ink text-paper"} px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40`}
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span
                className={`font-mono text-xs uppercase tracking-[0.2em] ${
                  light ? "text-muted-on-paper" : "text-muted"
                }`}
              >
                {project.index} — {project.category}
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="font-display mt-4 text-[15vw] leading-[0.88] tracking-tight md:text-[7.5vw]">
                {project.title}
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <dl className="grid grid-cols-2 gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-[0.15em] md:flex md:gap-12">
              <div>
                <dt className={light ? "text-muted-on-paper" : "text-muted"}>Client</dt>
                <dd className="mt-1">{project.client}</dd>
              </div>
              <div>
                <dt className={light ? "text-muted-on-paper" : "text-muted"}>Year</dt>
                <dd className="mt-1">{project.year}</dd>
              </div>
              <div>
                <dt className={light ? "text-muted-on-paper" : "text-muted"}>Role</dt>
                <dd className="mt-1">Full Identity</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-14">
          <p
            className={`max-w-2xl text-lg leading-relaxed md:text-2xl ${
              light ? "text-muted-on-paper" : "text-muted"
            }`}
          >
            {project.tagline}
          </p>
        </Reveal>
      </div>

      <RevealImage delay={0.1} className="relative mt-14 aspect-[16/9] w-full overflow-hidden md:mt-20">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </RevealImage>
    </section>
  );
}
