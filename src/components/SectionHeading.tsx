interface Props {
  index: string;
  label: string;
  title: string;
  description?: string;
}

/** Consistent section header: mono index label + display title. */
export function SectionHeading({ index, label, title, description }: Props) {
  return (
    <div className="reveal mb-10">
      <div className="font-mono text-[11px] tracking-[0.2em] text-signal">
        {index} / {label.toUpperCase()}
      </div>
      <h2 className="mt-4 max-w-[26ch] font-display text-3xl font-medium leading-tight tracking-tight text-fg text-balance lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-mut text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
