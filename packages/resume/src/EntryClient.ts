import { _, Dom } from "@cv/core";

import chrome from "./site/SiteDocument.module.scss";
import motion from "./site/SiteMotion.module.scss";
import navbar from "./site/SiteNav.module.scss";

const revealOptions = { rootMargin: `0px 0px -12% 0px`, threshold: 0.12 };
const activeOptions = { rootMargin: `-40% 0px -55% 0px` };
const parallaxRate = 0.12;
const scrolledFrom = 8;

const reveals = () => {
  const observer = new IntersectionObserver((entries, self) => {
    for (const entry of entries) {
      if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
        entry.target.classList.add(motion.isVisible);
        self.unobserve(entry.target);
      }
    }
  }, revealOptions);

  Dom.each(Dom.all(`.${motion.reveal}`), element => {
    observer.observe(element);
  });
};

const activeNav = () => {
  const links = Dom.all<HTMLAnchorElement>(`.${navbar.links} a`);
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        Dom.each(links, link => {
          link.classList.toggle(navbar.isActive, link.hash === `#${entry.target.id}`);
        });
      }
    }
  }, activeOptions);

  Dom.each(
    links.map(link => Dom.one(link.hash)).filter(section => section !== undefined),
    section => {
      observer.observe(section);
    },
  );
};

const scrollEffects = () => {
  const nav = Dom.one(`.${navbar.root}`);
  const bar = Dom.one(`.${chrome.bar}`);
  const parallax = Dom.one(`[data-parallax]`);
  let queued = false;

  const update = () => {
    queued = false;
    const scrolled = scrollY;
    const progress = _.ratio(scrolled, document.documentElement.scrollHeight - innerHeight);

    bar?.style.setProperty(`--progress`, String(_.clamp(progress, 0, 1)));
    nav?.classList.toggle(navbar.isScrolled, scrolled > scrolledFrom);
    parallax?.style.setProperty(`transform`, `translate3d(0, ${_.px(_.round(scrolled * parallaxRate, 1))}, 0)`);
  };

  const onScroll = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };

  Dom.subscribe(`scroll`, onScroll, { passive: true });
  Dom.subscribe(`resize`, onScroll, { passive: true });
  update();
};

reveals();
activeNav();
scrollEffects();
