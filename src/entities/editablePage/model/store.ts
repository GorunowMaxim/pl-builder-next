import { create } from "zustand";

import { translateVirtualBlock } from "../lib/translateVirtualBlock";
import { editVirtualElement } from "../lib/editVirtualElement";
import { updateVirtualBlocks } from "../lib/updateVirtualBlocks";

import { EditVirtualBlock, VirtualTree } from "./models";
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
  usePageStore.setState((state) => ({ blocks: [...translateVirtualBlock('up', index, state.blocks)] }));
};

export const translateVirtualBlockDown = (index: number) => {
  usePageStore.setState((state) => ({ blocks: [...translateVirtualBlock('down', index, state.blocks)] }));
};

export const editVirtualBlock: EditVirtualBlock = (blockIndex, elementIndex, value, type, props) => {

  usePageStore.setState((state) => ({
    blocks:
      [...updateVirtualBlocks(state.blocks, blockIndex, editVirtualElement(elementIndex, value, state.blocks[blockIndex], type, props))]
  }))
}
