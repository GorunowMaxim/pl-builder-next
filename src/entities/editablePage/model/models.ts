export type PageBlock = {
  type: React.ElementType;
  props: any;
  children: (PageBlock | string)[];
};

export type PageState = {
  id: number;
  projectId: number;
  title: string;
  blocks: PageBlock[];
}