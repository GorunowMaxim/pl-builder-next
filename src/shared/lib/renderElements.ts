import { createElement, ReactElement, ReactNode } from "react";
import { VirtualNode } from "shared/types";

export const renderElements = (element: VirtualNode): ReactNode => {
  const { type, props, children } = element;

  return createElement(type, props, ...children.map((child) => typeof child === 'string' ? child : renderElements(child)))
}