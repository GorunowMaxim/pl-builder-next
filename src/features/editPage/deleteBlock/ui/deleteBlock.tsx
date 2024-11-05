import { DeleteFilled } from "@ant-design/icons";
import { deleteBlock } from "entities/editablePage";

export const DeleteBlock = ({ index }: { index: number }) => {
  return (
    <button onClick={() => deleteBlock(index)} className="edite-block-button">
      <DeleteFilled />
    </button>
  );
};
