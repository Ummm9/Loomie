import { Reveal } from "./Reveal";

export default function SectionTitle({
  eyebrow,
  title,
  align = "left",
  theme = "dark",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <Reveal>
        <p
          className={`font-mono text-xs uppercase tracking-[0.25em] ${
            theme === "dark" ? "text-muted" : "text-muted-on-paper"
          }`}
        >
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`font-display mt-3 text-[9vw] leading-[0.95] tracking-tight md:text-[4.5vw] ${
            theme === "dark" ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
