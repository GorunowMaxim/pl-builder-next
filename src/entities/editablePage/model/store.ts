import { create } from "zustand";

import { translateVirtualBlock } from "../lib/translateVirtualBlock";
import { getUpdatedVirtualBlock } from "../lib/getUpdatedVirtualBlock";
import { getUpdatedVirtualBlocks } from "../lib/getUpdatedVirtualBlocks";

import { UpdateVirtualBlock, VirtualTree } from "./models";
import { VirtualNode } from "shared/types";

export const usePageStore = create<VirtualTree>(() => ({
  projectId: 0,
  title: '',
  blocks: [],
}))

export const addVirtualBlock = (block: VirtualNode) => {
  usePageStore.setState((state) => ({ blocks: [...state.blocks, block] }))
};

export const deleteVirtualBlock = (index: number) => {
  usePageStore.setState((state) => ({ blocks: [...state.blocks.filter((_block, blockIndex) => blockIndex !== index)] }))
};

export const translateVirtualBlockUp = (index: number) => {
  usePageStore.setState((state) => ({ blocks: [...translateVirtualBlock('Up', index, state.blocks)] }));
};

export const translateVirtualBlockDown = (index: number) => {
  usePageStore.setState((state) => ({ blocks: [...translateVirtualBlock('Down', index, state.blocks)] }));
};

export const updateVirtualBlock: UpdateVirtualBlock = (blockIndex, elementIndex, value, type, props) => {
  usePageStore.setState((state) => {
    const newVirtualBlock = getUpdatedVirtualBlock(elementIndex, value, state.blocks[blockIndex], type, props)
    const newVirtualBlocks = getUpdatedVirtualBlocks(state.blocks, blockIndex, newVirtualBlock)
    return { blocks: [...newVirtualBlocks] }
  })
}
