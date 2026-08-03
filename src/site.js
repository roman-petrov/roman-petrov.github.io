/* Scroll behavior for the resume site: reveals, progress bar, active nav link, hero parallax. */

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function setupReveals() {
  const targets = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach(element => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, self) => {
      for (const entry of entries) {
        // Elements already scrolled past (deep link, restored position) never intersect, so reveal them too.
        const passed = entry.boundingClientRect.bottom < 0;
        if (!entry.isIntersecting && !passed) continue;
        entry.target.classList.add("is-visible");
        self.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  targets.forEach(element => observer.observe(element));
}

function setupActiveNav() {
  const links = [...document.querySelectorAll(".nav-links a")];
  const sections = links
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(section => section !== null);

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of links) {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        }
      }
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach(section => observer.observe(section));
}

function setupScrollEffects() {
  const nav = document.querySelector(".nav");
  const progress = document.querySelector(".progress-bar");
  const parallax = document.querySelector("[data-parallax]");
  let queued = false;

  const update = () => {
    queued = false;
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    progress?.style.setProperty("--progress", max > 0 ? String(Math.min(scrolled / max, 1)) : "0");
    nav?.classList.toggle("is-scrolled", scrolled > 8);

    if (parallax && !reduceMotion) {
      parallax.style.transform = `translate3d(0, ${(scrolled * 0.12).toFixed(1)}px, 0)`;
    }
  };

  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };

  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll, { passive: true });
  update();
}

setupReveals();
setupActiveNav();
setupScrollEffects();
