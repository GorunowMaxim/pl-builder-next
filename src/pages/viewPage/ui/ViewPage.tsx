"use client";

import { usePageStore } from "entities/editablePage";

import { renderElements } from "shared/lib/renderElements";
import { VirtualNode } from "shared/types";
import { CustomLink } from "shared/ui/link";

import "./styles.scss";


export default function ViewPage(): JSX.Element {
  const currentPage: VirtualNode[] = usePageStore((state) => state.blocks);
  return (
    <>
      <CustomLink className="link-pages" href="/projects/pages">
        <img src="/icons/arrowleft.svg" alt="" />
      </CustomLink>
      <div className="result-page-wrapper">
        <main className="result-page__main">
          {currentPage.map((pageBlock: VirtualNode) => {
            return renderElements(pageBlock);
          })}
        </main>
      </div>
    </>
  );
}
