import { TechLinks } from "../TechLinks";
import { Chip } from "./Chip";

export type TechChipProps = { name: string };

export const TechChip = ({ name }: TechChipProps) => <Chip href={TechLinks.href(name)} label={name} />;
