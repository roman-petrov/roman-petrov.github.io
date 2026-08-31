import { Content } from "./Content";

const { email, knowsAbout, meta } = Content;
const { description, github, name, pdf, role, site } = meta;
const title = `${name} — ${role}`;
const image = `${site}assets/og.png`;
const personId = `${site}#person`;

const jsonLd = JSON.stringify({
  "@context": `https://schema.org`,
  "@graph": [
    {
      "@id": `${site}#profile`,
      "@type": `ProfilePage`,
      "about": { "@id": personId },
      description,
      "mainEntity": { "@id": personId },
      "name": title,
      "url": site,
    },
    {
      "@id": personId,
      "@type": `Person`,
      description,
      "email": `mailto:${email}`,
      image,
      "jobTitle": role,
      "knowsAbout": knowsAbout,
      name,
      "sameAs": [github],
      "url": site,
    },
  ],
});

const llms = [
  `# ${name}`,
  ``,
  `> ${description}`,
  ``,
  `- [CV](${site})`,
  `- [PDF](${site}${pdf})`,
  `- [GitHub](${github})`,
  ``,
  `## Skills`,
  ``,
  knowsAbout.join(`, `),
  ``,
].join(`\n`);

const sitemap = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  `  <url>`,
  `    <loc>${site}</loc>`,
  `    <changefreq>monthly</changefreq>`,
  `    <priority>1.0</priority>`,
  `  </url>`,
  `</urlset>`,
  ``,
].join(`\n`);

const robots = [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${site}sitemap.xml`, ``].join(`\n`);

export const Seo = { description, image, jsonLd, llms, robots, sitemap, title };
