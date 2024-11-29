import { useState } from "react";
import { EditBlockElementProps, VirtualNode } from "shared/types";

import "./styles.scss";

type EditablePageBlockProps = {
  block: VirtualNode;
  index: number;
  EditBlockElement: ({ blockIndex, elementIndex, props, type, value }: EditBlockElementProps) => JSX.Element;
};

type renderAccordionProps = {
  children: (string | VirtualNode)[];
  blockIndex: number;
  EditeBlockElement: ({ blockIndex, elementIndex, props, type, value }: EditBlockElementProps) => JSX.Element;
  EditablePageBlock: ({ block, index, EditBlockElement }: EditablePageBlockProps) => JSX.Element;
};

export const AccordionComponent = ({
  children,
  blockIndex,
  EditeBlockElement,
  EditablePageBlock,
}: renderAccordionProps): JSX.Element => {
  const [isOpen, setAccordionState] = useState<boolean>(false);

  const accordionState = isOpen ? "_visible" : "_hidden";

  return (
    <div className="accordion-wrapper">
      {children.map((child: VirtualNode | string, index) => {
        if (typeof child !== "string") {
          return child.props["data-accordion-tab"] ? (
            <div className="accordion-wrapper__tab">
              <EditablePageBlock block={child} index={blockIndex} EditBlockElement={EditeBlockElement} />
              <button
                onClick={() => setAccordionState((state) => !state)}
                className={`accordion-wrapper__button accordion-wrapper__button${accordionState}`}
              >
                <img src='/icons/arrowUp.svg' alt="" />
              </button>
            </div>
          ) : (
            <div className={`accordion-wrapper__info accordion-wrapper__info${accordionState}`}>
              <EditablePageBlock block={child} index={blockIndex} EditBlockElement={EditeBlockElement} />
            </div>
          );
        }
      })}
    </div>
  );
};
