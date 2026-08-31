import { z } from "zod";

const titled = { icon: z.string(), title: z.string() };

const grouped = {
  ...titled,
  groups: z.array(z.strictObject({ icon: z.string(), items: z.array(z.string()), label: z.string() })),
};

const year = z.int();
const span = { from: year, to: z.union([year, z.literal(`current`)]) };

export const ResumeSchema = z.strictObject({
  about: z.strictObject({ ...titled, items: z.array(z.string()) }),
  activities: z.strictObject({
    ...titled,
    items: z.array(
      z.strictObject({
        ...span,
        references: z.strictObject({ items: z.array(z.string()), label: z.string() }).optional(),
        summary: z.string(),
        title: z.string(),
      }),
    ),
  }),
  contacts: z.strictObject({ email: z.string(), github: z.string(), location: z.string(), phone: z.string() }),
  education: z.strictObject({
    ...titled,
    studies: z.array(
      z.strictObject({
        ...span,
        degree: z.string(),
        place: z.string(),
        roles: z.array(z.string()),
        school: z.string(),
      }),
    ),
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
            name: z.string(),
            note: z.string().optional(),
            roles: z.array(z.string()),
            stack: z.array(z.string()),
            url: z.url().optional(),
          }),
        ),
        roles: z.array(z.string()),
        summary: z.string().optional(),
        url: z.url().optional(),
      }),
    ),
  }),
  expertise: z.strictObject(grouped),
  meta: z.strictObject({
    description: z.string(),
    github: z.url(),
    name: z.string(),
    pdf: z.string(),
    photo: z.string(),
    role: z.string(),
    site: z.url(),
    tagline: z.string(),
  }),
  showcase: z.strictObject({
    ...titled,
    name: z.string(),
    repo: z.url(),
    stack: z.array(z.string()),
    summary: z.string(),
    url: z.url(),
  }),
  stack: z.strictObject(grouped),
});
