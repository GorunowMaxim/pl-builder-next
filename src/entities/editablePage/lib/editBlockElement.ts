import { ElementType } from "react";
import { VirtualNode } from "../model/models";

export const editBlockElement = (
  elementIndex: number,
  value: string,
  block: VirtualNode,
  type: ElementType,
  props: { [index: string]: any }): VirtualNode => {
  const currentBlock = block;
  if (currentBlock.type === type && currentBlock.props === props) {
    currentBlock.children[elementIndex] = value;
    return currentBlock;
  }

  currentBlock.children.map((child) => {
    if (typeof (child) !== 'string') {
      return editBlockElement(elementIndex, value, child, type, props)
    }
  })

  return currentBlock;
}