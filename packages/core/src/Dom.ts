const each = <TElement extends HTMLElement>(elements: readonly TElement[], apply: (element: TElement) => void) => {
  for (const element of elements) {
    apply(element);
  }
};

const one = (selector: string) => document.querySelector<HTMLElement>(selector) ?? undefined;

export const Dom = { each, one };
