export type VirtualNode = {
  type: React.ElementType;
  props: { [index: string]: any };
  children: (VirtualNode | string)[];
};

export type PageState = {
  projectId: number;
  title: string;
  blocks: VirtualNode[];
}