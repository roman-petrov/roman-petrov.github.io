/**
 * Single source of truth for every output: the site, the print sheet (PDF) and resume.md.
 *
 * Text fields accept a minimal markdown subset: `**bold**` and `[label](href)`.
 * Parentheses inside URLs must be percent-encoded (%28 / %29).
 */

export const meta = {
  name: "Roman Petrov",
  role: "Software Developer",
  tagline: "Front-end architect, team lead and developer. Flutter, TypeScript, clean code.",
  photo: "photo.png",
  pdf: "Roman_Petrov_CV.pdf",
  github: "https://github.com/roman-petrov",
  siteUrl: "https://roman-petrov.github.io/resume/",
};

export const contacts = [
  { icon: "📍", label: "Location", value: "Yoshkar-Ola, Russian Federation" },
  { icon: "📞", label: "Phone", value: "+79061370326", href: "tel:+79061370326" },
  { icon: "✉️", label: "Email", value: "romanpetrov@list.ru", href: "mailto:romanpetrov@list.ru" },
  { icon: "🔗", label: "GitHub", value: "github.com/roman-petrov", href: meta.github },
];

export const facts = [
  {
    icon: "🛠",
    label: "Skills",
    chips: [
      "Programming",
      "User experience",
      "Git",
      "Dart/Flutter",
      "TypeScript/JavaScript",
      "HTML / CSS",
      "React",
      "C#",
      "C/C++",
      "Markdown",
    ],
  },
  { icon: "🌍", label: "Languages", text: "English · Russian" },
  { icon: "🎸", label: "Hobbies", text: "Programming, Travel, Camping, Guitar" },
];

export const sections = [
  {
    id: "profile",
    index: "01",
    icon: "👤",
    title: "Profile",
    blocks: [
      { type: "pull", text: "My favorite tool in software development is **Occam's razor**." },
      { type: "lead", text: "The areas of my proficiency are:" },
      {
        type: "list",
        items: [
          "**problem solving:** analysis, communication, decomposition, MVP",
          "**programming:** modular, testable, readable, compact, efficient code",
          "**code quality:** automated code analysis, linting, code review",
          "**project workflow:** automation, simplification, documentation",
          "**user experience:** simplicity, visual perfection, screenshot tests",
          "**open source:** use, contribute, learn",
        ],
      },
      {
        type: "text",
        text:
          "I prefer functional programming to object oriented approach and my favorite code unit is " +
          "**pure function**.",
      },
      { type: "lead", text: "I would like to land a software developer position in a company that:" },
      {
        type: "list",
        items: [
          "cares about the code quality in projects",
          "cares about the user experience quality in products",
          "provides possibilities to grow as professional",
        ],
      },
    ],
  },
  {
    id: "education",
    index: "02",
    icon: "🎓",
    title: "Education",
    entries: [
      {
        date: "1999 — 2004",
        title: "Master, Volga State University of Technology, Yoshkar-Ola",
        blocks: [],
      },
    ],
  },
  {
    id: "experience",
    index: "03",
    icon: "💼",
    title: "Employment History",
    entries: [
      {
        date: "2013 — Present",
        current: true,
        link: { label: "travelline.ru", href: "https://www.travelline.ru/" },
        title: "Lead developer and team lead at TravelLine",
        blocks: [
          {
            type: "text",
            text:
              "I'm currently working for TravelLine company as a front-end architect, team lead and developer. " +
              "My primary goal is to move company products from outdated and ineffective development stack to Flutter:",
          },
          {
            type: "list",
            items: [
              "make products cross-platform",
              "improve user experience and user interface quality",
              "design and develop Flutter ecosystem, tools, components, and workflow",
            ],
          },
          { type: "label", text: "Projects" },
          {
            type: "list",
            items: [
              "**TLUI3.0 (NOW)** — TravelLine User Interface library and design system based on Flutter " +
                "(architect, lead developer and team lead)",
              "**TLF** — TravelLine Flutter tool to automate workflow for company Flutter projects (single developer)",
              "**TLUI** — TravelLine User Interface library and design system (lead developer and team lead)",
              "Payment module front-end for online booking engine (single developer)",
            ],
          },
        ],
      },
      {
        date: "2007 — 2013",
        link: { label: "ispringsolutions.com", href: "http://www.ispringsolutions.com/" },
        title: "Developer at iSpring",
        blocks: [
          { type: "label", text: "Projects" },
          {
            type: "list",
            items: [
              "Flash media player & charting library (developer)",
              "[SilverX](https://web.archive.org/web/20120506055102/http://www.silverx.net/) — Flash to Silverlight " +
                "converter (single developer, website developer)",
              "[PowerMessage](https://web.archive.org/web/20171020002940/http://www.powermessagepro.com/) — " +
                "PowerPoint add-on to build presentations from templates (single developer)",
            ],
          },
        ],
      },
      {
        date: "2003 — 2007",
        link: { label: "cpslabs.net", href: "https://www.cpslabs.net/" },
        title: "Lead developer and team lead at CPS Labs",
        blocks: [
          { type: "label", text: "Projects" },
          {
            type: "list",
            items: [
              "[JobWindow](https://www.cpslabs.net/project/jobwindow-2-3.html) — Job search system in Switzerland " +
                "(developer)",
              "[ActiveSWF](https://www.cpslabs.net/product/activeswf-3-5.html) — SWF file (Flash) generation library " +
                "(single developer)",
              "SlingPlayer — Streaming media player for [SlingMedia](https://en.wikipedia.org/wiki/Sling_Media) " +
                "(lead developer and team lead)",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "activities",
    index: "04",
    icon: "🚀",
    title: "Challenging activities",
    entries: [
      {
        date: "2015",
        title: "Machine learning contest",
        blocks: [
          {
            type: "text",
            text:
              "I took part in the Beeline Big Data contest. It was my first experience in machine learning so it's " +
              "been quite a challenge for me. I was ranked the 236 out of 832 participants.",
          },
          { type: "label", text: "References (in Russian)" },
          {
            type: "list",
            items: ["Contest info and results at [beeline.ru](https://special.habrahabr.ru/beeline/)"],
          },
        ],
      },
      {
        date: "1995 — 2000",
        title: "ZX-Spectrum",
        blocks: [
          {
            type: "text",
            text:
              "During my school years my favorite hobby was assembler programming on ZX-Spectrum. I'm the author of " +
              "RIP (Real Information Packer) — LZW/Huffman data compression algorithm and application. This was a " +
              "challenge and I managed to achieve one of the best compression ratios compared to other ZX-Spectrum " +
              "data compression tools.",
          },
          { type: "label", text: "References (in Russian)" },
          {
            type: "list",
            items: [
              "About me at [speccy.info](https://speccy.info/%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2)",
              "RIP at [speccy.info](https://speccy.info/RIP_%28%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D1%89%D0%B8%D0%BA%29)",
              "About RIP at [zxpress.ru](https://zxpress.ru/article.php?id=8510)",
            ],
          },
        ],
      },
    ],
  },
];
