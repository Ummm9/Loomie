export default function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line py-6">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={i}
            className="font-display flex items-center gap-10 text-3xl tracking-tight text-paper md:text-5xl"
          >
            {item}
            <span className="text-muted">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
