import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-5 text-center">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">404</span>
      <h1 className="font-display mt-4 text-[16vw] leading-none tracking-tight text-paper md:text-[8vw]">
        Lost Ground.
      </h1>
      <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
        That page doesn&rsquo;t exist. Let&rsquo;s get you back to the work.
      </p>
      <Link
        href="/"
        data-cursor="link"
        className="mt-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-paper"
      >
        <span>Back to Home</span>
        <span className="h-px w-10 bg-paper" />
      </Link>
    </div>
  );
}
