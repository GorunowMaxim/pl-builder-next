import { ElementType } from "react";
import { VirtualNode } from "shared/types";

type EditVirtualElement = (
  elementIndex: number,
  value: string,
  block: VirtualNode,
  type: ElementType,
  props: { [index: string]: any }
) => VirtualNode;

export const editVirtualElement: EditVirtualElement = (elementIndex, value, block, type, props) => {
  const currentBlock = block;
  if (currentBlock.type === type && currentBlock.props === props) {
    currentBlock.children[elementIndex] = value;
    return currentBlock;
  }

  currentBlock.children.map((child) => {
    if (typeof (child) !== 'string') {
      return editVirtualElement(elementIndex, value, child, type, props)
    }
  })

  return currentBlock;
}