"use client";

import { useEffect, useRef, useState } from "react";

import { editVirtualBlock } from "entities/editablePage";

import {EditBlockElementProps } from "shared/types";

import "./styles.scss";

export const EditBlockElement = ({
  blockIndex,
  elementIndex,
  props,
  type,
  value,
  setRedactState,
}: EditBlockElementProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(value);

  const formRef = useRef<HTMLFormElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
    };

    formRef.current?.addEventListener("submit", handleSubmit);
    inputRef.current?.focus();

    return () => {
      formRef.current?.removeEventListener("submit", handleSubmit);
    };
  }, []);

  const onSubmit = () => {
    setRedactState(false);
    editVirtualBlock(blockIndex, elementIndex, inputValue, type, props);
  };

  return (
    <form onSubmit={onSubmit} ref={formRef} className="custom-form">
      <input
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
        className={`custom-form__input ${type}`}
      />
    </form>
  );
};
