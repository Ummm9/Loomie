import { notFound } from "next/navigation";
import Image from "next/image";
import { projects, getProject, getAdjacentProject } from "@/lib/projects";
import ProjectHero from "@/components/ProjectHero";
import ProjectMeta from "@/components/ProjectMeta";
import ProjectGallery from "@/components/ProjectGallery";
import NextProject from "@/components/NextProject";
import { Reveal, RevealImage } from "@/components/Reveal";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Loomie`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const light = project.theme === "light";
  const next = getAdjacentProject(slug);

  return (
    <article>
      <ProjectHero project={project} />
      <ProjectMeta project={project} />

      <section className={`${light ? "theme-paper bg-paper text-ink" : "bg-ink text-paper"} px-5 pb-20 md:px-10 md:pb-28`}>
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className={`font-mono text-xs uppercase tracking-[0.25em] ${light ? "text-muted-on-paper" : "text-muted"}`}>
              Highlights
            </p>
          </Reveal>
          <Reveal delay={0.06} className="mb-10 mt-3 md:mb-14">
            <h2 className="font-display text-[9vw] leading-[0.95] tracking-tight md:text-[3.6vw]">
              The Work.
            </h2>
          </Reveal>
          <ProjectGallery images={project.highlights} theme={project.theme} />
        </div>
      </section>

      {project.process && (
        <section className={`${light ? "theme-paper bg-paper-dim text-ink" : "bg-ink text-paper"} border-t ${light ? "border-line-paper" : "border-line"} px-5 py-20 md:px-10 md:py-28`}>
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <div>
                <Reveal>
                  <p className={`font-mono text-xs uppercase tracking-[0.25em] ${light ? "text-muted-on-paper" : "text-muted"}`}>
                    Process
                  </p>
                </Reveal>
                <Reveal delay={0.06}>
                  <h2 className="font-display mt-3 text-[8vw] leading-[0.98] tracking-tight md:text-[2.8vw]">
                    {project.process.heading}
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className={`mt-6 max-w-md text-base leading-relaxed ${light ? "text-muted-on-paper" : "text-muted"}`}>
                    {project.process.body}
                  </p>
                </Reveal>
              </div>
              <div className="flex flex-col gap-6">
                {project.process.images?.map((img) => (
                  <RevealImage
                    key={img.src}
                    className={`relative aspect-[16/9] w-full overflow-hidden ${light ? "bg-paper" : "bg-ink"}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 768px) 60vw, 100vw"
                      className="object-cover"
                    />
                  </RevealImage>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={`${light ? "theme-paper bg-paper text-ink" : "bg-ink text-paper"} border-t ${light ? "border-line-paper" : "border-line"} px-5 py-20 md:px-10 md:py-28`}>
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className={`font-mono text-xs uppercase tracking-[0.25em] ${light ? "text-muted-on-paper" : "text-muted"}`}>
              Visual System
            </p>
          </Reveal>
          <Reveal delay={0.06} className="mb-10 mt-3 max-w-2xl md:mb-16">
            <h2 className="font-display text-[8vw] leading-[0.98] tracking-tight md:text-[3vw]">
              {project.visualSystem.heading}
            </h2>
            <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? "text-muted-on-paper" : "text-muted"}`}>
              {project.visualSystem.body}
            </p>
          </Reveal>

          <div className="flex flex-col gap-6">
            {project.visualSystem.logo && (
              <RevealImage className={`relative aspect-[16/9] w-full overflow-hidden ${light ? "bg-paper-dim" : "bg-ink"}`}>
                <Image
                  src={project.visualSystem.logo.src}
                  alt={project.visualSystem.logo.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </RevealImage>
            )}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {project.visualSystem.typography && (
                <RevealImage className={`relative aspect-[16/9] w-full overflow-hidden ${light ? "bg-paper-dim" : "bg-ink"}`}>
                  <Image
                    src={project.visualSystem.typography.src}
                    alt={project.visualSystem.typography.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </RevealImage>
              )}
              {project.visualSystem.colour && (
                <RevealImage
                  delay={0.08}
                  className={`relative aspect-[16/9] w-full overflow-hidden ${light ? "bg-paper-dim" : "bg-ink"}`}
                >
                  <Image
                    src={project.visualSystem.colour.src}
                    alt={project.visualSystem.colour.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </RevealImage>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={`${light ? "theme-paper bg-paper-dim text-ink" : "bg-ink text-paper"} border-t ${light ? "border-line-paper" : "border-line"} px-5 py-20 md:px-10 md:py-28`}>
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className={`font-mono text-xs uppercase tracking-[0.25em] ${light ? "text-muted-on-paper" : "text-muted"}`}>
              Final Work
            </p>
          </Reveal>
          <div className="mt-10 md:mt-14">
            <ProjectGallery images={project.finalWork} theme={project.theme} />
          </div>
        </div>
      </section>

      <section className={`${light ? "theme-paper bg-paper text-ink" : "bg-ink text-paper"} border-t ${light ? "border-line-paper" : "border-line"} px-5 py-20 md:px-10 md:py-28`}>
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className={`font-mono text-xs uppercase tracking-[0.25em] ${light ? "text-muted-on-paper" : "text-muted"}`}>
              Takeaway
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mt-6 max-w-3xl">
            <p className="font-display text-[7vw] leading-[1.1] tracking-tight md:text-[2.6vw]">
              {project.takeaway}
            </p>
          </Reveal>
        </div>
      </section>

      <NextProject project={next} />
    </article>
  );
}
