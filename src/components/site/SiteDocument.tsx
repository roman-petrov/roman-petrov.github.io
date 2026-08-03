import { Meta, SectionById } from "../../Content";
import { Blocks } from "../index";
import { SiteFooter } from "./SiteFooter";
import { SiteHero } from "./SiteHero";
import { SiteNav } from "./SiteNav";
import { SiteBlockClasses } from "./SiteOrder";
import { SiteSection } from "./SiteSection";
import { SiteStack } from "./SiteStack";
import { SiteTimeline } from "./SiteTimeline";

const title = `${Meta.name} — ${Meta.role}`;

// Reveal animations only apply when scripting is available.
const enableMotion = `document.documentElement.classList.add("js");`;

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
      <a className={`skip`} href="#profile">
        Skip to content
      </a>
      <div aria-hidden="true" className={`progress`}>
        <span className={`progress-bar`} />
      </div>
      <SiteNav />
      <main>
        <SiteHero />
        <SiteSection icon={profile.icon} id={profile.id} title={profile.title}>
          <div className={`prose reveal glass`}>
            <Blocks blocks={profile.blocks ?? []} classes={SiteBlockClasses} />
          </div>
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
