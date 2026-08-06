import type { Block } from "../Content";

import styles from "./Blocks.module.scss";
import { Facts } from "./Facts";
import { Inline } from "./Inline";
import { Projects } from "./Projects";
import { Showcase } from "./Showcase";

export type BlocksProps = { blocks: Block[] };

export const Blocks = ({ blocks }: BlocksProps) => (
  <>
    {blocks.map((block, index) =>
      block.type === `showcase` ? (
        <Showcase item={block.item} key={index} />
      ) : block.type === `facts` ? (
        <Facts items={block.items} key={index} />
      ) : block.type === `projects` ? (
        <Projects items={block.items} key={index} />
      ) : block.type === `list` ? (
        <ul className={styles.list} key={index}>
          {block.items.map(item => (
            <li key={item}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={block.type === `label` ? styles.label : undefined} key={index}>
          <Inline text={block.text} />
        </p>
      ),
    )}
  </>
);
