import type { Block } from "../Content";
import type { ProjectClasses } from "./Projects";
import type { ShowcaseClasses } from "./Showcase";

import { Inline } from "./Inline";
import { Projects } from "./Projects";
import { Showcase } from "./Showcase";

export type BlockClasses = Partial<Record<Exclude<Block[`type`], `projects` | `showcase`>, string>> & {
  project: ProjectClasses;
  showcase: ShowcaseClasses;
};

export type BlocksProps = { blocks: Block[]; classes: BlockClasses };

export const Blocks = ({ blocks, classes }: BlocksProps) => (
  <>
    {blocks.map((block, index) =>
      block.type === `showcase` ? (
        <Showcase classes={classes.showcase} item={block.item} key={index} />
      ) : block.type === `projects` ? (
        <Projects classes={classes.project} items={block.items} key={index} />
      ) : block.type === `list` ? (
        <ul className={classes.list} key={index}>
          {block.items.map(item => (
            <li key={item}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={classes[block.type]} key={index}>
          <Inline text={block.text} />
        </p>
      ),
    )}
  </>
);
