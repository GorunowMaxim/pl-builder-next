"use client";

import { useEffect, useRef, useState } from "react";
import { EditOutlined } from "@ant-design/icons";

import { editVirtualBlock } from "entities/editablePage";

import { EditBlockElementProps } from "shared/types";

import "./styles.scss";

export const EditElement = ({ blockIndex, elementIndex, block, value }: EditBlockElementProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentHeight, setCurrentHeight] = useState<string>("auto");

  const { type, props } = block;

  const htmlElemRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const buttonHandleClick = () => {
    setIsEditing(false);
    editVirtualBlock(blockIndex, elementIndex, inputValue, type, props);
  };

  const textAreaHandleClick = () => {
    if (textAreaRef.current !== null) {
      setCurrentHeight(`${textAreaRef.current.scrollHeight}px`);
    }
  };

  useEffect(() => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
    };

    if (htmlElemRef.current) {
      setCurrentHeight(`${htmlElemRef.current.offsetHeight + 20}px`);
    }

    textAreaRef.current?.focus();

    formRef.current?.addEventListener("submit", handleSubmit);

    return () => {
      formRef.current?.removeEventListener("submit", handleSubmit);
    };
  }, [isEditing]);

  return isEditing ? (
    <form ref={formRef} className="custom-form">
      <textarea
        ref={textAreaRef}
        style={{ height: currentHeight }}
        onInput={textAreaHandleClick}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className={`custom-form__area ${type}`}
      ></textarea>
      <button className="custom-form__button" onClick={buttonHandleClick}>
        <EditOutlined />
      </button>
    </form>
  ) : (
    <block.type ref={htmlElemRef} {...props} onClick={() => setIsEditing(true)}>
      {value}
    </block.type>
  );
};
