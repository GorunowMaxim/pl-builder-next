"use client";

import { useEffect, useRef, useState } from "react";
import { EditOutlined } from "@ant-design/icons";

import { updateVirtualBlock } from "entities/editablePage";

import { EditBlockElementProps } from "shared/types";

import "./styles.scss";

export const EditElement = ({ blockIndex, elementIndex, block, value }: EditBlockElementProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentHeight, setCurrentHeight] = useState<string>("auto");
  
  const { type, props } = block;

  const htmlElemRef = useRef<HTMLElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const buttonHandleClick = () => {
    setIsEditing(false);
    updateVirtualBlock(blockIndex, elementIndex, inputValue, type, props);
  };

  const textAreaHandleClick = () => {
    if (textAreaRef.current !== null) {
      setCurrentHeight(`${textAreaRef.current.scrollHeight}px`);
    }
  };

  useEffect(() => {
    if (htmlElemRef.current) {
      setCurrentHeight(`${htmlElemRef.current.offsetHeight + 20}px`);
    }
  }, [isEditing]);

  return isEditing ? (
    <div className="editable-element">
      <textarea
        autoFocus
        ref={textAreaRef}
        style={{ height: currentHeight }}
        onInput={textAreaHandleClick}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className={`editable-element__text-area ${type}`}
      ></textarea>
      <button className="editable-element__button" onClick={buttonHandleClick}>
        <EditOutlined />
      </button>
    </div>
  ) : (
    <block.type ref={htmlElemRef} {...props} onClick={() => setIsEditing(true)}>
      {value}
    </block.type>
  );
};
