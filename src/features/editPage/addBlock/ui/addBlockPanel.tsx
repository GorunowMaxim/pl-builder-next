"use client";

import { addBlock } from "entities/editablePage";

import { buttonConfig } from "../config/panelProps";

import "./styles.scss";

export const AddBlockPanel = () => {
  return (
    <div className="add-panel">
      <div className="add-panel__wrapper">
        {buttonConfig.map((pageBlock, id) => {
          return (
            <button key={id} onClick={() => addBlock(pageBlock.data)} className="add-panel__button">
              {pageBlock.buttonTitle}
            </button>
          );
        })}
      </div>
    </div>
  );
};
