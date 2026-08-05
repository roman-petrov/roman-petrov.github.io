import { Content } from "../Content";
import styles from "./PrintDocument.module.scss";
import { PrintHero } from "./PrintHero";
import { PrintSection } from "./PrintSection";

export const PrintDocument = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>{`${Content.meta.name} — ${Content.meta.role}`}</title>
      <link href="./assets/fonts.css" rel="stylesheet" />
      <link href="./assets/print.css" rel="stylesheet" />
    </head>
    <body>
      <article className={styles.page}>
        <PrintHero />
        <main>
          {Content.sections.map(section => (
            <PrintSection key={section.id} section={section} />
          ))}
        </main>
      </article>
    </body>
  </html>
);
