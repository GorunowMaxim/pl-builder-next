export type VirtualNode = {
  type: React.ElementType;
  props: { [index: string]: any };
  children: (VirtualNode | string)[];
};

export type EditBlockElementProps = {
  blockIndex: number;
  elementIndex: number;
  props: { [index: string]: any };
  type: React.ElementType;
  value: string;
  onSubmit: (arg: boolean) => void;
};