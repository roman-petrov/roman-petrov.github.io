import type { Action } from "./Types";

const all = <TElement extends HTMLElement>(selector: string) => [...document.querySelectorAll<TElement>(selector)];

const each = <TElement extends HTMLElement>(elements: readonly TElement[], apply: (element: TElement) => void) => {
  for (const element of elements) {
    apply(element);
  }
};

const one = (selector: string) => document.querySelector<HTMLElement>(selector) ?? undefined;

const subscribe = <TType extends keyof WindowEventMap>(
  type: TType,
  listener: (event: WindowEventMap[TType]) => void,
  options?: AddEventListenerOptions,
): Action => {
  addEventListener(type, listener, options);

  return () => {
    removeEventListener(type, listener, options);
  };
};

export const Dom = { all, each, one, subscribe };
