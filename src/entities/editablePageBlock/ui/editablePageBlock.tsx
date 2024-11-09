import { ElementType, useState } from "react";

import { VirtualNode } from "entities/editablePage";

const redactElements: ElementType[] = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];

type EditBlockElementProps = {
  blockIndex: number;
  elementIndex: number;
  props: { [index: string]: any };
  type: ElementType;
  value: string;
  onSubmit: (arg: boolean) => void;
};

type EditablePageBlockProps = {
  block: VirtualNode;
  index: number;
  EditBlockElement: ({ blockIndex, elementIndex, props, type, value, onSubmit }: EditBlockElementProps) => JSX.Element;
};

export const EditablePageBlock = ({ block, index, EditBlockElement }: EditablePageBlockProps) => {
  const [isRedact, setRedactState] = useState<boolean>(false);

  if (!redactElements.includes(block.type)) {
    return (
      <block.type {...block.props}>
        {block.children.map((child: VirtualNode | string) => {
          if (typeof child !== "string") {
            const block = child;
            return EditablePageBlock({ block, index, EditBlockElement });
          }

          return child;
        })}
      </block.type>
    );
  }

  return isRedact ? (
    <>
      {block.children.map((child: VirtualNode | string, elemIndex: number): any => {
        if (typeof child !== "string") {
          const block = child;
          return EditablePageBlock({ block, index, EditBlockElement });
        }

        return (
          <EditBlockElement
            onSubmit={setRedactState}
            blockIndex={index}
            elementIndex={elemIndex}
            value={child}
            type={block.type}
            props={block.props}
          />
        );
      })}
    </>
  ) : (
    <block.type {...block.props} onClick={() => setRedactState(true)}>
      {block.children.map((block: VirtualNode | string) => {
        if (typeof block !== "string") {
          return EditablePageBlock({ block, index, EditBlockElement });
        }

        return block;
      })}
    </block.type>
  );
};
