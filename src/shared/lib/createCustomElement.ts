import { PageBlock } from "entities/editablePage";
import { createElement, ReactElement } from "react";

export const createCustomElement = (block: PageBlock): ReactElement => {
  const { type, props, children } = block;

  return createElement(
    type,
    props,
    children.map((child) => (typeof child === "string" ? child : createCustomElement(child)))
  );
};
