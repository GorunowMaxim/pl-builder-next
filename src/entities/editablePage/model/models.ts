export type PageBlock = {
  type: React.ElementType;
  props: any;
  children: (PageBlock | string)[];
};

export type PageState = {
  projectId: number;
  title: string;
  blocks: PageBlock[];
}