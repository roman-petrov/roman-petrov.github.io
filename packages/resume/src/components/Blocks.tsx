import type { Block } from "../Content";
import type { ProjectClasses } from "./Projects";

import { Inline } from "./Inline";
import { Projects } from "./Projects";

export type BlockClasses = Partial<Record<Exclude<Block[`type`], `projects`>, string>> & { project: ProjectClasses };

export type BlocksProps = { blocks: Block[]; classes: BlockClasses };

export const Blocks = ({ blocks, classes }: BlocksProps) => (
  <>
    {blocks.map((block, index) =>
      block.type === `projects` ? (
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
