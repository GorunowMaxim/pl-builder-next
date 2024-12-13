import { VirtualNode } from "shared/types";

export type VirtualTree = {
  projectId: number;
  title: string;
  blocks: VirtualNode[];
}

export type UpdateVirtualBlock = (
  blockIndex: number,
  elementIndex: number,
  value: string,
  type: React.ElementType,
  props: { [index: string]: any }
) => void