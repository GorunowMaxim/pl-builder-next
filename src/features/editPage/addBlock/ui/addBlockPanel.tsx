"use client";

import { addVirtualBlock } from "entities/editablePage";

import { blockConfigurations } from "../config/blockConfigurations";

import "./styles.scss";

export const AddBlockPanel = (): JSX.Element => {
  return (
    <div className="add-panel">
      <div className="add-panel__wrapper">
        {blockConfigurations.map((block, id) => {
          return (
            <button
              key={id}
              onClick={() => {
                const copyTemplate = structuredClone(block.template);
                addVirtualBlock(copyTemplate);
              }}
              className="add-panel__button"
            >
              {block.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};
