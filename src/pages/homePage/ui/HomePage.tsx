"use client";

import { Header } from "widgets/header";
import { AddBlockPanel } from "features/editPage/addBlock";

import { usePageStore } from "entities/editablePage/model/store";
import { EditablePage } from "entities/editablePage";

import { createCustomElement } from "shared/lib/createCustomElement";

export default function HomePage() {
  const blocks = usePageStore((state) => state.blocks);
  return (
    <>
      <Header />
      <EditablePage>
        {blocks.map((block) => {
          return createCustomElement(block);
        })}
      </EditablePage>
      <AddBlockPanel />
    </>
  );
}
