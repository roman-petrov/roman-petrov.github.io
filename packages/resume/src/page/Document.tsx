import type { PageAssets } from "../PageAssets";

import { Content } from "../Content";
import { Fonts } from "../Fonts";
import { Entries } from "./Entries";
import { Footer } from "./Footer";
import { Groups } from "./Groups";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { Progress } from "./Progress";
import { Prose } from "./Prose";
import { Timelines } from "./Timelines";

export type DocumentProps = PageAssets;

export const Document = ({ css, script }: DocumentProps) => {
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
        <Progress />
        <Nav />
        <main>
          <Hero />
          <Prose section={Content.section(`about`)} />
          <Prose section={Content.section(`showcase`)} />
          <Groups section={Content.section(`expertise`)} />
          <Groups section={Content.section(`stack`)} />
          <Entries section={Content.section(`experience`)} />
          <Entries section={Content.section(`education`)} />
          <Entries section={Content.section(`activities`)} />
        </main>
        <Footer />
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </body>
    </html>
  );
};
