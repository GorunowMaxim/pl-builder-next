"use client";

import { Header } from "widgets/header";
import { BlockEditor } from "widgets/blockEditor/ui/blockEditor";
import { AddBlockPanel } from "features/editPage/addBlock";
import { usePageStore } from "entities/editablePage/model/store";
import { EditablePage } from "entities/editablePage";

export default function HomePage() {
  const blocks = usePageStore((state) => state.blocks);
  return (
    <>
      <Header />
      <EditablePage>
        {blocks.map((block, index) => {
          return <BlockEditor block={block} index={index} />;
        })}
      </EditablePage>
      <AddBlockPanel />
    </>
  );
}
