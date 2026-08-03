import { Facts } from "../../Content";
import { Ico, Inline, Stagger } from "../index";
import { SiteSection } from "./SiteSection";

/** Skills, languages and hobbies become a site-only section that the print sheet lays out differently. */
export const SiteStack = () => {
  const [skills, ...rest] = Facts;

  return (
    <SiteSection icon={skills?.icon ?? ``} id="stack" title={`Stack & interests`}>
      <div className={`stack`}>
        <ul className={`chips reveal`}>
          {(skills?.chips ?? []).map((chip, index) => (
            <li className={`chip`} key={chip} style={Stagger(index)}>
              {chip}
            </li>
          ))}
        </ul>
        <div className={`stack-aside`}>
          {rest.map(({ icon, label, text }, index) => (
            <div className={`mini glass reveal`} key={label} style={Stagger(index)}>
              <p className={`kicker`}>
                <Ico>{icon}</Ico>
                {` ${label}`}
              </p>
              <p className={`mini-text`}>
                <Inline text={text ?? ``} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </SiteSection>
  );
};
