import { VirtualNode } from "shared/types";

export type VirtualTree = {
  projectId: number;
  title: string;
  blocks: VirtualNode[];
}

export type EditVirtualBlock = (
  blockIndex: number,
  elementIndex: number,
  value: string,
  type: React.ElementType,
  props: { [index: string]: any }
) => void