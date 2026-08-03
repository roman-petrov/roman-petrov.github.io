import { Contacts, Meta } from "../../Content";
import { Ico } from "../index";
import { SiteGithubLink, SitePdfLink } from "./SiteActions";

const contactBody = (icon: string, value: string) => (
  <>
    <Ico>{icon}</Ico>
    <span>{value}</span>
  </>
);

export const SiteHero = () => (
  <section className={`hero`} id="top">
    <div aria-hidden="true" className={`hero-glow`} data-parallax />
    <div className={`hero-inner`}>
      <div className={`hero-text`}>
        <p className={`hero-kicker`}>
          <span className={`hero-slash`}>{`//`}</span>
          {` ${Meta.role}`}
          <span aria-hidden="true" className={`caret`} />
        </p>
        <h1 className={`hero-name`}>{Meta.name}</h1>
        <p className={`hero-tagline`}>{Meta.tagline}</p>
        <ul className={`hero-contacts`}>
          {Contacts.map(({ href, icon, label, value }) => (
            <li key={label}>
              {href === undefined ? (
                <span aria-label={label} className={`pill`}>
                  {contactBody(icon, value)}
                </span>
              ) : (
                <a aria-label={label} className={`pill`} href={href}>
                  {contactBody(icon, value)}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className={`hero-cta`}>
          <SitePdfLink cn={`btn-lg`} />
          <SiteGithubLink cn={`btn-lg`} />
        </div>
      </div>
      <figure className={`hero-photo`}>
        <img alt={Meta.name} height={320} src={`./assets/${Meta.photo}`} width={320} />
      </figure>
    </div>
    <a aria-label="Scroll to profile" className={`scroll-cue`} href="#profile">
      <span aria-hidden="true" />
    </a>
  </section>
);
