import { VirtualNode } from "../model/models";

export const updateBlocks = (blocks: VirtualNode[], blockIndex: number, newBlock: VirtualNode) => {
  const newBlocks = blocks;
  newBlocks[blockIndex] = newBlock;
  return newBlocks
}