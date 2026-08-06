export type RolesClasses = Partial<Record<`role` | `roles`, string>>;

export type RolesProps = { classes: RolesClasses; items: string[] };

export const Roles = ({ classes, items }: RolesProps) => (
  <p className={classes.roles}>
    {items.map(item => (
      <span className={classes.role} key={item}>
        {item}
      </span>
    ))}
  </p>
);
