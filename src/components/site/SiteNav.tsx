import { Meta } from "../../Content";
import { SitePdfLink } from "./SiteActions";
import { SiteOrder } from "./SiteOrder";

export const SiteNav = () => (
  <header className={`nav`}>
    <div className={`nav-inner`}>
      <a className={`brand`} href="#top">
        <span aria-hidden="true" className={`brand-mark`}>
          RP
        </span>
        <span className={`brand-name`}>{Meta.name}</span>
      </a>
      <nav aria-label="Sections" className={`nav-links`}>
        {SiteOrder.map(({ id, label }) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>
      <SitePdfLink />
    </div>
  </header>
);
