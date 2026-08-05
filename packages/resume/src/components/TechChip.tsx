import { TechLinks } from "../TechLinks";
import { Chip } from "./Chip";

export type TechChipProps = { cn?: string; name: string };

export const TechChip = ({ cn, name }: TechChipProps) => <Chip cn={cn} href={TechLinks.href(name)} label={name} />;
