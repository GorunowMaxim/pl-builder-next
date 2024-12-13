"use client";

import { DeleteBlock } from "features/editPage/deleteBlock";
import { TranslateDown, TranslateUp } from "features/editPage/translateBlock";

import { EditablePage, usePageStore } from "entities/editablePage";

import { RenderChildren } from "./renderBlock";

import "./styles.scss";

export const EditableBlock = (): JSX.Element => {
  const blocks = usePageStore((state) => state.blocks);
  return (
    <EditablePage>
      {blocks.map((block, index) => {
        return (
          <div key={index} className="block-editor">
            <div className="block-editor__wrapper">
              <RenderChildren block={block} blockIndex={index} />
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
