"use client";

import { ArrowDownOutlined } from "@ant-design/icons";

import { translateVirtualBlockDown } from "entities/editablePage";

import "features/editPage/styles.scss";

export const TranslateDown = ({ index }: { index: number }): JSX.Element => {
  return (
    <button onClick={() => translateVirtualBlockDown(index)} className="edite-block-button">
      <ArrowDownOutlined />
    </button>
  );
};
