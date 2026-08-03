import type { Entry, Section } from "../../Content";

import { type BlockClasses, Blocks, Cn, Ico, Inline } from "../index";

export const PrintBlockClasses: BlockClasses = { label: `label`, lead: `lead-in`, list: `bullets`, pull: `pull` };

const PrintEntry = ({ blocks, current, date, link, title }: Entry) => (
  <article className={`entry`}>
    <div className={`entry-meta`}>
      <p className={Cn(`entry-date`, current === true ? `entry-date-now` : undefined)}>{date}</p>
      {link === undefined ? undefined : (
        <a className={`entry-link`} href={link.href}>
          {link.label}
        </a>
      )}
    </div>
    <div className={`entry-body`}>
      <h3 className={`entry-title`}>
        <Inline text={title} />
      </h3>
      <Blocks blocks={blocks} classes={PrintBlockClasses} />
    </div>
  </article>
);

export type PrintSectionProps = { section: Section };

export const PrintSection = ({ section }: PrintSectionProps) => (
  <section className={`card block`}>
    <header className={`block-head`}>
      <span aria-hidden="true" className={`block-index`}>
        {section.index}
      </span>
      <h2 className={`block-title`}>
        <Ico>{section.icon}</Ico>
        {` ${section.title}`}
      </h2>
    </header>
    <div className={Cn(`block-body`, section.entries === undefined ? undefined : `timeline`)}>
      {section.entries === undefined ? (
        <Blocks blocks={section.blocks ?? []} classes={PrintBlockClasses} />
      ) : (
        section.entries.map(entry => <PrintEntry {...entry} key={entry.title} />)
      )}
    </div>
  </section>
);
