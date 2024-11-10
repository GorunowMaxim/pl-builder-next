'use client'

import { ElementType, useState } from "react";

import { EditBlockElementProps, VirtualNode } from "shared/types";

const redactElements: ElementType[] = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];

type EditablePageBlockProps = {
  block: VirtualNode;
  index: number;
  EditBlockElement: ({ blockIndex, elementIndex, props, type, value, onSubmit }: EditBlockElementProps) => JSX.Element;
};

export const EditablePageBlock = ({ block, index, EditBlockElement }: EditablePageBlockProps): JSX.Element => {
  const [isRedact, setRedactState] = useState<boolean>(false);

  if (!redactElements.includes(block.type)) {
    return (
      <block.type {...block.props}>
        {block.children.map((child: VirtualNode | string) => {
          if (typeof child !== "string") {
            const block = child;
            return (
              <EditablePageBlock
                block={block}
                index={index}
                EditBlockElement={EditBlockElement}
              />
            );
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
          return (
            <EditablePageBlock
              block={block}
              index={index}
              EditBlockElement={EditBlockElement}
            />
          );
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
          return (
            <EditablePageBlock
              block={block}
              index={index}
              EditBlockElement={EditBlockElement}
            />
          );
        }

        return block;
      })}
    </block.type>
  );
};
