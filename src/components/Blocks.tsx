import type { Block } from "../Content";

import { Inline } from "./Inline";

export type BlockClasses = { label: string; lead: string; list: string; pull: string; text?: string };

export type BlocksProps = { blocks: Block[]; classes: BlockClasses };

export const Blocks = ({ blocks, classes }: BlocksProps) => (
  <>
    {blocks.map((block, index) =>
      block.type === `list` ? (
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
