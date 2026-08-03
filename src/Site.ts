/* Scroll behavior for the resume site: reveals, progress bar, active nav link, hero parallax. */

const reduceMotion = matchMedia(`(prefers-reduced-motion: reduce)`).matches;
const hasObserver = `IntersectionObserver` in window;

const setupReveals = () => {
  const targets = [...document.querySelectorAll(`.reveal`)];

  if (reduceMotion || !hasObserver) {
    for (const element of targets) {
      element.classList.add(`is-visible`);
    }

    return;
  }

  const observer = new IntersectionObserver(
    (entries, self) => {
      for (const entry of entries) {
        // Elements already scrolled past (deep link, restored position) never intersect, so reveal them too.
        const passed = entry.boundingClientRect.bottom < 0;

        if (entry.isIntersecting || passed) {
          entry.target.classList.add(`is-visible`);
          self.unobserve(entry.target);
        }
      }
    },
    { rootMargin: `0px 0px -12% 0px`, threshold: 0.12 },
  );

  for (const element of targets) {
    observer.observe(element);
  }
};

const setupActiveNav = () => {
  const links = [...document.querySelectorAll<HTMLAnchorElement>(`.nav-links a`)];
  const sections = links
    .map(link => document.querySelector(link.hash))
    .filter((section): section is Element => section !== null);

  if (sections.length === 0 || !hasObserver) {
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          for (const link of links) {
            link.classList.toggle(`is-active`, link.hash === `#${entry.target.id}`);
          }
        }
      }
    },
    { rootMargin: `-40% 0px -55% 0px` },
  );

  for (const section of sections) {
    observer.observe(section);
  }
};

const setupScrollEffects = () => {
  const nav = document.querySelector(`.nav`);
  const progress = document.querySelector<HTMLElement>(`.progress-bar`);
  const parallax = document.querySelector<HTMLElement>(`[data-parallax]`);
  let queued = false;

  const update = () => {
    queued = false;
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    progress?.style.setProperty(`--progress`, max > 0 ? String(Math.min(scrolled / max, 1)) : `0`);
    nav?.classList.toggle(`is-scrolled`, scrolled > 8);

    if (parallax !== null && !reduceMotion) {
      parallax.style.transform = `translate3d(0, ${(scrolled * 0.12).toFixed(1)}px, 0)`;
    }
  };

  const onScroll = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };

  addEventListener(`scroll`, onScroll, { passive: true });
  addEventListener(`resize`, onScroll, { passive: true });
  update();
};

setupReveals();
setupActiveNav();
setupScrollEffects();
