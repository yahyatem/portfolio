type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400/90">
        {eyebrow}
      </p>
      <h2 className="mb-4 bg-gradient-to-r from-white via-violet-100 to-fuchsia-200/90 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
