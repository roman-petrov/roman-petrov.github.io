import { Meta, Sections } from "../../Content";
import styles from "./PrintDocument.module.scss";
import { PrintFacts } from "./PrintFacts";
import { PrintHero } from "./PrintHero";
import { PrintSection } from "./PrintSection";

/** Print sheet: the exact document that becomes the PDF. */
export const PrintDocument = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>{`${Meta.name} — ${Meta.role}`}</title>
      <link href="./assets/fonts.css" rel="stylesheet" />
      <link href="./assets/print.css" rel="stylesheet" />
    </head>
    <body>
      <article className={styles.page}>
        <PrintHero />
        <PrintFacts />
        <main>
          {Sections.map(section => (
            <PrintSection key={section.id} section={section} />
          ))}
        </main>
      </article>
    </body>
  </html>
);
