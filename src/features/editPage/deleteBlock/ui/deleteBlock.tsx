'use client'

import { DeleteFilled } from "@ant-design/icons";

import { deleteVirtualBlock } from "entities/editablePage";

import "features/editPage/styles.scss";

export const DeleteBlock = ({ index }: { index: number }): JSX.Element => {
  return (
    <button onClick={() => deleteVirtualBlock(index)} className="edite-block-button">
      <DeleteFilled />
    </button>
  );
};
