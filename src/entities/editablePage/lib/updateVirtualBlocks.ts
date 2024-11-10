import { VirtualNode } from "shared/types";

type UpdateVirtualBlocks = (blocks: VirtualNode[], blockIndex: number, newBlock: VirtualNode) => VirtualNode[]

export const updateVirtualBlocks: UpdateVirtualBlocks = (blocks, blockIndex, newBlock) => {
  const newBlocks = blocks;
  newBlocks[blockIndex] = newBlock;
  return newBlocks
}