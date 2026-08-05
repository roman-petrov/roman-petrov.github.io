export type ChipProps = { cn?: string; href?: string; label: string };

export const Chip = ({ cn, href, label }: ChipProps) =>
  href === undefined ? (
    <span className={cn}>{label}</span>
  ) : (
    <a className={cn} href={href}>
      {label}
    </a>
  );
