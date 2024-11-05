import { DeleteBlock } from "features/editPage/deleteBlock";
import { TranslateDown, TranslateUp } from "features/editPage/translateBlock";
import { PageBlock } from "entities/editablePage";
import { createCustomElement } from "shared/lib/createCustomElement";

import "./styles.scss";

export const BlockEditor = ({ index, block }: { index: number; block: PageBlock }) => {
  return (
    <div className="block-editor">
      <div className="block-editor__wrapper">
        {createCustomElement(block)}
        <div className="button-blocks">
          <DeleteBlock index={index} />
          <TranslateUp index={index} />
          <TranslateDown index={index} />
        </div>
      </div>
    </div>
  );
};
