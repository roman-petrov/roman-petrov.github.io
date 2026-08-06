import type { PageAssets } from "../Page";

import { Content } from "../Content";
import { Fonts } from "../Fonts";
import { SiteEntries } from "./SiteEntries";
import { SiteFooter } from "./SiteFooter";
import { SiteGroups } from "./SiteGroups";
import { SiteHero } from "./SiteHero";
import { SiteNav } from "./SiteNav";
import { SiteProgress } from "./SiteProgress";
import { SiteProse } from "./SiteProse";
import { Timelines } from "./Timelines";

export type SiteDocumentProps = PageAssets;

export const SiteDocument = ({ css, script }: SiteDocumentProps) => {
  const title = `${Content.meta.name} — ${Content.meta.role}`;

  return (
    <html lang="en" style={{ timelineScope: Timelines.scope }}>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>{title}</title>
        <meta content={Content.meta.tagline} name="description" />
        <meta content="#eef1f7" media="(prefers-color-scheme: light)" name="theme-color" />
        <meta content="#080c16" media="(prefers-color-scheme: dark)" name="theme-color" />
        <meta content="website" property="og:type" />
        <meta content={title} property="og:title" />
        <meta content={Content.meta.tagline} property="og:description" />
        <meta content={Content.meta.site} property="og:url" />
        <meta content={`${Content.meta.site}assets/og.png`} property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
        {Fonts.files.map(file => (
          <link as="font" crossOrigin="anonymous" href={Fonts.href(file)} key={file} rel="preload" type="font/woff2" />
        ))}
        <link href="./assets/favicon.svg" rel="icon" type="image/svg+xml" />
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>
        <SiteProgress />
        <SiteNav />
        <main>
          <SiteHero />
          <SiteProse section={Content.section(`about`)} />
          <SiteProse section={Content.section(`showcase`)} />
          <SiteGroups section={Content.section(`expertise`)} />
          <SiteGroups section={Content.section(`stack`)} />
          <SiteEntries section={Content.section(`experience`)} />
          <SiteEntries section={Content.section(`education`)} />
          <SiteEntries section={Content.section(`activities`)} />
        </main>
        <SiteFooter />
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </body>
    </html>
  );
};
