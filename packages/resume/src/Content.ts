import type { z } from "zod";

import type { ResumeSchema } from "./ResumeSchema";

import Yaml from "../../../resume.yml";

export type Block =
  | { item: Product; type: `showcase` }
  | { items: Fact[]; type: `facts` }
  | { items: Project[]; type: `projects` }
  | { items: string[]; type: `list` }
  | { text: string; type: `label` | `text` };

export type Contact = { href?: string; icon: string; label: string; value: string };

export type Entry = { blocks: Block[]; date: string; href?: string; roles?: string[]; title: string };

export type Fact = { chips: string[]; label: string; tech?: boolean };

export type Product = { links: ProductLink[]; name: string; note: string[]; stack: string[] };

export type Project = { href?: string; name: string; note: string[]; roles: string[]; stack: string[] };

export type Section = Heading & { blocks?: Block[]; entries?: Entry[]; id: string };

type Activity = Resume[`activities`][`items`][number];

type Heading = { icon: string; title: string };

type Job = Resume[`experience`][`jobs`][number];

type Link = { href: string; label: string };

type ProductLink = Link & { icon: string };

type Resume = z.infer<typeof ResumeSchema>;

type Span = { from: number; to: `current` | number };

type Study = Resume[`education`][`studies`][number];

const resume = Yaml as Resume;

const period = ({ from, to }: Span) =>
  to === from ? String(from) : `${String(from)} — ${to === `current` ? `present` : String(to)}`;

const paragraphs = (text: string) => text.split(`\n`);

const textBlocks = (text: string): Block[] => paragraphs(text).map(item => ({ text: item, type: `text` }));

const project = ({ name, note, roles, stack, url }: Job[`projects`][number]): Project => ({
  href: url,
  name,
  note: note === undefined ? [] : paragraphs(note),
  roles,
  stack,
});

const product = ({ name, repo, stack, summary, url }: Resume[`showcase`]): Product => ({
  links: [
    { href: url, icon: `🌐`, label: `See it live` },
    { href: repo, icon: `🔗`, label: `View the code` },
  ],
  name,
  note: paragraphs(summary),
  stack,
});

const heading = ({ icon, title }: Heading): Heading => ({ icon, title });

const factBlock = (groups: Resume[`expertise`][`groups`], tech = false): Block => ({
  items: groups.map(({ icon, items, label }) => ({ chips: items, label: `${icon}\u2009${label}`, tech })),
  type: `facts`,
});

const jobEntry = (job: Job): Entry => ({
  blocks: [
    ...(job.summary === undefined ? [] : textBlocks(job.summary)),
    ...(job.duties === undefined
      ? []
      : [{ text: `Responsibilities`, type: `label` } as const, { items: job.duties, type: `list` } as const]),
    { text: `Projects`, type: `label` },
    { items: job.projects.map(project), type: `projects` },
  ],
  date: period(job),
  href: job.url,
  roles: job.roles,
  title: job.company,
});

const studyEntry = ({ degree, from, place, roles, school, to }: Study): Entry => ({
  blocks: [],
  date: period({ from, to }),
  roles,
  title: `${degree}, ${school}, ${place}`,
});

const activityEntry = ({ from, references, summary, title, to }: Activity): Entry => ({
  blocks: [
    ...textBlocks(summary),
    ...(references === undefined
      ? []
      : [{ text: references.label, type: `label` } as const, { items: references.items, type: `list` } as const]),
  ],
  date: period({ from, to }),
  title,
});

const contacts: Contact[] = [
  { icon: `📍`, label: `Location`, value: resume.contacts.location },
  { href: `tel:${resume.contacts.phone}`, icon: `📞`, label: `Phone`, value: resume.contacts.phone },
  { href: `https://wa.me/${resume.contacts.phone.replace(`+`, ``)}`, icon: `💬`, label: `WhatsApp`, value: `WhatsApp` },
  { href: `mailto:${resume.contacts.email}`, icon: `✉️`, label: `Email`, value: resume.contacts.email },
  { href: resume.meta.github, icon: `🔗`, label: `GitHub`, value: resume.contacts.github },
];

const sections: Section[] = [
  { ...heading(resume.about), blocks: [{ items: resume.about.items, type: `list` }], id: `about` },
  { ...heading(resume.showcase), blocks: [{ item: product(resume.showcase), type: `showcase` }], id: `showcase` },
  { ...heading(resume.expertise), blocks: [factBlock(resume.expertise.groups)], id: `expertise` },
  { ...heading(resume.stack), blocks: [factBlock(resume.stack.groups, true)], id: `stack` },
  { ...heading(resume.experience), entries: resume.experience.jobs.map(jobEntry), id: `experience` },
  { ...heading(resume.education), entries: resume.education.studies.map(studyEntry), id: `education` },
  { ...heading(resume.activities), entries: resume.activities.items.map(activityEntry), id: `activities` },
];

const section = (id: string) => {
  const found = sections.find(item => item.id === id);

  if (found === undefined) {
    throw new Error(`Unknown section: ${id}`);
  }

  return found;
};

const meta = resume.meta;

const { email } = resume.contacts;

const knowsAbout = [
  ...new Set([
    `AI agent development`,
    ...resume.stack.groups.flatMap(({ items }) => items),
    ...resume.expertise.groups
      .filter(({ label }) => label === `AI` || label === `Architecture`)
      .flatMap(({ items }) => items),
  ]),
];

export const Content = { contacts, email, knowsAbout, meta, section, sections };
