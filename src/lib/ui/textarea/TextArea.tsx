import { BorderColors, GreyColors } from "@/lib/theme";
import { ChangeEventHandler, FC, useEffect, useRef, useState } from "react";
import { Label, Root } from "./TextArea.styled";

export interface TextAreaAutoSizeProps {
  borderColor?: BorderColors;
  name?: string;
  label?: string;
  [x: string]: any;
  value?: string;
  maxHeight?: number;
  autoFocus?: boolean;
  rowLength?: number;
  backgroundColorTone?: GreyColors;
}

export const TextAreaAutoSize: FC<TextAreaAutoSizeProps> = ({
  value,
  maxHeight = 0,
  onChange,
  borderColor,
  backgroundColorTone,
  name,
  label,
  autoFocus,
  rowLength,
  ...otherProps
}) => {
  const rootRef = useRef<HTMLTextAreaElement>(null);
  const [rootHeight, setRootHeight] = useState('auto');
  const [textAreaHeight, setTextAreaHeight] = useState('auto');

  useEffect(() => {
    if (rootRef.current && rootRef.current.scrollHeight < maxHeight) {
      setRootHeight(`${rootRef.current.scrollHeight}px`);
      setTextAreaHeight(`${rootRef.current.scrollHeight}px`);
      autoFocus && rootRef.current.focus();
    }
  }, [value, autoFocus, maxHeight]);

  const handleChange = (e: ChangeEventHandler) => {
    if (rootRef.current && rootRef.current.scrollHeight < maxHeight) {
      setTextAreaHeight('auto');
      setRootHeight(`${rootRef.current.scrollHeight}px`);
    }

    onChange(e);
  };

  return (
    <div style={{ minHeight: rootHeight, maxHeight: `${maxHeight}px` }}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Root
        rows={rowLength || 4}
        style={{
          height: textAreaHeight,
        }}
        ref={rootRef}
        borderColor={borderColor}
        backgroundColorTone={backgroundColorTone}
        onChange={handleChange}
        name={name}
        value={value}
        {...otherProps}
      ></Root>
    </div>
  );
};

TextAreaAutoSize.defaultProps = {
  maxHeight: 200,
};