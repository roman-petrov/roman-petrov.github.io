const root = document.documentElement;

const dark = () =>
  (root.dataset[`theme`] ?? (matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light`)) === `dark`;

const chrome = () => {
  const color = getComputedStyle(root).getPropertyValue(`--color-bg`).trim();

  if (color === ``) {
    return;
  }

  document.querySelector(`meta[name="theme-color"][data-chrome]`)?.remove();

  const meta = document.createElement(`meta`);

  meta.content = color;
  meta.dataset[`chrome`] = ``;
  meta.name = `theme-color`;
  document.head.prepend(meta);
};

const toggle = ({ clientX, clientY }: MouseEvent) => {
  const theme = dark() ? `light` : `dark`;
  const apply = () => {
    root.dataset[`theme`] = theme;
    chrome();
  };

  root.style.setProperty(`--theme-transition-x`, `${String(clientX)}px`);
  root.style.setProperty(`--theme-transition-y`, `${String(clientY)}px`);

  void document.startViewTransition(apply);
};

document.querySelector<HTMLElement>(`[data-theme-toggle]`)?.addEventListener(`click`, toggle);
chrome();
