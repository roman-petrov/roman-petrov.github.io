import type { PageAssets } from "../Page";

import { Content } from "../Content";
import styles from "./PrintDocument.module.scss";
import { PrintHero } from "./PrintHero";
import { PrintSection } from "./PrintSection";

export type PrintDocumentProps = Pick<PageAssets, `css`>;

export const PrintDocument = ({ css }: PrintDocumentProps) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>{`${Content.meta.name} — ${Content.meta.role}`}</title>
      <style dangerouslySetInnerHTML={{ __html: css }} />
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
