import { z } from "zod";

const titled = { icon: z.string(), nav: z.string(), title: z.string() };

const span = { from: z.int(), to: z.int() };

const target = { label: z.string().optional(), url: z.url() };

export const ResumeSchema = z.strictObject({
  activities: z.strictObject({
    ...titled,
    items: z.array(
      z.strictObject({
        ...span,
        references: z
          .strictObject({ label: z.string(), links: z.array(z.strictObject({ ...target, note: z.string() })) })
          .optional(),
        summary: z.string(),
        title: z.string(),
      }),
    ),
  }),
  contacts: z.strictObject({ email: z.string(), github: z.string(), location: z.string(), phone: z.string() }),
  education: z.strictObject({
    ...titled,
    studies: z.array(z.strictObject({ ...span, degree: z.string(), place: z.string(), school: z.string() })),
  }),
  experience: z.strictObject({
    ...titled,
    jobs: z.array(
      z.strictObject({
        ...span,
        company: z.string(),
        duties: z.array(z.string()).optional(),
        projects: z.array(
          z.strictObject({
            link: z.strictObject(target).optional(),
            name: z.string(),
            note: z.string().optional(),
            roles: z.array(z.string()),
            stack: z.array(z.string()),
            url: z.url().optional(),
          }),
        ),
        role: z.string(),
        summary: z.string().optional(),
        url: z.url().optional(),
      }),
    ),
  }),
  meta: z.strictObject({
    github: z.url(),
    name: z.string(),
    pdf: z.string(),
    photo: z.string(),
    role: z.string(),
    site: z.url(),
    tagline: z.string(),
  }),
  profile: z.strictObject({
    ...titled,
    approach: z.string(),
    motto: z.string(),
    proficiency: z.strictObject({
      areas: z.array(z.strictObject({ area: z.string(), detail: z.string() })),
      lead: z.string(),
    }),
    wishes: z.strictObject({ items: z.array(z.string()), lead: z.string() }),
  }),
  stack: z.strictObject({
    ...titled,
    facts: z.array(z.strictObject({ icon: z.string(), items: z.array(z.string()), label: z.string() })),
    skills: z.array(z.string()),
  }),
});
