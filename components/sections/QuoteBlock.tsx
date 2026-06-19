type QuoteBlockProps = {
  quote: string;
  name: string;
  title: string;
  signals?: string[];
};

export function QuoteBlock({ quote, name, title, signals = [] }: QuoteBlockProps) {
  return (
    <figure className="grid min-h-[34rem] gap-card rounded-[2rem] bg-editorial-mist p-card md:p-hero">
      <span className="flex h-16 items-center text-2 font-bold leading-none" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="max-w-3xl text-5">{quote}</blockquote>
      {signals.length ? (
        <ul className="mt-content grid gap-micro text-7 font-medium">
          {signals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      ) : null}
      <figcaption className="self-end text-right">
        <p className="text-5 font-extrabold">{name}</p>
        <p className="mt-1 text-5">{title}</p>
      </figcaption>
    </figure>
  );
}
