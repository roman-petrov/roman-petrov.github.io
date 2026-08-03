export type IcoProps = { children: string };

/** Decorative emoji: hidden from assistive tech, styled by the shared `.ico` class. */
export const Ico = ({ children }: IcoProps) => (
  <span aria-hidden="true" className={`ico`}>
    {children}
  </span>
);
