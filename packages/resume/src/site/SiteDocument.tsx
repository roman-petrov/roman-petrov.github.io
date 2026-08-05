import { Content } from "../Content";
import { SiteEntries } from "./SiteEntries";
import { SiteFooter } from "./SiteFooter";
import { SiteHero } from "./SiteHero";
import { SiteNav } from "./SiteNav";
import { SiteProgress } from "./SiteProgress";
import { SiteProse } from "./SiteProse";
import { SiteSection } from "./SiteSection";
import { SiteStack } from "./SiteStack";

export const SiteDocument = () => {
  const title = `${Content.meta.name} — ${Content.meta.role}`;
  const profile = Content.section(`profile`);
  const showcase = Content.section(`showcase`);

  return (
    <html lang="en">
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
        <link href="./assets/favicon.svg" rel="icon" type="image/svg+xml" />
        <link href="./assets/fonts.css" rel="stylesheet" />
        <link href="./assets/site.css" rel="stylesheet" />
        <script defer src="./assets/site.js" />
      </head>
      <body>
        <SiteProgress />
        <SiteNav />
        <main>
          <SiteHero />
          <SiteSection icon={profile.icon} id={profile.id} title={profile.title}>
            <SiteProse blocks={profile.blocks ?? []} />
          </SiteSection>
          <SiteSection icon={showcase.icon} id={showcase.id} title={showcase.title}>
            <SiteProse blocks={showcase.blocks ?? []} />
          </SiteSection>
          <SiteStack />
          <SiteEntries section={Content.section(`experience`)} />
          <SiteEntries section={Content.section(`education`)} />
          <SiteEntries section={Content.section(`activities`)} />
        </main>
        <SiteFooter />
      </body>
    </html>
  );
};
