import type { z } from "zod";

import type { ResumeSchema } from "./ResumeSchema";

import Yaml from "../../../resume.yml";

export type Block =
  | { items: Project[]; type: `projects` }
  | { items: string[]; type: `list` }
  | { text: string; type: `label` | `lead` | `pull` | `text` };

export type Contact = { href?: string; icon: string; label: string; value: string };

export type Entry = { blocks: Block[]; date: string; link?: Link; title: string };

export type Fact = { chips?: string[]; icon: string; label: string; text?: string };

export type Heading = { icon: string; title: string };

export type Link = { href: string; label: string };

export type Project = { href?: string; name: string; note?: string; roles: string[]; stack: string[] };

export type Section = Heading & { blocks?: Block[]; entries?: Entry[]; id: string };

type Activity = Resume[`activities`][`items`][number];

type Job = Resume[`experience`][`jobs`][number];

type Resume = z.infer<typeof ResumeSchema>;

type Span = { from: number; to: number };

type Study = Resume[`education`][`studies`][number];

type Target = { label?: string; url: string };

const resume = Yaml as Resume;

const period = ({ from, to }: Span) => (to === from ? String(from) : `${String(from)} — ${String(to)}`);

const link = ({ label, url }: Target): Link => ({
  href: url,
  label: label ?? new URL(url).host.replace(/^www\./u, ``),
});

const bold = (text: string) => `**${text}**`;

const anchor = (to: Target) => `[${link(to).label}](${to.url})`;

const project = ({ link: tail, name, note, roles, stack, url }: Job[`projects`][number]): Project => ({
  href: url,
  name,
  note: note === undefined ? undefined : `${note}${tail === undefined ? `` : ` ${anchor(tail)}`}`,
  roles,
  stack,
});

const heading = ({ icon, title }: Heading): Heading => ({ icon, title });

const profileBlocks = ({ approach, motto, proficiency, wishes }: Resume[`profile`]): Block[] => [
  { text: motto, type: `pull` },
  { text: proficiency.lead, type: `lead` },
  { items: proficiency.areas.map(({ area, detail }) => `${bold(`${area}:`)} ${detail}`), type: `list` },
  { text: approach, type: `text` },
  { text: wishes.lead, type: `lead` },
  { items: wishes.items, type: `list` },
];

const jobEntry = (job: Job): Entry => ({
  blocks: [
    ...(job.summary === undefined ? [] : [{ text: job.summary, type: `text` } as const]),
    ...(job.duties === undefined
      ? []
      : [{ text: `Responsibilities`, type: `label` } as const, { items: job.duties, type: `list` } as const]),
    { text: `Projects`, type: `label` },
    { items: job.projects.map(project), type: `projects` },
  ],
  date: period(job),
  link: job.url === undefined ? undefined : link({ url: job.url }),
  title: `${job.role} at ${job.company}`,
});

const studyEntry = (study: Study): Entry => ({
  blocks: [],
  date: period(study),
  title: `${study.degree}, ${study.school}, ${study.place}`,
});

const activityEntry = ({ from, references, summary, title, to }: Activity): Entry => ({
  blocks: [
    { text: summary, type: `text` },
    ...(references === undefined
      ? []
      : [
          { text: references.label, type: `label` } as const,
          { items: references.links.map(({ note, ...ref }) => `${note} ${anchor(ref)}`), type: `list` } as const,
        ]),
  ],
  date: period({ from, to }),
  title,
});

const contacts: Contact[] = [
  { icon: `📍`, label: `Location`, value: resume.contacts.location },
  { href: `tel:${resume.contacts.phone}`, icon: `📞`, label: `Phone`, value: resume.contacts.phone },
  { href: `mailto:${resume.contacts.email}`, icon: `✉️`, label: `Email`, value: resume.contacts.email },
  { href: resume.meta.github, icon: `🔗`, label: `GitHub`, value: resume.contacts.github },
];

const facts: [Fact, ...Fact[]] = [
  { chips: resume.stack.skills, icon: resume.stack.icon, label: resume.stack.title },
  ...resume.stack.facts.map(({ icon, items, label }) => ({ icon, label, text: items.join(` · `) })),
];

const sections: Section[] = [
  { ...heading(resume.profile), blocks: profileBlocks(resume.profile), id: `profile` },
  { ...heading(resume.stack), id: `stack` },
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

const index = (id: string) => String(sections.findIndex(item => item.id === id) + 1).padStart(2, `0`);

export const Content = { contacts, facts, index, meta: resume.meta, section, sections };
