export type SiteLink = { id: string; label: string };

/** Site order differs from the print sheet, so section numbers are derived from it. */
export const SiteOrder: SiteLink[] = [
  { id: `profile`, label: `Profile` },
  { id: `stack`, label: `Stack` },
  { id: `experience`, label: `Experience` },
  { id: `education`, label: `Education` },
  { id: `activities`, label: `Activities` },
];

export const SiteIndex = (id: string) => String(SiteOrder.findIndex(item => item.id === id) + 1).padStart(2, `0`);
