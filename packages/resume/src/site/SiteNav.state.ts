import { Dom } from "@cv/core/browser";
import { useEffect, useState } from "react";

import { Content } from "../Content";

export const useSiteNavState = () => {
  const [activeId, setActiveId] = useState(``);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: `-40% 0px -55% 0px` },
    );

    const sections = Content.sections.map(({ id }) => Dom.one(`#${id}`)).filter(section => section !== undefined);

    Dom.each(sections, section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return { activeId };
};
