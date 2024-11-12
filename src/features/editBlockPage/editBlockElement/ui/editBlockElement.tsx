"use client";

import { useEffect, useRef, useState } from "react";

import { editVirtualBlock } from "entities/editablePage";

import { EditBlockElementProps } from "shared/types";

import "./styles.scss";

export const EditBlockElement = ({
  blockIndex,
  elementIndex,
  props,
  type,
  value,
}: EditBlockElementProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentHeight, setCurrentHeight] = useState<string>("auto");

  const htmlElemRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = () => {
    setIsEditing(false);
    editVirtualBlock(blockIndex, elementIndex, inputValue, type, props);
  }

  useEffect(() => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
    };

    if (htmlElemRef.current) {
      setCurrentHeight(`${htmlElemRef.current.offsetHeight + 25}px`);
    }

    inputRef.current?.focus();
    textAreaRef.current?.focus();
    
    formRef.current?.addEventListener("submit", handleSubmit);

    return () => {
      formRef.current?.removeEventListener("submit", handleSubmit);
    };
  }, [isEditing]);

  const block = { type };

  return isEditing ? (
    <form onSubmit={onSubmit} ref={formRef} style={{ height: currentHeight }} className="custom-form">
      {block.type === "p" ? (
        <textarea
          ref={textAreaRef}
          onChange={(e) => setInputValue(e.target.value)}
          onClick={onSubmit}
          value={inputValue}
          className={`custom-form__area ${type}`}
        ></textarea>
      ) : (
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className={`custom-form__input ${type}`}
        />
      )}
    </form>
  ) : (
    <block.type ref={htmlElemRef} {...props} onClick={() => setIsEditing(true)}>
      {value}
    </block.type>
  );
};
