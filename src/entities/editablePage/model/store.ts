import { create } from "zustand";
import { PageBlock, PageState } from "./models";

export const usePageStore = create<PageState>(() => ({
  id: 0,
  projectId: 0,
  title: '',
  blocks: [],
}))

export const addBlock = (block: PageBlock) => {
  usePageStore.setState((state) => ({ blocks: [...state.blocks, block] }))
}