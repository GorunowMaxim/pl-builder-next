"use client";

import { DeleteBlock } from "features/editPage/deleteBlock";
import { TranslateDown, TranslateUp } from "features/editPage/translateBlock";
import { EditBlockElement } from "features/editBlockPage/editBlockElement";

import { EditablePage, usePageStore } from "entities/editablePage";
import { EditablePageBlock } from "entities/editablePageBlock";

import "./styles.scss";

export const PageEditor = () => {
  const blocks = usePageStore((state) => state.blocks);
  return (
    <EditablePage>
      {blocks.map((block, index) => {
        return (
          <div className="block-editor">
            <div className="block-editor__wrapper">
              <EditablePageBlock block={block} index={index} EditBlockElement={EditBlockElement} />
              <div className="block-editor__features">
                <DeleteBlock index={index} />
                <TranslateUp index={index} />
                <TranslateDown index={index} />
              </div>
            </div>
          </div>
        );
      })}
    </EditablePage>
  );
};
