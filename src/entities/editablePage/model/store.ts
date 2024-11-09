import { create } from "zustand";

import { ElementType } from "react";

import { VirtualNode, PageState } from "./models";
import { changeBlockPosition } from "../lib/changeBlockPosition";
import { editBlockElement } from "../lib/editBlockElement";
import { updateBlocks } from "../lib/updateBlocks";

export const usePageStore = create<PageState>(() => ({
  id: '',
  projectId: 0,
  title: '',
  blocks: [],
}))

export const addBlock = (block: VirtualNode) => {
  usePageStore.setState((state) => ({ blocks: [...state.blocks, block] }))
};

export const deleteBlock = (index: number) => {
  usePageStore.setState((state) => ({ blocks: [...state.blocks.filter((_block, blockIndex) => blockIndex !== index)] }))
};

export const translateBlockUp = (index: number) => {
  usePageStore.setState((state) => ({ blocks: [...changeBlockPosition('up', index, state.blocks)] }));
};

export const translateBlockDown = (index: number) => {
  usePageStore.setState((state) => ({ blocks: [...changeBlockPosition('down', index, state.blocks)] }));
};

export const editVirtualBlock = (
  blockIndex: number, elementIndex: number, value: string, type: ElementType, props: { [index: string]: any }) => {

  usePageStore.setState((state) => ({
    blocks:
      [...updateBlocks(state.blocks, blockIndex, editBlockElement(elementIndex, value, state.blocks[blockIndex], type, props))]
  }))
}
