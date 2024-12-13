import { ElementType } from "react";
import { VirtualNode } from "shared/types";

type GetUpdatedVirtualBlock = (
  elementIndex: number,
  value: string,
  block: VirtualNode,
  type: ElementType,
  props: { [index: string]: any }
) => VirtualNode;

type DeleteVirtualElement = (
  block: VirtualNode,
  type: ElementType,
  props: { [index: string]: any }
) => VirtualNode;

const deleteVirtualElement: DeleteVirtualElement = (block, type, props) => {
  const currentBlock = structuredClone(block);

  const children = currentBlock.children.filter((child: VirtualNode | string) => {
    if (typeof (child) !== 'string') {
      if (child.type === type && JSON.stringify(child.props) === JSON.stringify(props)) {
        return false;
      } else {
        const updatedChild = deleteVirtualElement(child, type, props);
        Object.assign(child, updatedChild);
      }
    }
    return true;
  })

  return {...currentBlock, children};
}

export const getUpdatedVirtualBlock: GetUpdatedVirtualBlock = (elementIndex, value, block, type, props) => {
  const currentBlock = structuredClone(block);

  // if (value === '') return deleteVirtualElement(block, type, props);

  if (currentBlock.type === type && JSON.stringify(currentBlock.props) === JSON.stringify(props)) {
    currentBlock.children[elementIndex] = value;
    return currentBlock;
  }

  const children = currentBlock.children.map((child) => {
    if (typeof (child) !== 'string') {
      return getUpdatedVirtualBlock(elementIndex, value, child, type, props)
    }
    return child;
  })

  return {...currentBlock, children};
}