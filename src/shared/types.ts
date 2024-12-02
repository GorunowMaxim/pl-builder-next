export type VirtualNode = {
  type: React.ElementType;
  props: { [index: string]: any };
  children: (VirtualNode | string)[];
};

export type EditBlockElementProps = {
  blockIndex: number;
  elementIndex: number;
  block: VirtualNode;
  value: string;
};