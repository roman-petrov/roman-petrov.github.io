import { Content } from "../Content";

const name = (id: string) => `--section-${id}`;

const scope = Content.sections.map(({ id }) => name(id)).join(`, `);

export const Timelines = { name, scope };
