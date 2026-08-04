const each = <TElement extends HTMLElement>(elements: readonly TElement[], apply: (element: TElement) => void) => {
  for (const element of elements) {
    apply(element);
  }
};

const one = (selector: string) => document.querySelector<HTMLElement>(selector) ?? undefined;

const subscribe = (target: EventTarget, type: string, listen: () => void) => {
  target.addEventListener(type, listen);

  return () => {
    target.removeEventListener(type, listen);
  };
};

export const Dom = { each, one, subscribe };
