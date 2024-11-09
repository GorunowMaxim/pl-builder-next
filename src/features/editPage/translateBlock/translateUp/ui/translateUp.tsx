'use client'

import { ArrowUpOutlined } from "@ant-design/icons";

import { translateBlockUp } from "entities/editablePage/model/store";

import "features/editPage/styles.scss";

export const TranslateUp = ({ index }: { index: number }) => {
  return (
    <button onClick={() => translateBlockUp(index)} className="edite-block-button">
      <ArrowUpOutlined />
    </button>
  );
};
