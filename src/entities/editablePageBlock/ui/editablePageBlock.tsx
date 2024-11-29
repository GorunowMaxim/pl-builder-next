"use client";

import { ElementType } from "react";

import { EditBlockElementProps, VirtualNode } from "shared/types";
import { AccordionComponent } from "shared/ui/accordionComponent";

const redactElements: ElementType[] = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];
const singleTags: ElementType[] = ["img"];

type EditablePageBlockProps = {
  block: VirtualNode;
  index: number;
  EditBlockElement: ({ blockIndex, elementIndex, props, type, value }: EditBlockElementProps) => JSX.Element;
};

export const EditablePageBlock = ({ block, index, EditBlockElement }: EditablePageBlockProps): JSX.Element => {
  if (singleTags.includes(block.type)) return <block.type {...block.props} />;
  if (block.props["data-accordion"] === true) {
    console.log("render accordion");
    return (
      <AccordionComponent
        children={block.children}
        blockIndex={index}
        EditeBlockElement={EditBlockElement}
        EditablePageBlock={EditablePageBlock}
      />
    );
  }

  if (!redactElements.includes(block.type)) {
    return (
      <block.type {...block.props}>
        {block.children.map((child: VirtualNode | string) => {
          if (typeof child !== "string") {
            const block = child;
            return <EditablePageBlock block={block} index={index} EditBlockElement={EditBlockElement} />;
          }

          return child;
        })}
      </block.type>
    );
  }

  return (
    <>
      {block.children.map((child: VirtualNode | string, elemIndex: number): any => {
        if (typeof child !== "string") {
          const block = child;
          return <EditablePageBlock block={block} index={index} EditBlockElement={EditBlockElement} />;
        }

        return (
          <EditBlockElement
            blockIndex={index}
            elementIndex={elemIndex}
            value={child}
            type={block.type}
            props={block.props}
          />
        );
      })}
    </>
  );
};
