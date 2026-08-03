import { Meta } from "../../Content";
import { SiteGithubLink, SitePdfLink } from "./SiteActions";

export const SiteFooter = () => (
  <footer className={`footer`}>
    <div className={`footer-inner`}>
      <p className={`kicker`}>{`// built with HTML, CSS and Bun`}</p>
      <div className={`footer-actions`}>
        <SitePdfLink />
        <SiteGithubLink />
      </div>
      <p className={`footer-note`}>{`© ${String(new Date().getFullYear())} ${Meta.name}`}</p>
    </div>
  </footer>
);
