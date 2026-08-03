import type { ReactNode } from "react";

import { Ico } from "../index";
import { SiteIndex } from "./SiteOrder";

export type SiteSectionProps = { children: ReactNode; icon: string; id: string; title: string };

export const SiteSection = ({ children, icon, id, title }: SiteSectionProps) => (
  <section className={`section`} id={id}>
    <header className={`section-head reveal`}>
      <span aria-hidden="true" className={`section-index`}>
        {SiteIndex(id)}
      </span>
      <h2 className={`section-title`}>
        <Ico>{icon}</Ico>
        {` ${title}`}
      </h2>
      <span aria-hidden="true" className={`section-rule`} />
    </header>
    {children}
  </section>
);
