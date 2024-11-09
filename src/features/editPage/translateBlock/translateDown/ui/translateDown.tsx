import { ArrowDownOutlined } from "@ant-design/icons";

import { translateBlockDown } from "entities/editablePage/model/store";

import "../../styles.scss";

export const TranslateDown = ({ index }: { index: number }) => {
  return (
    <button onClick={() => translateBlockDown(index)} className="edite-block-button">
      <ArrowDownOutlined />
    </button>
  );
};