import { Contacts, Facts, Meta, Sections } from "../../Content";
import { Ico, Inline } from "../index";
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
      <article className={`page`}>
        <header className={`hero`}>
          <div className={`hero-id`}>
            <img alt={Meta.name} className={`photo`} height={160} src={`./assets/${Meta.photo}`} width={160} />
            <div className={`hero-name`}>
              <h1 className={`name`}>{Meta.name}</h1>
              <p className={`role`}>{Meta.role}</p>
            </div>
          </div>
          <ul className={`contacts`}>
            {Contacts.map(({ href, icon, label, value }) => (
              <li key={label}>
                <Ico>{icon}</Ico>
                <span className={`contact-label`}>{label}</span>
                {href === undefined ? (
                  <span className={`contact-value`}>{value}</span>
                ) : (
                  <a className={`contact-value`} href={href}>
                    {value}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </header>

        <section aria-label="Skills, languages and hobbies" className={`card facts`}>
          {Facts.map(({ chips, icon, label, text }) => (
            <div className={`facts-row`} key={label}>
              <h2 className={`facts-label`}>
                <Ico>{icon}</Ico>
                {` ${label}`}
              </h2>
              {chips === undefined ? (
                <p className={`facts-text`}>
                  <Inline text={text ?? ``} />
                </p>
              ) : (
                <ul className={`chips`}>
                  {chips.map(chip => (
                    <li className={`chip`} key={chip}>
                      {chip}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <main>
          {Sections.map(section => (
            <PrintSection key={section.id} section={section} />
          ))}
        </main>
      </article>
    </body>
  </html>
);
