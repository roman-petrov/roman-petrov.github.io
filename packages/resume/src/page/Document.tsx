import type { PageAssets } from "../PageAssets";

import { Assets } from "../Assets";
import { Content } from "../Content";
import { Fonts } from "../Fonts";
import { Seo } from "../Seo";
import { Entries } from "./Entries";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { Progress } from "./Progress";
import { Prose } from "./Prose";

export type DocumentProps = PageAssets;

export const Document = ({ css, favicon, fonts, photo, script }: DocumentProps) => {
  const { description, image, jsonLd, title } = Seo;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content="cPn9f6v-ZFjBMI2x034f3MBqYl9IK-CZ56QrPZv9PmI" name="google-site-verification" />
        <meta content={Content.meta.name} name="author" />
        <link href={Content.meta.site} rel="canonical" />
        <link href={Content.meta.github} rel="me" />
        <link href={Content.linkedin} rel="me" />
        <link href={`${Content.meta.site}${Content.meta.pdf}`} rel="alternate" type="application/pdf" />
        <meta content="#dce2eb" media="(prefers-color-scheme: light)" name="theme-color" />
        <meta content="#172839" media="(prefers-color-scheme: dark)" name="theme-color" />
        <meta content="website" property="og:type" />
        <meta content={Content.meta.name} property="og:site_name" />
        <meta content="en_US" property="og:locale" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={Content.meta.site} property="og:url" />
        <meta content={image} property="og:image" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta content={title} property="og:image:alt" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={image} name="twitter:image" />
        <script dangerouslySetInnerHTML={{ __html: jsonLd }} type="application/ld+json" />
        {fonts.map(file => (
          <link as="font" crossOrigin="anonymous" href={Fonts.href(file)} key={file} rel="preload" type="font/woff2" />
        ))}
        <link href={Assets.href(favicon)} rel="icon" type="image/svg+xml" />
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>
        <Nav photo={Assets.href(photo)} />
        <Progress />
        <main>
          <Hero photo={Assets.href(photo)} />
          <Prose section={Content.section(`about`)} />
          <Prose section={Content.section(`showcase`)} />
          <Prose section={Content.section(`expertise`)} />
          <Prose section={Content.section(`stack`)} />
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
