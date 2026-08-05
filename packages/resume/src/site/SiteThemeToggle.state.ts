import type { MouseEvent } from "react";

import { _ } from "@cv/core";
import { Dom } from "@cv/core/browser";
import { useEffect, useState } from "react";

export const useSiteThemeToggleState = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const query = matchMedia(`(prefers-color-scheme: dark)`);
    const sync = () => {
      if (document.documentElement.dataset[`theme`] === undefined) {
        setDark(query.matches);
      }
    };

    sync();

    return Dom.subscribe(query, `change`, sync);
  }, []);

  const icon = dark ? `🌙` : `☀️`;

  const toggle = ({ clientX, clientY }: MouseEvent) => {
    const root = document.documentElement;

    root.style.setProperty(`--theme-transition-x`, _.px(clientX));
    root.style.setProperty(`--theme-transition-y`, _.px(clientY));

    void document.startViewTransition(() => {
      root.dataset[`theme`] = dark ? `light` : `dark`;
      setDark(!dark);
    });
  };

  return { icon, toggle };
};
