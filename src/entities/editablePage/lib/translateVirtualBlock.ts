import { VirtualNode } from "shared/types";

type TranslateVirtualBlock = (direction: string, index: number, blocks: VirtualNode[]) => VirtualNode[]

export const translateVirtualBlock: TranslateVirtualBlock = (direction, index, blocks) => {
  const newBlocks = [...blocks];
  const diff = direction === 'down' ? 1 : -1;

  if ((direction === 'down' && index < newBlocks.length - 1) || (direction === 'up' && index > 0)) {
    [newBlocks[index], newBlocks[index + diff]] = [newBlocks[index + diff], newBlocks[index]];
  }

  return newBlocks;
};