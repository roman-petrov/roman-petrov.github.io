const root = document.documentElement;

const dark = () =>
  (root.dataset[`theme`] ?? (matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light`)) === `dark`;

const toggle = ({ clientX, clientY }: MouseEvent) => {
  const theme = dark() ? `light` : `dark`;
  const apply = () => {
    root.dataset[`theme`] = theme;
  };

  root.style.setProperty(`--theme-transition-x`, `${String(clientX)}px`);
  root.style.setProperty(`--theme-transition-y`, `${String(clientY)}px`);

  void document.startViewTransition(apply);
};

document.querySelector<HTMLElement>(`[data-theme-toggle]`)?.addEventListener(`click`, toggle);
