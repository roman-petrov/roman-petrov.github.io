import { Dom } from "@cv/core";
import { useEffect, useState } from "react";

import { SiteOrder } from "./SiteOrder";

const options = { rootMargin: `-40% 0px -55% 0px` };

export const useSiteNavState = () => {
  const [activeId, setActiveId] = useState(``);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    }, options);

    const sections = SiteOrder.map(({ id }) => Dom.one(`#${id}`)).filter(section => section !== undefined);

    Dom.each(sections, section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return { activeId };
};
