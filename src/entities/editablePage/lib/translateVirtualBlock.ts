import { VirtualNode } from "shared/types";

type TranslateVirtualBlock = (direction: "Up" | "Down", index: number, blocks: VirtualNode[]) => VirtualNode[]

export const translateVirtualBlock: TranslateVirtualBlock = (direction, index, blocks) => {
  const newBlocks = [...blocks];
  const diff = direction === 'Down' ? 1 : -1;

  if ((direction === 'Down' && index < newBlocks.length - 1) || (direction === 'Up' && index > 0)) {
    [newBlocks[index], newBlocks[index + diff]] = [newBlocks[index + diff], newBlocks[index]];
  }

  return newBlocks;
};