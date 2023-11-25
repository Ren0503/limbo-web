import { BorderColors } from "@/lib/theme";
import { FC, useEffect, useRef } from "react";
import { Description, Error, Input, Label } from "./InputText.styled";

export interface InputTextProps {
  borderColor?: BorderColors;
  name: string;
  label?: string;
  description?: string;
  autoFocus?: boolean;
  error?: string;
  [x: string]: any;
}

export const InputText: FC<InputTextProps> = ({ borderColor, error, name, label, description, autoFocus, ...otherProps }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      autoFocus && inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      {description && <Description>{description}</Description>}
      {error && <Error>{error}</Error>}
      <Input ref={inputRef} borderColor={borderColor} error={error} name={name} {...otherProps} />
    </>
  );
};
