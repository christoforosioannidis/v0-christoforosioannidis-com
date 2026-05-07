export function SectionLabel({
  index,
  label,
}: {
  index: string
  label: string
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-sans text-[10px] tabular-nums tracking-[0.32em] text-primary">
        {index}
      </span>
      <span className="hairline w-12" />
      <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}
