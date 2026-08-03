import { Meta, SectionById } from "../../Content";
import styles from "./SiteDocument.module.scss";
import { SiteFooter } from "./SiteFooter";
import { SiteHero } from "./SiteHero";
import motion from "./SiteMotion.module.scss";
import { SiteNav } from "./SiteNav";
import { SiteProse } from "./SiteProse";
import { SiteSection } from "./SiteSection";
import { SiteStack } from "./SiteStack";
import { SiteTimeline } from "./SiteTimeline";

const title = `${Meta.name} — ${Meta.role}`;

// Reveal animations only apply when scripting is available.
const enableMotion = `document.documentElement.classList.add("${motion.js}");`;

const profile = SectionById(`profile`);

/** Single-page site: dark theme, scroll reveals, PDF download. */
export const SiteDocument = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>{title}</title>
      <meta content={Meta.tagline} name="description" />
      <meta content="#0b1020" name="theme-color" />
      <meta content="website" property="og:type" />
      <meta content={title} property="og:title" />
      <meta content={Meta.tagline} property="og:description" />
      <meta content={Meta.siteUrl} property="og:url" />
      <meta content={`${Meta.siteUrl}assets/og.png`} property="og:image" />
      <meta content="summary_large_image" name="twitter:card" />
      <link href="./assets/favicon.svg" rel="icon" type="image/svg+xml" />
      <link href="./assets/fonts.css" rel="stylesheet" />
      <link href="./assets/site.css" rel="stylesheet" />
      <script dangerouslySetInnerHTML={{ __html: enableMotion }} />
      <script defer src="./assets/site.js" />
    </head>
    <body>
      <a className={styles.skip} href="#profile">
        Skip to content
      </a>
      <div aria-hidden="true" className={styles.progress}>
        <span className={styles.bar} />
      </div>
      <SiteNav />
      <main>
        <SiteHero />
        <SiteSection icon={profile.icon} id={profile.id} title={profile.title}>
          <SiteProse blocks={profile.blocks ?? []} />
        </SiteSection>
        <SiteStack />
        <SiteTimeline section={SectionById(`experience`)} />
        <SiteTimeline section={SectionById(`education`)} />
        <SiteTimeline section={SectionById(`activities`)} />
      </main>
      <SiteFooter />
    </body>
  </html>
);
