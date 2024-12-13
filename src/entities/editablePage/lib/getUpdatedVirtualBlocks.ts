import { VirtualNode } from "shared/types";

type GetUpdatedVirtualBlocks = (blocks: VirtualNode[], blockIndex: number, newBlock: VirtualNode) => VirtualNode[]

export const getUpdatedVirtualBlocks: GetUpdatedVirtualBlocks = (blocks, blockIndex, newBlock) => {
  const newVirtualBlocks = structuredClone(blocks);
  newVirtualBlocks[blockIndex] = newBlock;
  return newVirtualBlocks;
}