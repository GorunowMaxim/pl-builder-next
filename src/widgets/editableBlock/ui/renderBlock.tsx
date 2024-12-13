import { ElementType } from "react";

import { EditElement } from "features/editElement";
import { StaticElement } from "entities/staticElement";

import { Accordion } from "shared/ui/accordion";
import { VirtualNode } from "shared/types";

type RenderChildrenProps = {
  block: VirtualNode;
  blockIndex: number;
};

const redactElements: ElementType[] = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];
const singleTags: ElementType[] = ["img"];

export const RenderChildren = ({ block, blockIndex }: RenderChildrenProps): JSX.Element => {
  if (singleTags.includes(block.type)) return <block.type {...block.props} />;
  if (block.props["data-accordion"] === true) {
    return (
      <block.type {...block.props}>
        <Accordion children={block.children} blockIndex={blockIndex} RenderChildren={RenderChildren} />
      </block.type>
    );
  }
  if (!redactElements.includes(block.type))
    return <StaticElement block={block} blockIndex={blockIndex} RenderChildren={RenderChildren} />;

  // неправильная логика рендереа, так как при наличии каких либо нод, родительский элемент не отрендерится
  return (
    <>
      {block.children.map((child: VirtualNode | string, elemIndex: number): any => {
        if (typeof child !== "string") {
          const block = child;
          return (
            <StaticElement key={elemIndex} block={block} blockIndex={blockIndex} RenderChildren={RenderChildren} />
          );
        }
        return (
          <EditElement key={elemIndex} blockIndex={blockIndex} elementIndex={elemIndex} value={child} block={block} />
        );
      })}
    </>
  );
};
