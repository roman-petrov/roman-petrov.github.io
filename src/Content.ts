export type Block = { items: string[]; type: `list` } | { text: string; type: `label` | `lead` | `pull` | `text` };

export type Contact = { href?: string; icon: string; label: string; value: string };

export type Entry = { blocks: Block[]; current?: boolean; date: string; link?: Link; title: string };

export type Fact = { chips?: string[]; icon: string; label: string; text?: string };

export type Link = { href: string; label: string };

export type Section = { blocks?: Block[]; entries?: Entry[]; icon: string; id: string; index: string; title: string };

const meta = {
  github: `https://github.com/roman-petrov`,
  name: `Roman Petrov`,
  pdf: `Roman_Petrov_CV.pdf`,
  photo: `photo.png`,
  role: `Software Developer`,
  siteUrl: `https://roman-petrov.github.io/`,
  tagline: `Front-end architect, team lead and developer. Flutter, TypeScript, clean code.`,
};

const stack = { icon: `🛠`, title: `Stack & interests` };

const contacts: Contact[] = [
  { icon: `📍`, label: `Location`, value: `Yoshkar-Ola, Russian Federation` },
  { href: `tel:+79061370326`, icon: `📞`, label: `Phone`, value: `+79061370326` },
  { href: `mailto:romanpetrov@list.ru`, icon: `✉️`, label: `Email`, value: `romanpetrov@list.ru` },
  { href: meta.github, icon: `🔗`, label: `GitHub`, value: `github.com/roman-petrov` },
];

const facts: Fact[] = [
  {
    chips: [
      `Programming`,
      `User experience`,
      `Git`,
      `Dart/Flutter`,
      `TypeScript/JavaScript`,
      `HTML / CSS`,
      `React`,
      `C#`,
      `C/C++`,
      `Markdown`,
    ],
    icon: stack.icon,
    label: `Skills`,
  },
  { icon: `🌍`, label: `Languages`, text: `English · Russian` },
  { icon: `🎸`, label: `Hobbies`, text: `Programming, Travel, Camping, Guitar` },
];

