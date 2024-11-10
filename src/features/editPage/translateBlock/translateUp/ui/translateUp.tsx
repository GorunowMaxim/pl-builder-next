"use client";

import { ArrowUpOutlined } from "@ant-design/icons";

import { translateVirtualBlockUp } from "entities/editablePage";

import "features/editPage/styles.scss";

export const TranslateUp = ({ index }: { index: number }): JSX.Element => {
  return (
    <button onClick={() => translateVirtualBlockUp(index)} className="edite-block-button">
      <ArrowUpOutlined />
    </button>
  );
};
