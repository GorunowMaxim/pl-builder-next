import { useState } from "react";
import { EditBlockElementProps, VirtualNode } from "shared/types";

type renderAccordionProps = {
  children: VirtualNode[];
  blockIndex: number;
  EditBlockElement: ({ blockIndex, elementIndex, props, type, value }: EditBlockElementProps) => JSX.Element;
};

export const RenderAccordion = ({ children, blockIndex, EditBlockElement }: renderAccordionProps): JSX.Element => {
  const [isOpen, setAccordionState] = useState<boolean>(false);

  return (
    <div className="accordion-wrapper">
      {children.map((child: VirtualNode, index) => {
        if (!child.props["data-accordion-info"]) {
          let childClassname = !child.props["data-accordion-info"]
            ? "accordion-wrapper__tab"
            : "accordion-wrapper__info";
          childClassname += isOpen ? "_visible" : "_hidden";
          return (
            <div className={childClassname}>
              {child.children.map((stringChild) => {
                if (typeof stringChild === "string")
                  return (
                    <EditBlockElement
                      blockIndex={blockIndex}
                      elementIndex={index}
                      props={child.props}
                      type={child.type}
                      value={stringChild}
                    />
                  );
              })}
              {!child.props["data-accordion-info"] && (
                <button onClick={(state) => setAccordionState(!state)} className="accordion-wrapper__button">
                  click
                </button>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};
