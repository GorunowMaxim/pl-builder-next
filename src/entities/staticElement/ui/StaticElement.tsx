import { VirtualNode } from "shared/types";

type StaticElementProps = {
  block: VirtualNode;
  blockIndex: number;
  RenderChildren: ({ block, blockIndex }: { block: VirtualNode; blockIndex: number }) => JSX.Element;
};

export const StaticElement = ({ block, blockIndex, RenderChildren }: StaticElementProps): JSX.Element => {
  return (
    <block.type {...block.props}>
      {block.children.map((child: VirtualNode | string, index) => {
        if (typeof child !== "string") {
          const block = child;
          return <RenderChildren key={index} block={block} blockIndex={blockIndex} />;
        }
        return child;
      })}
    </block.type>
  );
};
