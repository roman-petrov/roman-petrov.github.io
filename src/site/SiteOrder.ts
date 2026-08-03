export type SiteLink = { id: string; label: string };

export const SiteOrder: SiteLink[] = [
  { id: `profile`, label: `Profile` },
  { id: `stack`, label: `Stack` },
  { id: `experience`, label: `Experience` },
  { id: `education`, label: `Education` },
  { id: `activities`, label: `Activities` },
];

export const SiteIndex = (id: string) => String(SiteOrder.findIndex(item => item.id === id) + 1).padStart(2, `0`);