const sections: Section[] = [
  {
    blocks: [
      { text: `My favorite tool in software development is **Occam's razor**.`, type: `pull` },
      { text: `The areas of my proficiency are:`, type: `lead` },
      {
        items: [
          `**problem solving:** analysis, communication, decomposition, MVP`,
          `**programming:** modular, testable, readable, compact, efficient code`,
          `**code quality:** automated code analysis, linting, code review`,
          `**project workflow:** automation, simplification, documentation`,
          `**user experience:** simplicity, visual perfection, screenshot tests`,
          `**open source:** use, contribute, learn`,
        ],
        type: `list`,
      },
      {
        text:
          `I prefer functional programming to object oriented approach and my favorite code unit is ` +
          `**pure function**.`,
        type: `text`,
      },
      { text: `I would like to land a software developer position in a company that:`, type: `lead` },
      {
        items: [
          `cares about the code quality in projects`,
          `cares about the user experience quality in products`,
          `provides possibilities to grow as professional`,
        ],
        type: `list`,
      },
    ],
    icon: `👤`,
    id: `profile`,
    index: `01`,
    title: `Profile`,
  },
  {
    entries: [{ blocks: [], date: `1999 — 2004`, title: `Master, Volga State University of Technology, Yoshkar-Ola` }],
    icon: `🎓`,
    id: `education`,
    index: `02`,
    title: `Education`,
  },
  {
    entries: [
      {
        blocks: [
          {
            text:
              `I'm currently working for TravelLine company as a front-end architect, team lead and developer. ` +
              `My primary goal is to move company products from outdated and ineffective development stack to Flutter:`,
            type: `text`,
          },
          {
            items: [
              `make products cross-platform`,
              `improve user experience and user interface quality`,
              `design and develop Flutter ecosystem, tools, components, and workflow`,
            ],
            type: `list`,
          },
          { text: `Projects`, type: `label` },
          {
            items: [
              `**TLUI3.0 (NOW)** — TravelLine User Interface library and design system based on Flutter ` +
                `(architect, lead developer and team lead)`,
              `**TLF** — TravelLine Flutter tool to automate workflow for company Flutter projects (single developer)`,
              `**TLUI** — TravelLine User Interface library and design system (lead developer and team lead)`,
              `Payment module front-end for online booking engine (single developer)`,
            ],
            type: `list`,
          },
        ],
        current: true,
        date: `2013 — Present`,
        link: { href: `https://www.travelline.ru/`, label: `travelline.ru` },
        title: `Lead developer and team lead at TravelLine`,
      },
      {
        blocks: [
          { text: `Projects`, type: `label` },
          {
            items: [
              `Flash media player & charting library (developer)`,
              `[SilverX](https://web.archive.org/web/20120506055102/http://www.silverx.net/) — Flash to Silverlight ` +
                `converter (single developer, website developer)`,
              `[PowerMessage](https://web.archive.org/web/20171020002940/http://www.powermessagepro.com/) — ` +
                `PowerPoint add-on to build presentations from templates (single developer)`,
            ],
            type: `list`,
          },
        ],
        date: `2007 — 2013`,
        link: { href: `http://www.ispringsolutions.com/`, label: `ispringsolutions.com` },
        title: `Developer at iSpring`,
      },
      {
        blocks: [
          { text: `Projects`, type: `label` },
          {
            items: [
              `[JobWindow](https://www.cpslabs.net/project/jobwindow-2-3.html) — Job search system in Switzerland ` +
                `(developer)`,
              `[ActiveSWF](https://www.cpslabs.net/product/activeswf-3-5.html) — SWF file (Flash) generation library ` +
                `(single developer)`,
              `SlingPlayer — Streaming media player for [SlingMedia](https://en.wikipedia.org/wiki/Sling_Media) ` +
                `(lead developer and team lead)`,
            ],
            type: `list`,
          },
        ],
        date: `2003 — 2007`,
        link: { href: `https://www.cpslabs.net/`, label: `cpslabs.net` },
        title: `Lead developer and team lead at CPS Labs`,
      },
    ],
    icon: `💼`,
    id: `experience`,
    index: `03`,
    title: `Employment History`,
  },
  {
    entries: [
      {
        blocks: [
          {
            text:
              `I took part in the Beeline Big Data contest. It was my first experience in machine learning so it's ` +
              `been quite a challenge for me. I was ranked the 236 out of 832 participants.`,
            type: `text`,
          },
          { text: `References (in Russian)`, type: `label` },
          { items: [`Contest info and results at [beeline.ru](https://special.habrahabr.ru/beeline/)`], type: `list` },
        ],
        date: `2015`,
        title: `Machine learning contest`,
      },
      {
        blocks: [
          {
            text:
              `During my school years my favorite hobby was assembler programming on ZX-Spectrum. I'm the author of ` +
              `RIP (Real Information Packer) — LZW/Huffman data compression algorithm and application. This was a ` +
              `challenge and I managed to achieve one of the best compression ratios compared to other ZX-Spectrum ` +
              `data compression tools.`,
            type: `text`,
          },
          { text: `References (in Russian)`, type: `label` },
          {
            items: [
              `About me at [speccy.info](https://speccy.info/%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2)`,
              `RIP at [speccy.info](https://speccy.info/RIP_%28%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D1%89%D0%B8%D0%BA%29)`,
              `About RIP at [zxpress.ru](https://zxpress.ru/article.php?id=8510)`,
            ],
            type: `list`,
          },
        ],
        date: `1995 — 2000`,
        title: `ZX-Spectrum`,
      },
    ],
    icon: `🚀`,
    id: `activities`,
    index: `04`,
    title: `Challenging activities`,
  },
];

const section = (id: string) => {
  const found = sections.find(item => item.id === id);

  if (found === undefined) {
    throw new Error(`Unknown section: ${id}`);
  }

  return found;
};

export const Content = { contacts, facts, meta, section, sections, stack };
