import { useState } from "react";

import { VirtualNode } from "shared/types";

import "./styles.scss";

type AccordionProps = {
  children: (string | VirtualNode)[];
  blockIndex: number;
  RenderChildren: ({ block, blockIndex }: { block: VirtualNode; blockIndex: number }) => JSX.Element;
};

export const Accordion = ({ children, blockIndex, RenderChildren }: AccordionProps): JSX.Element => {
  const [isOpen, setAccordionState] = useState<boolean>(false);

  const buttonClassName = `accordion-wrapper__button accordion-wrapper__button${isOpen ? "_visible" : "_hidden"}`;

  return (
    <div className="accordion-wrapper">
      {children.map((child: VirtualNode | string, index) => {
        if (typeof child !== "string") {

          const isTab = child.props["data-accordion-tab"];
          const wrapperClassName = isTab
            ? "accordion-wrapper__tab"
            : `accordion-wrapper__info accordion-wrapper__info${isOpen ? "_visible" : "_hidden"}`;

          return (
            <div key={index} className={wrapperClassName}>
              <RenderChildren block={child} blockIndex={blockIndex} />
              {isTab && (
                <button onClick={() => setAccordionState((state) => !state)} className={buttonClassName}>
                  <img src="/icons/arrowUp.svg" alt="" />
                </button>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};
