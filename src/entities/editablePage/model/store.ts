import { create } from "zustand";

import { PageBlock, PageState } from "./models";
import { changeBlockPosition } from "../lib/changeBlockPosition";

export const usePageStore = create<PageState>(() => ({
  id: '',
  projectId: 0,
  title: '',
  blocks: [],
}))

export const addBlock = (block: PageBlock) => {
  usePageStore.setState((state) => ({ blocks: [...state.blocks, block] }))
}

export const deleteBlock = (index: number) => {
  usePageStore.setState((state) => ({ blocks: [...state.blocks.filter((_block, blockIndex) => blockIndex !== index)] }))
}

export const translateBlockUp = (index: number) => {
  usePageStore.setState((state) => ({ blocks: [...changeBlockPosition('up', index, state.blocks)] }));
};

export const translateBlockDown = (index: number) => {
  usePageStore.setState((state) => ({ blocks: [...changeBlockPosition('down', index, state.blocks)] }));
};
