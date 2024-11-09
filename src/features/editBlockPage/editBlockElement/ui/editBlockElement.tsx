"use client";

import { ElementType, useEffect, useRef } from "react";

import { editVirtualBlock } from "entities/editablePage";

type EditBlockElementProps = {
  blockIndex: number;
  elementIndex: number;
  props: { [index: string]: any };
  type: ElementType;
  value: string;
  onSubmit: (arg: boolean) => void;
};

export const EditBlockElement = ({ blockIndex, elementIndex, props, type, value, onSubmit }: EditBlockElementProps) => {
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

  return (
    <form onSubmit={() => onSubmit(false)} ref={formRef} className="custom-form">
      <input
        ref={inputRef}
        onChange={(e) => editVirtualBlock(blockIndex, elementIndex, e.target.value, type, props)}
        type="text"
        value={value}
        className="castom-form__input"
      />
    </form>
  );
};