import Image from "next/image";
import type { ProjectImage } from "@/lib/projects";
import { RevealImage } from "./Reveal";

export default function ProjectGallery({
  images,
  theme = "dark",
}: {
  images: ProjectImage[];
  theme?: "dark" | "light";
}) {
  const light = theme === "light";
  const rows: ProjectImage[][] = [];
  let i = 0;
  while (i < images.length) {
    if (images[i].wide) {
      rows.push([images[i]]);
      i += 1;
    } else {
      rows.push(images.slice(i, i + 2));
      i += 2;
    }
  }

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {rows.map((row, ri) => (
        <div
          key={ri}
          className={row.length === 2 ? "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6" : ""}
        >
          {row.map((img, ii) => (
            <RevealImage
              key={img.src + ii}
              delay={ii * 0.08}
              className={`relative overflow-hidden aspect-[16/9] ${
                light ? "bg-paper-dim" : "bg-ink"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={img.wide ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                className="object-cover"
              />
            </RevealImage>
          ))}
        </div>
      ))}
    </div>
  );
}
