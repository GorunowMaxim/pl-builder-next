import { VirtualNode } from "entities/editablePage";
import {  } from "entities/editablePage/model/models";
import { createElement, ReactElement } from "react";

export const createCustomElement = (block: VirtualNode): ReactElement => {
  const { type, props, children } = block;

  return createElement(
    type as string,
    props,
    children.map((child: VirtualNode | string) => (typeof child === "string" ? child : createCustomElement(child)))
  );
};
